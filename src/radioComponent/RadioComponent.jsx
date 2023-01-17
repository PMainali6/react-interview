import React from 'react';
import RadioGroup from './RadioGroup';

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

export default function RadioComponent() {
    function onRadioChange(e) {
        console.log('onRadioChange: ', e);
    }

    return (
        <div>
            <h1>Render here radio compoent</h1>

            <RadioGroup
                data={deliveryOptions}
                handleRadioChange={onRadioChange}
                renderLabel={(text, checked) => (
                    <div style={{ fontWeight: checked ? "900" : "400"}} key={text}>
                        {text}
                    </div>
                )}
            />
        </div>
    )
}