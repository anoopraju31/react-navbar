import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { NavItem } from './components/import'
import { getTheme } from '../../actions/theme'
import { navItems } from './util'
import './Navbar.css'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const theme = useSelector(state => state.theme)
	const dispatch = useDispatch()
	
	return (
		<div className='navbar'>
			<div className='logo'>
				<h1> <a className={theme? 'light': 'dark'} href="/"> Logo! </a> </h1>
			</div>

			<div className={`hamburger ${theme? 'hamburger-light' : 'hamburger-dark'}`} onClick={() => setClick(prev => !prev)}>
				{click? <IoMdClose size={35} /> : <GiHamburgerMenu size={25} /> }
			</div>

			<div className={ `${click? "navbarContainer": "navbarContainerClose"} ${theme? 'navbarContainer-light' : 'navbarContainer-dark'}` }>
				<NavItem title={navItems.home.title} link={navItems.home.link} />
				<NavItem title={navItems.about.title} link={navItems.about.link} />
				<NavItem title={navItems.service.title} link={navItems.service.link} items={navItems.service.items} />
				<NavItem title={navItems.blog.title} link={navItems.blog.link} items={navItems.blog.items} />
				<NavItem title={navItems.contact.title} link={navItems.contact.link} />   
				<div 
					className={theme? 'themeButton-light' : 'themeButton-dark'} 
					onClick={() => dispatch(getTheme(!theme))}
				> {theme? 'Dark Theme' : 'Light Theme' } </div>     
			</div>
		</div>
	)
}

export default Navbar