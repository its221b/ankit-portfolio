// Import all images using Vite's glob import
const images = import.meta.glob('./assets/**/*.png', { eager: true });

export const getImageUrl = (path) => {
    if (!path) {
        console.warn('getImageUrl: path parameter is required');
        return '';
    }
    
    // Remove any leading slashes to ensure consistent path handling
    const cleanPath = path.replace(/^\/+/, '');
    
    // Find the image in the imported assets
    const imagePath = `./assets/${cleanPath}`;
    const image = images[imagePath];
    
    if (image) {
        return image.default;
    } else {
        console.error(`Image not found: ${cleanPath}`);
        return '';
    }
}