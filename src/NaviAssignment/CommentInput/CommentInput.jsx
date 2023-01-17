export default function CommentInput({
    handleInputChange,
    inputValue,
    placeholder,
    classes
  }) {
    return (
      <input
        onChange={handleInputChange}
        value={inputValue}
        className={classes}
        type="text"
        placeholder={placeholder}
      />
    );
  }
  