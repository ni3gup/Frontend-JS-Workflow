const Faq = () => {
    const render = () => (`
        <section class="p-5" id="questions">
            <div class="container">
                <h2 class="text-center mb-4">Frequently Asked Questions</h2>
                <div class="accordion accordion-flush" id="questions">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-one">Where exactly are you located</button>
                        </h2>
                        <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#questions">
                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui soluta sint numquam aliquam cupiditate reiciendis corrupti maxime, quas animi! Repudiandae, doloribus! Pariatur eum facilis, praesentium reiciendis ullam perspiciatis soluta quidem ex. Perspiciatis possimus, voluptatum deleniti corporis earum quae neque eaque qui facilis ipsa sequi ut eveniet aperiam voluptates sint atque.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-row">How much does it cost to attend?</button>
                        </h2>
                        <div id="question-row" class="accordion-collapse collapse" data-bs-parent="#questions">
                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui soluta sintnumquam aliquam cupiditate reiciendis corrupti maxime, quas animi! Repudiandae, doloribus! Pariatur eum facilis, praesentium reiciendis ullam perspiciatis soluta quidem ex. Perspiciatis possimus, voluptatum deleniti corporis earum quae neque eaque qui facilis ipsa sequi ut eveniet aperiam voluptates sint atque.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-three">What do I need to Know?</button>
                        </h2>
                        <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#questions">
                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui soluta sint numquam aliquam cupiditate reiciendis corrupti maxime, quas animi! Repudiandae, doloribus! Pariatur eum facilis, praesentium reiciendis ullam perspiciatis soluta quidem ex. Perspiciatis possimus, voluptatum deleniti corporis earum quae neque eaque qui facilis ipsa sequi ut eveniet aperiam voluptates sint atque.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-four">How Do I sign up?</button>
                        </h2>
                        <div id="question-four" class="accordion-collapse collapse" data-bs-parent="#questions">
                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui soluta sint numquam aliquam cupiditate reiciendis corrupti maxime, quas animi! Repudiandae, doloribus! Pariatur eum facilis, praesentium reiciendis ullam perspiciatis soluta quidem ex. Perspiciatis possimus, voluptatum deleniti corporis earum quae neque eaque qui facilis ipsa sequi ut eveniet aperiam voluptates sint atque.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-five">Do you help me find a job?</button>
                        </h2>
                        <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#questions">
                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui soluta sint numquam aliquam cupiditate reiciendis corrupti maxime, quas animi! Repudiandae, doloribus! Pariatur eum facilis, praesentium reiciendis ullam perspiciatis soluta quidem ex. Perspiciatis possimus, voluptatum deleniti corporis earum quae neque eaque qui facilis ipsa sequi ut eveniet aperiam voluptates sint atque.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `)

    const template = render();

    return template;
};

export default Faq;