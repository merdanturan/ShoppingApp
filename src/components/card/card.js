import React from 'react'
import './style.css'
import Button from 'components/button/button'


const Card = ({
    productImage,
    productName,
    cardtype,
    price
}) => {
    return (
        <div className="card">
            <div>
                <img src={productImage} alt="product" className="card-img" />
            </div>
            <div className="card-bottom">
                {productName}
                <div>
                    {cardtype === "onlyPrice" ?
                        <p className="price">{price}</p>
                        :
                        cardtype === "halfButton" ?
                            <div className="card-button">
                                <p>{price}</p>
                                <Button type={"half"} />
                            </div>
                            :
                            cardtype === "awesome" &&
                            <p className="awesome">Awesome</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
