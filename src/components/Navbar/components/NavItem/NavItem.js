import { useSelector } from 'react-redux'
import { Menu } from '../import'
import './NavItem.css'

const NavItem = ({title, link, items}) => {
	const theme = useSelector(state => state.theme)

	return (
		<div className='navItem'>
			{ link? <a className={theme? 'light' : 'dark'} href={link}> {title} </a> : <p className={theme? 'light' : 'dark'}> {title} </p> }
			{
				items !== undefined && 
				<div className={`menu_container ${theme? 'menu_container-light' : 'menu_container-dark'}`}>
					<Menu items={items} />
				</div>
			}
		</div>
	)
}

export default NavItem