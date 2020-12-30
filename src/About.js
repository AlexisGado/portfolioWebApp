import './About.css';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className='pageAbout'>
        <div className='titleAbout'>About me!</div>
        <div className='textAbout'>
            I am a French engineering student currently living in Paris and looking for internships.
            Passionate about informatics for several years now, I am currently trying to get skills and experience in web development and machine learning.
            </div>
            <div className='textAbout'>
            When I am not coding, I spend a lot of time in cinemas and museums (a bit less in 2020 ...). The Parisian arty guy, a bit cliché, I know. 
            I am also trying to find time (and money) to travel as much as possible, I am really fond of nature and vast open spaces. I would love to get some professional experience abroad to improve my English and step out of my comfort zone.
        </div>
        <Link to = '/resume'>
        <button className='buttonAbout'>
        See my resume
        </button>
        </Link>
        <Link to = '/'>
        <button className='buttonAbout'>
        Back to Home page
        </button>
        </Link>
        </div>
    );
}

export default About;