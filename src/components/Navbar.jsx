import "../styles/nav.css";
import { MdAccountBox, MdCode, MdDrafts } from "react-icons/md";
import { RxGithubLogo, RxLinkedinLogo, RxReader } from "react-icons/rx";

export default function Navbar() {
  return (
    <nav>
      <div className="link-wrapper">
        <li>
          <MdAccountBox />
          <p>About me</p>
        </li>
      </div>
      <div className="link-wrapper">
        <li>
          <MdCode />
          <p>Projects</p>
        </li>
      </div>
      <div className="link-wrapper">
        <li>
          <MdDrafts />
          <p>Resume</p>
        </li>
      </div>
      <div className="ex-links">
        <div className="ex-link-wrapper">
          <li>
          <a href="https://github.com/isaacach" target="blank_"><RxGithubLogo /></a>
          </li>
        </div>
        <div className="ex-link-wrapper">
          <li>
            <a href="https://www.linkedin.com/in/isaac-achenbach/" target="blank_"><RxLinkedinLogo /></a>
          </li>
        </div>
        <div className="ex-link-wrapper">
          <li>
          <a href="https://alumni.codeup.com/wp-content/uploads/2023/07/Resume-1.pdf" target="blank_"><RxReader /></a>
          </li>
        </div>
      </div>
    </nav>
  );
}
