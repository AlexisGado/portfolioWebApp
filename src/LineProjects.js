import './Projects.css';
import './nicepage.css';
import BlockProject from './BlockProject';

const LineProjects = ({sectionNumber,projL}) => {
  const style_im = {
    backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images03.nicepage.io/b4c49cc81a6e00815e9a1444/c14b503245585dc89198fd8a/2264586_medium2000.jpg')",
    boxShadow: "5px 5px 20px 0 rgba(0,0,0,0.4)",
    backgroundPosition: "50% 50%"}

    return (
        <section className={`u-clearfix u-palette-1-light-2 u-valign-middle u-section-${sectionNumber}`} id="sec-0979">
          <div className="u-blog u-expanded-width u-repeater u-repeater-1">
            {projL.map((proj,idx) => (
              <BlockProject key={proj.id} blockNumber={idx+1} proj={proj}/>
            ))}
          </div>
        </section>
    );
}

export default LineProjects