const Table = ({ columns, data, onSort  }) => {
    return (
        <table className="employeeList_container-table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th 
                            key={index} 
                            onClick={() => onSort(column.key)}
                            scope="col"
                            aria-sort={column.sortOrder}
                        >
                        {column.label}
                    </th>
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
