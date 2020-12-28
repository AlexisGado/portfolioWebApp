import './ProjectCloseUp.css';
import './nicepage.css';
import projectList from './projectList.json';

const ProjectCloseUp = ({match}) => {

    const id = match.params.id;
    const proj = projectList.projects[Math.floor((id-1)/3)][(id-1)%3];
    const im1 = require(`${proj.im1}`).default;
    const im2 = require(`${proj.im2}`).default;

    const style_im_1 = {
        backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),url("${im1}")`,
      }
    
    const style_im_2 = {
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url("${im2}")`,
      }

    return (
        <div>
        <section className="u-clearfix u-section-proj-1" id="carousel_68e4">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1" style={style_im_1}>
                  <div className="u-container-layout u-valign-bottom u-container-layout-1">
                    <h3 className="u-text u-text-1">{proj.title}</h3>
                  </div>
                </div>
                <div className="u-container-style u-image u-layout-cell u-right-cell u-size-30 u-image-2" style={style_im_2}>
                  <div className="u-container-layout u-valign-bottom u-container-layout-2">
                    <p className="u-text u-text-body-alt-color u-text-2">{proj.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-shape u-shape-svg u-text-palette-1-dark-1 u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" style={{}}><use xlinkHref="#svg-1adf" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" 
            viewBox="0 0 160 160" x="0px" y="0px" id="svg-1adf"><path d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
	        c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z" /></svg>
          </div>
        </section>
        <section className="u-align-center-lg u-align-center-md u-align-center-xl u-align-left-sm u-align-left-xs u-clearfix u-section-proj-2" id="carousel_9d55">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            
                {proj.text.map((par)=>(
                    <p className="u-align-left-lg u-align-left-md u-align-left-xl u-text u-text-1">
                     {par}
                    </p>
                ))}
                
            <div className="u-palette-1-dark-2 u-shape u-shape-circle u-shape-1" />
          </div>
        </section>
        {(proj.is_github_link)?(
        <section className="u-clearfix u-section-proj-3" id="carousel_89f7">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-left-cell u-size-41 u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h3 className="u-text u-text-1">Link to the code : </h3>
                    </div>
                  </div>
                  <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-19 u-layout-cell-2">
                    <div className="u-container-layout">
                      <a href={proj.link} className="u-btn u-button-style u-hover-palette-2-dark-1 u-palette-1-dark-1 u-btn-1" target="_blank">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>):''
        }
      </div>
    );
}

export default ProjectCloseUp;