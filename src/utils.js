export const getImageUrl = (path) => {
    if (!path) {
        console.warn('getImageUrl: path parameter is required');
        return '';
    }
    
    // Remove any leading slashes to ensure consistent path handling
    const cleanPath = path.replace(/^\/+/, '');
    
    // In Vite, files in public/assets/ are served from /assets/
    // For GitHub Pages, we need to include the repo name in the path
    return `./public/assets/${cleanPath}`;
}