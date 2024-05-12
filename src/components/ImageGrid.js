import kebab from '../assets/kebab.png';

function ImageGrid() {
    const container = document.createElement('div');
    container.className = 'image-grid';
  
    // Create an img element directly for the kebab image
    const img = document.createElement('img');
    img.src = kebab;
    container.appendChild(img);

    return container;
}

export default ImageGrid;
