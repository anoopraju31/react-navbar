import { useSelector } from 'react-redux'
import './SubMenu.css'

const SubMenu = ({items}) => {
	const theme = useSelector(state => state.theme)
	
	return (
		<div className='subMenu'>
			{
				items.map(({title, link}, idx) => <a className={theme? 'light' : 'dark'} key={idx} href={link}> {title} </a> )
			}
		</div>
	)
}

export default SubMenu