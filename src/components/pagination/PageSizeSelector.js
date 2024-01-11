const PageSizeSelector = ({ onPageSizeChange }) => {
    const pageSizes = [10, 25, 50, 100];
  
    return (
        <div>
            <span>Show </span>
            <select onChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}>
            {pageSizes.map((size) => (
                <option key={size} value={size}>
                    {size}
                </option>
            ))}
            </select>
            <span> entries</span>
        </div>
    );
};
  
export default PageSizeSelector;