import React from 'react'
import { ReactComponent as Facebook } from 'images/f.svg'
import { ReactComponent as Twitter } from 'images/t.svg'
import { ReactComponent as Google } from 'images/g+.svg'
import { ReactComponent as Pinterest } from 'images/p.svg'
import { ReactComponent as SearchIcon } from 'images/search.svg'
import { ReactComponent as Basket } from 'images/basket.svg'
import { ReactComponent as Profile } from 'images/profile.svg'
import { ReactComponent as Favorite } from 'images/favorite.svg'
import { ReactComponent as Eye } from 'images/eye.svg'
import { ReactComponent as Close } from 'images/close.svg'
import { ReactComponent as Reload } from 'images/reload.svg'

const Icon = ({
    type,
    fill
}) => {
    return (
        <>
            {type === 'facebook' ?
                <Facebook fill={fill}/>
                :
                type === 'twitter' ?
                    <Twitter />
                    :
                    type === 'google' ?
                        <Google />
                        :
                        type === 'pinterest' ?
                            <Pinterest />
                            :
                            type === 'search' ?
                                <SearchIcon />
                                :
                                type === 'basket' ?
                                    <Basket />
                                    :
                                    type === 'profile' ?
                                        <Profile />
                                        :
                                        type === 'favorite' ?
                                            <Favorite />
                                            :
                                            type === 'eye' ?
                                                <Eye />
                                                :
                                                type === 'close' ?
                                                    <Close />
                                                    :
                                                    type === 'reload' &&
                                                    <Reload />
            }
        </>
    )
}

export default Icon
