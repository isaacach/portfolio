import "../styles/nav.css";
import { MdAccountBox, MdCode, MdDrafts } from "react-icons/md";
import { RxGithubLogo, RxLinkedinLogo, RxReader } from "react-icons/rx";
import { Scrollbar } from "react-scrollbars-custom";

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
            <RxGithubLogo />
          </li>
        </div>
        <div className="ex-link-wrapper">
          <li>
            <RxLinkedinLogo />
          </li>
        </div>
        <div className="ex-link-wrapper">
          <li>
            <RxReader />
          </li>
        </div>
      </div>
    </nav>
  );
}
