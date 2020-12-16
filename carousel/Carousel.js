import React, { useState } from 'react';

//Stylesheet import
import './styles/styles.css'


//Images imports
import reactLogo from './imgs/reactLogo.png';
import faces from './imgs/faces.jpeg';
import satue from './imgs/statue.png';

//Items array, palce here your text and images
let items = [
    {
        title: 'first item title',
        text: 'first item text',
        img: reactLogo
    },
    {
        title: 'second item title',
        text: 'second item text',
        img: satue
    },
    {
        title: 'third item title',
        text: 'third item text',
        img: faces
    },
]


export default function Carousel() {

    const [active, setActive] = useState(0);

    const nextActive = () => {
        if (active < items.length - 1) {
            setActive(active + 1)
        } else {
            setActive(0)
        }
    }

    const previousActive = () => {
        if (active > 0) {
            setActive(active - 1)
        } else {
            setActive(items.length - 1)
        }
    }

    const carouserIndicator = () => {
        return (
            items.map((item) => {
                return <li onClick={() => { setActive(items.indexOf(item)) }}></li>
            })
        )
    }

    const showList = () => {
        return (
            <div class="carousel slide" >

                <ol class="carousel-indicators">
                    {carouserIndicator()}
                </ol>

                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img class="d-block w-100" src={items[active].img} alt="First slide"></img>

                        <div class="carousel-caption d-none d-md-block">
                            <h5>{items[active].title}</h5>
                            <p>{items[active].text}</p>
                        </div>

                    </div>

                </div>

                <a class="carousel-control-prev" >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only" onClick={() => previousActive()}>Previous</span>
                </a>

                <a class="carousel-control-next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only" onClick={() => nextActive()}>Next</span>
                </a>

            </div>
        )
    }

    return (
        <view>
            {showList()}
        </view>
    )
}