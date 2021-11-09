import React from 'react'
import './style.css'
import Icon from 'components/icon/icon'

const Button = ({
    type
}) => {
    return (
        <>
            {type === 'social' ?
                <button className="social">
                    <Icon type={'facebook'} />   <p>FOLLOW</p>
                </button>
                :
                type === 'loadMore' ?
                    <button className="load-more">
                        <p>LOAD MORE</p> <Icon type={'reload'} />
                    </button>
                    :
                    type === 'buyNow' ?
                        <button className="buy-now">
                            BUY NOW
                        </button>
                        :
                        type === 'half' ?
                            <button className="half">
                                BUY NOW
                            </button>
                            :
                            null
            }
        </>
    )
}

export default Button
