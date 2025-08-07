export const getImageUrl = (path) => {
    if (!path) {
        console.warn('getImageUrl: path parameter is required');
        return '';
    }
    
    // Use consistent path for both development and production
    return `/assets/${path}`;
}