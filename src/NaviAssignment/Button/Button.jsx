import "./button.css";

export default function Button({ children, variant, handleChange }) {
  const map = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger",
    normal: "btn-normal"
  };

  function getClassName(variant) {
    return map[variant];
  }
  return (
    <button className={`btn ${getClassName(variant)}`} onClick={handleChange}>
      {children}
    </button>
  );
}
