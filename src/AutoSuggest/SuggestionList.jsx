import SuggestionItem from "./SuggestionItem";

export default function SuggestionList({ isOpen, list, highlighted }) {
  if (!isOpen) return null;

  return (
    <div className="suggestion-list">
      {list.map((item, index) => (
        <SuggestionItem
          selected={highlighted === index}
          key={item}
          item={item}
        />
      ))}
    </div>
  );
}
