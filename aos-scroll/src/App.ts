import AOS from 'aos';

import Card from "./components/Card";
import Header from "./components/Header";
import { ICard } from "./interfaces";

async function App() {
    const template = document.createElement('template');

    const cards: ICard[] = [
        {
            img: require('./img/paint-1.png'),
            title: 'Acrylic Painting One',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error enim laudantium, animi veniam libero eveniet culpa unde perferendis illo fugit corporis, voluptatibus totam dolorum, maiores magnam officia. Ab, delectus.',
           dataAos: ""
        },
        {
            img: require('./img/paint-2.png'),
            title: 'Acrylic Painting Two',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error enim laudantium, animi veniam libero eveniet culpa unde perferendis illo fugit corporis, voluptatibus totam dolorum, maiores magnam officia. Ab, delectus.',
           dataAos: "fade-left"
        },
        {
            img: require('./img/paint-3.png'),
            title: 'Acrylic Painting Three',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error enim laudantium, animi veniam libero eveniet culpa unde perferendis illo fugit corporis, voluptatibus totam dolorum, maiores magnam officia. Ab, delectus.',
           dataAos: "fade-right"
        },
        {
            img: require('./img/paint-4.png'),
            title: 'Acrylic Painting Four',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error enim laudantium, animi veniam libero eveniet culpa unde perferendis illo fugit corporis, voluptatibus totam dolorum, maiores magnam officia. Ab, delectus.',
           dataAos: "fade-left"
        },
        {
            img: require('./img/paint-5.png'),
            title: 'Acrylic Painting Five',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error enim laudantium, animi veniam libero eveniet culpa unde perferendis illo fugit corporis, voluptatibus totam dolorum, maiores magnam officia. Ab, delectus.',
           dataAos: "fade-right"
        }
    ]

    const render = () => {
        return `
            ${Header()}
            <main class="container">
                ${cards.map(card => Card(card)).join('')}
            </main>
        `;
    }

    template.innerHTML = render();
    
    // Init AOS
    AOS.init({
        offset: 400,
        delay: 0,
        duration: 1000
    });

    // Return a new node from template
    return template.content.cloneNode(true)
}

export default App;