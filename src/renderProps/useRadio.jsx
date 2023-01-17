import { useEffect, useState } from 'react';
import { get } from 'lodash';

export default function useRadio(deliveryOptions) {
    const [ selectedRadio, setSelectedRadio ] = useState("");

    useEffect(() => {
        deliveryOptions.forEach(option => {
            const { value } = option;
            const { selected, slaMessageConstruct, deliveryPrice } = value;
            const slaText = get(slaMessageConstruct, ['text']);
            if(selected) {
                setSelectedRadio(slaText)
            }
        })
    }, []);

    return [selectedRadio, setSelectedRadio]
}

