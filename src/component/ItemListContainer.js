import React from 'react'

export default function ItemListContainer({usuario}) {
    return (
        <div>
            <p>
                Welcome {usuario}!
            </p>
            <img src="./assets/wallpoke.jpg"/>
        </div>
    )
}