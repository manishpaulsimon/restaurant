import Header from '../components/Header';
import Footer from '../components/Footer';


function AboutPage() {
    const container = document.getElementById('main-content');

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('about-container');

    const title = document.createElement('h1');
    title.textContent = "About Mani's Dum Biryani";
    innerContainer.appendChild(title);

    const para1 = document.createElement('p');
    para1.textContent = "At Mani's Dum Biryani, we believe in serving authentic, mouth-watering biryani that captures the essence of traditional Indian cuisine.";
    innerContainer.appendChild(para1);

    const para2 = document.createElement('p');
    para2.textContent = "Founded in 2020, our mission has been to provide our customers with a unique blend of spices and the highest quality ingredients sourced locally.";
    innerContainer.appendChild(para2);

    const para3 = document.createElement('p');
    para3.textContent = "Join us to experience a culinary journey through the rich flavors and vibrant culture of India.";
    innerContainer.appendChild(para3);

    // Optionally add an image
    const image = document.createElement('img');
    image.src = '../assets/biryani-1.png'; // Replace with path to an actual image
    image.alt = 'Interior of Mani\'s Dum Biryani restaurant';
    image.style.width = '100%'; // Make image responsive
    image.style.height = 'auto';
    image.style.marginTop = '20px';
    innerContainer.appendChild(image);


    container.appendChild(innerContainer);
    container.appendChild(Footer());
    container.classList.add('container');

    return container;
}

export default AboutPage;