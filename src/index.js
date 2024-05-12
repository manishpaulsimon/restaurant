import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function initSite() {
    const container = document.getElementById('container');

    // Create header, main, and footer
    const header = document.createElement('div');
    header.id = 'header';

    const main = document.createElement('div');
    main.id = 'main-content';

    const footer = document.createElement('div');
    footer.id = 'footer';

    // Append these to the container
    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(footer);

    // Load initial content
    header.appendChild(Header());  // Load the header component
    main.appendChild(HomePage());  // Load the home page by default
    footer.appendChild(Footer());  // Load the footer component
}

// Ensure this is called once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSite);

