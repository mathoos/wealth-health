const Select = ({ name, id, value, onChange, options, customClass }) => {

    return (
        <select name={name} id={id} value={value} onChange={onChange} className={customClass}>
            {options.map((option, index) => (
                <option key={index} value={option.abbreviation}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};
  
export default Select;

