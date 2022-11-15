import Logo from "../../assets/shopping-store.png"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
    </div>
  )
}

export default Navbar;