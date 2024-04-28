import React from 'react'

function Body() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="https://img-global.cpcdn.com/recipes/ce884d070a8abf57/1200x630cq70/photo.jpg" className="d-block w-100" alt="Non Veg" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Non-Veg deliciuos</h5>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://images.jdmagicbox.com/quickquotes/listicle/listicle_1683697362867_zui6n_1040x500.jpg" className="d-block w-100" alt="Non Veg" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Non-Veg deliciuos</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Body