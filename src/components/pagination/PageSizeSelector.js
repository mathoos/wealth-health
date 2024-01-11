const PageSizeSelector = ({ onPageSizeChange }) => {

    // On créé un tableau de nombres représentant les différentes options de taille de page disponibles
    const pageSizes = [10, 25, 50, 100];
  
    return (
        <div>
            <span>Show </span>
            {/* Lorsqu'une option est sélectionnée, on appelle la fonction onPageSizeChange
             avec la nouvelle valeur convertie en entier avec parseInt. */}
            <select onChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}>  
            {/* La boucle map qui itère sur le tableau pageSizes pour créer une option pour chaque taille de page*/}
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