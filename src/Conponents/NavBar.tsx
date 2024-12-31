import { useNavigate } from "react-router-dom";
import "./NavBar.css"

function Navbar (){

    const navigate = useNavigate();
    const goToContact = () => {
      navigate("/about");
    }
    const goToShop = () => {
      navigate('/shop')
    }
    const goToMuted = () => {
      navigate('/')
    }

    return (
        <div className="navbar">
          <button className="left-rounded" onClick={goToShop} >Shop</button>
          <button className="no-rounded" onClick={goToMuted}>Muted</button>
          <button className="right-rounded" onClick={goToContact}>Contact</button>
        </div>

    )
}

export default Navbar;