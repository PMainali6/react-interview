import { useEffect, useState, useDeferredValue } from "react";
import SuggestionList from "./SuggestionList";
import { getData, suggestion } from "./data";
import { delay, keyCodes, stringTrim } from "./utils";
import "./AutoSuggest.css";

export default function AutoSuggest() {
  const [searchKey, setSearchKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(suggestion);
  let highlighted = -1;
  const finalSearchValue = useDeferredValue(searchKey);

  useEffect(() => {
    async function fetchData() {
      try {
        return await getData();
      } catch (err) {
        console.error(err);
      }
    }

    // if the search key is more than 3 letters
    // only then the api is called
    if (finalSearchValue.length >= 3) {
      fetchData().then((res) => setList(res));
    }
    // if the length is 0, we set the suggestion list
    else if (finalSearchValue.length === 0) {
      setList(suggestion);
    }
  }, [finalSearchValue]);

  // suggestion box expands
  function handleFocus() {
    console.log("1. handleFocus");

    setIsOpen(true);
  }

  // check for (up, down, enter) keyCode
  // to select options in the suggestion box
  function handleKeyDown(e) {
    console.log("2. handleKeyDown");

    if (!isOpen) return;
    if (e.keyCode === keyCodes.up) {
      highlighted = highlighted > 0 ? highlighted - 1 : list.length - 1;
    } else if (e.keyCode === keyCodes.down) {
      highlighted = highlighted <= list.length - 1 ? highlighted + 1 : 0;
    } else if (e.keyCode === keyCodes.enter) {
      const value = list[highlighted];
      setSearchKey(value);
      setIsOpen(false);
    }
  }

  // handle the search key
  // sanitize & store it
  // react sanitizes the string for us
  // we have to trim the str
  // and escape the character
  function handleChange(e) {
    console.log("3. handleChange");
    const string = e.target.value;
    const trimmedStr = stringTrim(string);
    setSearchKey(trimmedStr);
  }

  function handleKeyUp() {
    console.log("4. handleKeyUp");
  }

  // close the suggestion list
  function handleBlur() {
    console.log("5. handleBlur");

    function callback() {
      setIsOpen(false);
    }
    delay(callback, 500);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Start typing App..."
        className="search-input"
        value={searchKey}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
      />
      <SuggestionList highlighted={highlighted} isOpen={isOpen} list={list} />
    </div>
  );
}
