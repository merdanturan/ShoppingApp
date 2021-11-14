import React from 'react'
import bootstrap from 'bootstrap'
import Button from 'components/button/button'

const Carousel = ({
    carouselItem
}) => {

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carouselItem[0].img} className="d-block w-100" alt="image1" />
                        <div className="carousel-caption position-absolute top-0 start-0 px-5 py-5 w-50 d-none d-md-block">
                            <h1>{carouselItem[0].header}</h1>
                            <div className="top-50 position-absolute">
                                <p>{carouselItem[0].summary}</p>
                                <Button type={"viewMore"} />
                            </div>
                        </div>
                    </div>
                    {carouselItem.slice(1).map((item) =>
                        <div className="carousel-item">
                            <img src={item.img} className="d-block w-100" alt="image1" />
                            <div className="carousel-caption position-absolute top-0 start-0 px-5 py-5 w-50 d-none d-md-block">
                                <h1>{item.header}</h1>
                                <div className="top-50 position-absolute">
                                    <p>{item.summary}</p>
                                    <Button type={"viewMore"} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Carousel
