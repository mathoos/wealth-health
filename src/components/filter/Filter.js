const Filter = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
};
  
export default Filter;