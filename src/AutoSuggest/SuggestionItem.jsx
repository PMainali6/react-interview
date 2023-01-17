export default function SuggestionItem({ item, selected }) {
    return (
      <div className={`suggestion-item ${selected ? "selected" : ""}`}>
        {item}
      </div>
    );
  }
  