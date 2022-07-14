import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate("/cart");

  return (
    <header className="header">
      <Logo />
      <Button onClick={handleButtonClick}>Cart</Button>
    </header>
  );
};

export default Header;
