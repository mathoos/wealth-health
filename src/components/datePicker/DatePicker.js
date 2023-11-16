const DatePicker = ({ name, id, value, onChange }) => {

    return (
        <input name={name} id={id} type="date" value={value} onChange={onChange} />
    );
};

export default DatePicker;



