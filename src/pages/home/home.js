import React from 'react'
import './style.css'
import Carousel from 'components/carousel/carousel'
import Carousel1 from 'images/carousel-1.png'
import Carousel2 from 'images/carousel-2.png'
import Carousel3 from 'images/carousel-3.png'
import Sale from 'components/sale/sale'
import Button from 'components/button/button'

const Home = () => {

    var carouselItem = [
        { img: Carousel1, header: "Control and manage any device with cloud solutions", summary: "Improve business performance and the user experience with the right mix of IoT technology and processes" },
        { img: Carousel2, header: "Control and manage any device with cloud solutions", summary: "Improve business performance and the user experience with the right mix of IoT technology and processes" },
        { img: Carousel3, header: "Control and manage any device with cloud solutions", summary: "Improve business performance and the user experience with the right mix of IoT technology and processes" }
    ]

    return (
        <>
        <div className="flex">
            <div className="home-carousel">
                <Carousel carouselItem={carouselItem} />
            </div>
            <div className="sale-social">
                <div className="block">
                    <Sale />
                </div>
                <div className="block text-center paddingt-1 width-12 margin-auto">
                    <p className="block font-18">Follow us on Facebook</p>
                    <p className="block font-13">Sed ut perspiciatis unde omnis iste natus error sit </p>
                    <div className="social-home">
                        <Button type={"social"} />
                    </div>
                </div>
            </div>
        </div>

        <div className="popular-items bg-dark text-white">
            Popular Items
        </div>
        </>
    )
}

export default Home
