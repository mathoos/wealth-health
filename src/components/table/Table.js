import React, { useState } from "react";
import './Table.scss'; 

const Table = ({ columns, data, onSort }) => {
    const [sortOrder, setSortOrder] = useState({});

    const toggleSortOrder = (columnKey) => {
        const newSortOrder = { ...sortOrder };
        newSortOrder[columnKey] = sortOrder[columnKey] === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);
        onSort(columnKey, newSortOrder[columnKey]);
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            onClick={() => toggleSortOrder(column.key)}
                            scope="col"
                            aria-sort={sortOrder[column.key]}
                        >
                            {column.label} 
                            <div className={`arrow-icon ${sortOrder[column.key] && (sortOrder[column.key] === "asc" ? "rotate-up" : "rotate-down")}`}>
                                &#x25B2;
                            </div>
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