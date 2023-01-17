function Radio({ slaText, checked, onRadioChange }) {
    console.log("Radio: ", slaText)

    return (
        <div key={slaText}>
            <input type="radio" name={slaText} id={slaText} checked={checked}
                onChange={() => onRadioChange(slaText)}
            />
            <label htmlFor={slaText}>
                <div style={{ fontWeight: checked ? "900" : "400"}} key={slaText}>
                    {slaText}
                </div>
            </label>
          </div>
    )
}

export default Radio