import * as React from 'react';
import { get } from 'lodash';

export default function RadioGroup({ data, checked, onRadioChange, renderRadio }) {
        console.log("radio group renders ")
    return(
        <div>
            {data.map((option, _) => {
                const { value } = option;
                const { selected, slaMessageConstruct, deliveryPrice } = value;
                const slaText = get(slaMessageConstruct, ['text']);

                const isChecked = checked === slaText;

                return renderRadio(slaText, isChecked, onRadioChange)
            })}
        </div>
     )
}



