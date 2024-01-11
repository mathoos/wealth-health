export const sortData = (data, column, sortOrder) => {
    return data.sort((a, b) => {
        const aValue = String(a[column]).toLowerCase();
        const bValue = String(b[column]).toLowerCase();
        const order = sortOrder === 'asc' ? 1 : -1;

        if (aValue < bValue) return -order;
        if (aValue > bValue) return order;
        return 0;
    });
};