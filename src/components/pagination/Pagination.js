const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
  
    return (
        <div className="employeeList_container-pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Précédent
            </button>
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={pageNumber === currentPage ? 'current-page' : ''}
                >
                    {pageNumber}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Suivant
            </button>
        </div>
    );
};
  
export default Pagination;