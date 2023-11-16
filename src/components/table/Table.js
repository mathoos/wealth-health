const Table = ({ columns, data }) => {
    return (
        <table className="employeeList_container-table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                        <td key={colIndex}>{row[column.key]}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;