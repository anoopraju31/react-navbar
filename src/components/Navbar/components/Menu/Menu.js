import { useSelector } from 'react-redux'
import { SubMenu } from '../import'
import './Menu.css'

const Menu = ({items}) => {
	const theme = useSelector(state => state.theme)

	return (
		<div className='menuItem'>
			{
				items.map(({title, link, items}, idx) => (
				<div key={idx} className='menu'>
					{ link? <a className={theme? 'light' : 'dark'} href={link}> {title} </a> : 
						<>
							<p className={theme? 'light' : 'dark'} > {title} </p> 
							<div className={theme? "subMenuContainer-light" : "subMenuContainer-dark" }>
								<SubMenu items={items} />
							</div>
						</>
					}       
				</div>
				))
			}
		</div>
	)
}

export default Menu