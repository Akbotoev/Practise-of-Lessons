import { NavLink } from "react-router-dom"
import './Header.scss'
export const Header = () => {
    return(
        <>
        <div className="header">
            
            <nav>
                <NavLink to='/' className="header__link">HomePage</NavLink>
                <NavLink to='/authpage' className="header__link">AuthPage</NavLink>
                <NavLink to='/tasklid' className="header__link">TaskLid</NavLink>
                <NavLink to='/productList' className="header__link">ProductList</NavLink>
                <NavLink to='/cart' className="header__link">Cart</NavLink>
            </nav>
        </div>
        </>
    )
}
export default Header;