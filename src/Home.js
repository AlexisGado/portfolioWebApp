import './Home.css';
import './nicepage.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
          {/* <header className="u-align-left u-clearfix u-header u-header" id="sec-edd5"><div className="u-clearfix u-sheet u-sheet-1" /></header> */}
          <section className="u-clearfix u-image u-section-1" id="sec-31a8">
            <div className="u-clearfix u-sheet u-sheet-1">
              <div alt="" className="u-align-center-xs u-image u-image-circle u-image-1" data-image-width={2304} data-image-height={2348} data-page-id={146278} />
              
              <h3 className="u-align-center u-custom-font u-text u-text-1">
                <Link className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-dark-2 u-btn-1" to={"/"} data-page-id={146278}>Alexis Gadonneix</Link>
              </h3>
              <Link to={'/resume'}  className="u-border-2 u-border-hover-palette-1-dark-1 u-border-palette-1-dark-1 u-btn u-btn-round u-button-style u-hover-palette-1-dark-1 u-none u-radius-50 u-text-palette-1-dark-3 u-btn-2">Resume</Link>
              <Link to={'/projects'} className="u-border-2 u-border-hover-palette-1-dark-1 u-border-palette-1-dark-1 u-btn u-btn-round u-button-style u-hover-palette-1-dark-1 u-none u-radius-50 u-text-palette-1-dark-3 u-btn-3">Projects</Link>
              <Link to={'/about'} className="u-border-2 u-border-hover-palette-1-dark-1 u-border-palette-1-dark-1 u-btn u-btn-round u-button-style u-hover-palette-1-dark-1 u-none u-radius-50 u-text-palette-1-dark-3 u-btn-4">About</Link>
              
            </div>
          </section>
        </div>
      );
}

export default Home;