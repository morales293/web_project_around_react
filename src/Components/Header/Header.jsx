import Logo from "../../images/Vector.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logotipo Around the US" className="header__image" />
    </header>
  );
}

export default Header;
