import './Home.css';
import './nicepage.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="u-clearfix u-footer u-palette-1-dark-2 u-footer" id="sec-f2e8"><div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-align-center u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-group-1">
            <div className="u-container-layout u-valign-middle-md">
              <p className="u-text u-text-1">Personal website of Alexis Gadonneix</p>
              <div className="u-align-left u-social-icons u-spacing-10 u-social-icons-1">
                <a className="u-social-url" target="_blank" href="https://facebook.com/AlexisGado"><span className="u-icon u-icon-circle u-social-facebook u-social-type-logo u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xlinkHref="#svg-6778" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px" id="svg-6778"><path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z" /></svg></span>
                </a>
                <a className="u-social-url" target="_blank" href="https://www.instagram.com/alexisgado/"><span className="u-icon u-icon-circle u-social-instagram u-social-type-logo u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xlinkHref="#svg-54e8" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px" id="svg-54e8"><path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z" /><path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z" /><path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z" /></svg></span>
                </a>
                <a className="u-social-url" target="_blank" href="https://linkedin.com/in/alexis-gadonneix-a20088159/"><span className="u-icon u-icon-circle u-social-linkedin u-social-type-logo u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xlinkHref="#svg-e61e" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px" id="svg-e61e"><path d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9L24.1,30.9c-6.6,0-10.8-4.5-10.8-10.1c0-5.8,4.3-10.1,10.9-10.1 S34.9,15,35.1,20.8C35.1,26.4,30.8,30.9,24.1,30.9z M103.3,96.8H84.1v-31c0-7.8-2.7-13.1-9.8-13.1c-5.3,0-8.5,3.6-9.9,7.1 c-0.6,1.3-0.6,3-0.6,4.8V97H44.5c0,0,0.3-52.6,0-58h19.3v8.2c2.6-3.9,7.2-9.6,17.4-9.6c12.7,0,22.2,8.4,22.2,26.1V96.8z" /></svg></span>
                </a>
              </div>
            </div>
          </div>
          <a href="mailto:gadoalexis@gmail.com" className="u-active-none u-border-1 u-border-white u-btn u-btn-rectangle u-button-style u-hover-none u-none u-btn-1">gadoalexis@gmail.com</a>
          <a href="mailto:alexis.gadonneix@eleves.enpc.fr" className="u-active-none u-border-1 u-border-white u-btn u-btn-rectangle u-button-style u-hover-none u-none u-btn-1">alexis.gadonneix@eleves.enpc.fr</a>
          <Link to={'/portfolioWebApp'} className="u-text u-text-1">Back to Home page</Link>
        </div></footer>
    );
}

export default Footer;