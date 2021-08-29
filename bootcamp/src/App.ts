import Boxes from "./components/Boxes";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Instructors from "./components/Instructors";
import Learn from "./components/Learn";
import Modal from "./components/Modal";
import Showcase from "./components/Showcase";

async function App() {
    const template = document.createElement('template');

    const render = () => {
        return `
            ${Header()}
            ${Showcase()}
            ${Boxes()}
            ${Learn()}
            ${Faq()}
            ${Instructors()}
            ${Contact()}
            ${Footer()}
            ${Modal()}
        `;
    }

    template.innerHTML = render();

    // Return a new node from template
    return template.content.cloneNode(true)
}

export default App;