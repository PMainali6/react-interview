import React from 'react';
import { get } from 'lodash';
import useRadio from './useRadio';

export default function RadioGroup({ data, handleRadioChange, renderLabel }) {
    const [ref, selectedRadio, setSelectedRadio ] = useRadio(data);

    return (
        <div>
          {data.map((option, _) => {
              const slaMessageConstruct = option.value.slaMessageConstruct;
              const slaText = get(slaMessageConstruct, ['text']);
              
              const isChecked = selectedRadio === slaText;

              return (
                <div ref={ref} key={slaText}>
                    <input type="radio" name={slaText} id={slaText} checked={isChecked}
                        onChange={() => {
                            setSelectedRadio(slaText); 
                            handleRadioChange(ref.current);
                        }}
                    />
                    <label htmlFor={slaText}>
                        {renderLabel(slaText, isChecked)}
                    </label>
                </div>
              )
          })}
      </div>
    )
}