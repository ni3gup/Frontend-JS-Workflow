const Boxes = () => {
    const render = () => (`
        <section class="p-5">
            <div class="container">
                <div class="row text-center g-4">
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-laptop"></i>
                                </div>
                                <h3 class="card-title mb-3">Virtual</h3>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod natus eaque voluptas maiores accusamus fugiat.</p>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-secondary text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-person-square"></i>
                                </div>
                                <h3 class="card-title mb-3">Hybrid</h3>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod natus eaque voluptas maiores accusamus fugiat.</p>
                                <a href="#" class="btn btn-dark">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-people"></i>
                                </div>
                                <h3 class="card-title mb-3">In Person</h3>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod natus eaque voluptas maiores accusamus fugiat.</p>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `)

    const template = render();

    return template;
};

export default Boxes;