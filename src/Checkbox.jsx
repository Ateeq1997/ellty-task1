export default function Checkbox({ checked, onChange }) {
  return (
    <div
      className={`checkbox ${checked ? "checked" : ""}`}
      onClick={onChange}
    >
      {checked && <span className="checkmark">✓</span>}
    </div>
  );
}
