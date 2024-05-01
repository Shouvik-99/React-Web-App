import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

function Body() {
    return (
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://www.livemint.com/lm-img/img/2023/08/07/1600x900/2-0-284323707--ABH0040-c-0_1680507972555_1691433625706.JPG"
                        alt="Image One" style={{height: "800px", width: "1040px"}}
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
                        style={{height: "800px", width: "1040px"}}
                    />
                    <Carousel.Caption>
                    <Link to = "/non-veg-items" style={{color: '#ffffff', textDecoration: 'none', fontSize: '100px'}}>Non-Veg delicious</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Body