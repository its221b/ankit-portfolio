export const getImageUrl = (path) => {
    if (!path) {
        console.warn('getImageUrl: path parameter is required');
        return '';
    }
    return `/assets/${path}`;
}