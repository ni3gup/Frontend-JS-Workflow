const Learn = () => {
    const render = () => (`
        <section class="p-5" id="learn">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md">
                        <img src="${require('../img/fundamentals.svg')}" class="img-fluid" alt="">
                    </div>
                    <div class="col-md p-5">
                        <h2>Learn The Fundamentals</h2>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a ad itaque dignissimos voluptatibus reprehenderit!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore placeat voluptate eligendi dolor, hic harum doloremque non fugiat minus iste aliquid praesentium ex dolorum recusandae quaerat accusamus. Numquam, voluptates autem.</p>
                        <a href="#" class="btn btn-light mt-3">
                            <i class="bi bi-chevron-right"></i> Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-5 bg-dark text-light" id="learn">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md p-5">
                        <h2>Learn React</h2>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a ad itaque dignissimos voluptatibus reprehenderit!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore placeat voluptate eligendi dolor, hic harum doloremque non fugiat minus iste aliquid praesentium ex dolorum recusandae quaerat accusamus. Numquam, voluptates autem.</p>
                        <a href="#" class="btn btn-light mt-3">
                            <i class="bi bi-chevron-right"></i> Read More
                        </a>
                    </div>
                    <div class="col-md">
                        <img src="${require('../img/react.svg')}" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </section>
    `)

    const template = render();

    return template;
};

export default Learn;