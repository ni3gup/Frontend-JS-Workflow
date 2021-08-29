import "../node_modules/winbox/dist/winbox.bundle.js";
// import WinBox from 'winbox';

import App from './App';

const app = async () => {
    document.getElementById('app')!.appendChild(await App());

    const about = document.querySelector('#about') as HTMLElement;
    about.onclick = aboutBox;

    const contact = document.querySelector('#contact') as HTMLElement;
    contact.onclick = contactBox;

    // Winbox
    function aboutBox() {
        // @ts-ignore
        new WinBox({
            title: 'About Me',
            width: '400px',
            height: '400px',
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
            mount: document.querySelector('#about-content') as HTMLDivElement,
            onfocus: function() {
                this.setBackground('#00aa00')
            },
            onblur: function() {
                this.setBackground('#777')
            }
        });
    }

    function contactBox() {
        // @ts-ignore
        new WinBox({
            title: 'Contact Me',
            width: '400px',
            height: '400px',
            top: 150,
            right: 50,
            bottom: 50,
            left: 250,
            mount: document.querySelector('#contact-content') as HTMLDivElement,
            onfocus: function() {
                this.setBackground('#00aa00')
            },
            onblur: function() {
                this.setBackground('#777')
            }
        });
    }
}

// Load app
app()