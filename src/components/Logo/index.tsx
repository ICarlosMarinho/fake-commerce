import { Link } from "react-router-dom";
import "./style.css";
import LogoImg from "../../../public/logo.svg";

const Logo = () => (
  <Link to="/" className="link" aria-label="Go to home page">
    <img
      src={LogoImg}
      alt="App logo, containing a dollar sign inside a circle and the words Fake Commerce."
      width="auto"
      height="50px"
    />
  </Link>
);

export default Logo;
