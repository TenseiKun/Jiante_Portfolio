import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Projects = () => {
    const projects = [
        {
            title: 'Math Adventure',
            image: 'mathAdventure.png',
            description: 'An application that serves as a way to teach secondary and tertiary students to learn math. Except learning, it makes you more efficient to the basic operations that you would need to be numeracy literate.',
            source: 'https://drive.google.com/file/d/12c_KQ8-cruv5Eyc8z88FzIqmhWc_BmVu/view?usp=sharing'

        },
        {
            title: 'Click-O!',
            image: 'Click-O.png',
            description: 'A teacher management system for student grades. It makes their life easier with easy functions, exportable data function, and being handheld means they can manage grades everywhere',
            source: 'https://drive.google.com/file/d/1qC_QJvYQ-b8om9Oz1rOxscDaAx84Za0s/view?usp=sharing'
        },
        {
            title: 'E-Inventory',
            image: 'E-inventory.png',
            description: 'An application that can be used for management of computer parts in a certain shop or company. It handles inputs for the computer state, unit\'s cost, unit quantity, price, and etc.',
            source: 'https://drive.google.com/file/d/1kNTPxRcQVNF4uoATiLnmuV6_sMYC-7Jt/view?usp=sharing'
        },
        {
            title: 'Costumer Service System (Under Development)',
            image: '',
            description: 'A system that makes it easier for businesses like groceries to manage their costumers by saving their information to reduce the amount of time to give their bills & payment options the next time they buy again or ask for services.',
            source: 'https://drive.google.com/file/d/11ibpYT2IVTnCJcTM_8epATTDBs8siK_K/view?usp=sharing'
        },

    ]

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (
        <div className='contentsProjects'>
            <Slider {...settings} className='.slick-slide'>
                {projects.map((item, index) => {
                    return (
                        <a href={item.source} target='_blank' draggable='false'>
                            <div key={index} >
                                <div className='container'>

                                    <img src={item.image} alt='None'>
                                    </img>
                                </div>
                                <h2>{item.title}</h2>
                                <p className='text-container'>{item.description}</p>
                            </div>
                        </a>
                    )
                }
                )
                }
            </Slider>
            <h3>Slide Left to Right - Click to Download</h3>
        </div>);
}

export default Projects;