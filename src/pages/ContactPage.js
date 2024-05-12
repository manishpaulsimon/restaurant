import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
    const container = document.getElementById('main-content');

    const innerContainer = document.createElement('div');

    innerContainer.classList.add('contact-container');

    const title = document.createElement('h1');
    title.textContent = "Contact Us";
    innerContainer.appendChild(title);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "Phone: +123 456 7890";
    innerContainer.appendChild(phoneNumber);

    const address = document.createElement('p');
    address.textContent = "Address: 123 Biryani St, Flavor Town, IN 560001";
    innerContainer.appendChild(address);

    // Creating a simple contact form
    const form = document.createElement('form');
    form.setAttribute('action', '#'); // Set the action URL to your server endpoint
    form.setAttribute('method', 'POST');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Your Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.required = true;
    form.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = "Your Message:";
    form.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.required = true;
    form.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send';
    form.appendChild(submitButton);

    innerContainer.appendChild(form);

    container.appendChild(innerContainer);

    container.appendChild(Footer());

    container.classList.add('container');


    return container;
}

export default ContactPage;
