export const sortData = (data, column, sortOrder) => {

    // On détermine la direction du tri.
    // Si sortOrder = 1, le tri est ascendant. 
    // Sinon, Si sortOrder = -1, le tri est descendant.
    const order = sortOrder === 1 ? 1 : -1;

    // On crée une copie du tableau d'origine avec [...data] pour éviter de modifier le tableau d'origine lors du tri.
    // On utilise la méthode .sort() pour trier les éléments du tableau 
    return [...data].sort((a, b) => {
        const aValue = String(a[column]).toLowerCase(); 
        const bValue = String(b[column]).toLowerCase();

        // On compare les chaînes aValue et bValue avec la fonction localCompare()
        return order * aValue.localeCompare(bValue);
    });
};