import { ICard } from "../interfaces";

export const Card = ({ img, title, description, dataAos }: ICard) => {
    const render = () => (`
        <section class="card" data-aos="${dataAos}">
            <img src="${img}" alt="" />
            <div>
                <h3>${title}</h3>
                <p>${description}</p>
                <a href="#" class="btn">Buy Now</a>
            </div>
        </section>
    `);

    return render();
}

export default Card;