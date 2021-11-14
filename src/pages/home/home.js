import Carousel from 'components/carousel/carousel'
import React from 'react'
import Carousel1 from 'images/carousel-1.png'
import Carousel2 from 'images/carousel-2.png'
import Carousel3 from 'images/carousel-3.png'

const Home = () => {

    var carouselItem = [
        {img: Carousel1, header: "Control and manage any device with cloud solutions", summary: "Improve business performance and the user experience with the right mix of IoT technology and processes"}, 
        {img: Carousel2, header: "Control and manage any device with cloud solutions", summary: "Improve business performance and the user experience with the right mix of IoT technology and processes"},
        {img: Carousel3, header: "Control and manage any device with cloud solutions", summary: "Improve business performance and the user experience with the right mix of IoT technology and processes"}
    ]

    return (
        <div>
            <Carousel carouselItem={carouselItem}/>
        </div>
    )
}

export default Home
