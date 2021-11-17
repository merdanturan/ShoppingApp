import React from 'react'
import './style.css'
import Icon from 'components/icon/icon'

const Button = ({
    type
}) => {
    return (
        <>
            {type === 'social' ?
                <a href='https://www.facebook.com' target="_blank">
                    <button className="social">
                        <Icon type={'facebook'} />   <p>FOLLOW</p>
                    </button>
                </a>
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
                            type === 'viewMore' ?
                                <button className="view-more">
                                    VIEW MORE
                                </button>
                                :
                                null
            }
        </>
    )
}

export default Button
