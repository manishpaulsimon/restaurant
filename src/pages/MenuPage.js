import biryani1 from '../assets/biryani-1.png';
import biryani2 from '../assets/biryani-2.png';
import biryani3 from '../assets/biryani-3.png';
import biryani4 from '../assets/biryani-4.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const biryani = [
    { name: biryani1, description: 'Mutton Biryani' },
    { name: biryani2, description: 'Chicken Biryani' },
    { name: biryani3, description: 'Kebab' },
    { name: biryani4, description: 'Mixed Biryani' }
];

function MenuPage() {
    const container = document.createElement('div');

    const innerContaier = document.createElement('div');

    innerContaier.classList.add('menu-container');

    biryani.forEach(b => {
        const img = document.createElement('img');
        img.src = b.name;
        img.classList.add('biryani-image');
        const text = document.createElement('p');
        text.textContent = b.description;
        innerContaier.appendChild(img);
        innerContaier.appendChild(text);
    });
    container.appendChild(innerContaier);

    container.appendChild(Footer());

    container.classList.add('container');



    return container;
}

export default MenuPage;
