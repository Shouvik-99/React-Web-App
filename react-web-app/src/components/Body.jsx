import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Body() {
    return (
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://img-global.cpcdn.com/recipes/ce884d070a8abf57/1040x500cq70/photo.jpg"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3>Veggies</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.jdmagicbox.com/quickquotes/listicle/listicle_1683697362867_zui6n_1040x500.jpg"
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Non-Veg delicious</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Body