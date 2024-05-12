import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';
import Description from '../components/Description';

function HomePage() {

    const container = document.getElementById('main-content');

    const innerContainer = document.createElement('div');
    innerContainer.appendChild(ImageGrid());
    innerContainer.appendChild(Description());
    innerContainer.classList.add('inner-container');

    container.appendChild(innerContainer);
    container.appendChild(Footer());

    return container;
}

export default HomePage;

