import React ,{useState}from 'react'
import {Link} from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const Header = () => {
    const [sidebar,setSidebar] = useState(false)
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header")
        header.classList.toggle("active",window.scrollY > 200)
    })
  return (
    <div>
        <header className="header">
            <div className="container flex">
                <div className="logo">
                    <img src='assets/logo.png' alt='' />
                </div>
                <div className="nav">
                    <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick = {() => setSidebar(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/pages'>Pages</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li className="icon">
                            <SearchOutlinedIcon className='HeaderIcon'/>
                            <WorkOutlinedIcon className='HeaderIcon'/>
                            <GridViewOutlinedIcon className='HeaderIcon'/>
                        </li>
                    </ul>
                </div>
                <button className="navbar-item-icons" onClick={() =>setSidebar(!sidebar)}>
                    {sidebar ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                </button>
            </div>
        </header>
    </div>
  )
}

export default Header