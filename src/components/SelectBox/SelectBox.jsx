import "./SelectBox.css";

const SelectBox = ({ className, caption, name, options }) => {
  const id = "selectBox-" + name;

  return (
    <div className={"selectBox-container " + (className ? className : "")}>
      {caption && <label htmlFor={id}>{caption}</label>}
      <select id={id} className="selectBox" name={name}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
