
import './Projects.css';
import './nicepage.css';
import {Link} from 'react-router-dom';
//import p1_i1 from './images/p1_i1.png';

const BlockProject = ({blockNumber,proj}) => {

    let myurl = proj.imThumb;
    let im = require(`${myurl}`).default;
    const style_im = {
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${im})`,
        boxShadow: "5px 5px 20px 0 rgba(0,0,0,0.4)",
        backgroundPosition: "50% 50%"
    }

    let addr ='';
    if (proj.own_page){
        addr ='/'+proj.id;
    }

    return (
        <Link to={`/projects${addr}`} className="u-align-left u-blog-control u-blog-post u-container-style u-custom-background u-image u-image-round u-repeater-item u-shading" style={style_im} data-image-width={150} data-image-height={100} data-page-id={146807}>
            <div className={`u-container-layout u-similar-container u-valign-bottom u-container-layout-${blockNumber}`}>
                <h3 className={`u-blog-control u-custom-font u-text u-text-${blockNumber}`}>
                  <div className="u-post-header-link" href="#">{proj.title}</div>
                </h3>
            </div>
        </Link>
    );
}

export default BlockProject;