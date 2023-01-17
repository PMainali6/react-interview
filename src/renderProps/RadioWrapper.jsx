import React, { useCallback } from 'react';
import useRadio from './useRadio';
import { get } from 'lodash';
import Radio from './Radio';

const deliveryOptions = [
  {
    "value": {
      "type": "UnSlottedTierValue",
      "selected": false,
      "slaMessageConstruct": {
        "formattedText": null,
        "level": "info",
        "text": "Delivery by 11 PM, Tomorrow"
      }
    }
  },
  {
    "value": {
      "type": "UnSlottedTierValue",
      "selected": true,
      "slaMessageConstruct": {
        "formattedText": null,
        "level": "info",
        "text": "Delivery by Fri Aug 12"
      }
    }
  },
  {
    "value": {
      "type": "UnSlottedTierValue",
      "selected": false,
      "slaMessageConstruct": {
        "formattedText": null,
        "level": "info",
        "text": "Delivery by 00:01, Tomorrow"
      }
    }
  },
];

export default function RadioWrapper() {
    console.log("RadioWrapper ")
    const [selectedRadio, setSelectedRadio] = useRadio(deliveryOptions);

    function handleRadio(selectedId) {
      console.log("handleRadioBtn clicked", selectedId);
      setSelectedRadio(selectedId)
    }

    const handleRadioBtn = useCallback((selectedId) => handleRadio(selectedId), []);

    return (
      <div>
          {deliveryOptions.map((option, _) => {
              const { value } = option;
              const { selected, slaMessageConstruct, deliveryPrice } = value;
              const slaText = get(slaMessageConstruct, ['text']);
              const isChecked = selectedRadio === slaText
              return (
                <Radio
                  key={slaText}
                  onRadioChange={handleRadioBtn}
                  checked={isChecked}
                  slaText={slaText}
                />
              )
          })}
      </div>
   )
}

