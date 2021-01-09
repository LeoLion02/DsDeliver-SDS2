import './styles.css';
import { ReactComponent as   YoutubeIcon} from './Youtube.svg';
import { ReactComponent as   LinkedinIcon} from './Linkedin.svg';
import { ReactComponent as   InstagranIcon} from './Instagram.svg';

function Footer() {
      return (
            <footer className="main-footer">
                  App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
                  <div className="footer-icons">

                        <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="new">
                              <YoutubeIcon  />
                        </a>
                       
                        <a href="https://www.linkedin.com/school/devsuperior/"  target="new">
                              <LinkedinIcon  />
                        </a>
                        
                        <a href="https://www.instagram.com/devsuperior.ig" target="new">
                              <InstagranIcon  />
                        </a>
                  
                  </div>
            </footer>
      )
} 

export default Footer;