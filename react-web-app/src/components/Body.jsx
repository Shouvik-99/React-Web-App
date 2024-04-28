import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

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
                        <Link to = "/veg-items" style={{color: '#ffffff', textDecoration: 'none', fontSize: '151px'}}>Veggies</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.jdmagicbox.com/quickquotes/listicle/listicle_1683697362867_zui6n_1040x500.jpg"
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                    <Link to = "/non-veg-items" style={{color: '#ffffff', textDecoration: 'none', fontSize: '100px'}}>Non-Veg delicious</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Body