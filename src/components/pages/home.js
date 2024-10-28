import React from 'react'

const Home = () => {
    return (
        <div className='contentsHome'>

            <h3>Greetings! My name is</h3>
            <h1>Jiante B. Marata</h1>
            <span>

                <a href='https://www.facebook.com/jiante.marata' target='_blank'>
                    <img src='facebook.png' alt='facebook'></img>
                </a>
                <a href='https://discord.gg/Cu3zXmjwHG' target='_blank'>
                    <img src='discord.png' alt='discord'></img>
                </a>
                <a href='https://youtube.com/@tenseikyun' target='_blank'>
                    <img src='youtube.png' alt='youtube'></img>
                </a>
            </span>
            <p>
                I am a Bachelor of Science in Information Technology from Bulacan State University Sarmiento Campus. I do programming as hobbies and it's one of my dream career.
            </p>
            <p>
                <h4>For more details:</h4>
                <li>
                    Please download my resume below
                </li>
                <a href='Resume.pdf' download><button><h4>Download Resume</h4></button></a>
                <li>
                    Navigate to other tabs: About Me, Projects, and Skills
                </li>
            </p>


        </div>
    );
}

export default Home;