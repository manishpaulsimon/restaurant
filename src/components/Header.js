import logo from '../assets/logo.png';
import HomePage from '../pages/HomePage.js';
import MenuPage from '../pages/MenuPage.js';
import AboutPage from '../pages/AboutPage.js'; 
import ContactPage from '../pages/ContactPage.js';


function Header() {
    const newLogo = document.createElement('img');
    const header = document.createElement('header');

    newLogo.src = logo;
    newLogo.classList.add('logo');

    const nav = document.createElement('nav');

    const buttons = ['Home','Menu','About','Contact'].map(text => {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList = `btn${text} btn`;
        return button;
    });

    buttons.forEach(button => nav.appendChild(button));
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const mainContent = document.getElementById('main-content');
            switch (button.textContent) {
                case 'Home':
                    mainContent.innerHTML = '';  
                    mainContent.appendChild(HomePage());
                    break;
                case 'Menu':
                    mainContent.innerHTML = '';
                    mainContent.appendChild(MenuPage());
                    break;
                case 'About':
                    mainContent.innerHTML = '';
                    mainContent.appendChild(AboutPage());
                    break;
                case 'Contact':
                    mainContent.innerHTML = '';
                    mainContent.appendChild(ContactPage());
                    break;
            }
        });
    });
    
    header.appendChild(newLogo);
    header.appendChild(nav);

    return header;
}

export default Header;