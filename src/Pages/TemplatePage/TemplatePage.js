import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './TemplatePage.css'

const TemplatePage = ({title}) => {
    const theme = useSelector(state => state.theme)
    let { id, section } = useParams()

    return (
        <div className={`templatePage ${theme? 'templatePage-light' : 'templatePage-dark' }`}>
            <h1 className={ theme? 'light' : 'dark' }> 
                {title} 
                { id && <span> - {id} </span> } 
                { section && <span> / {section} </span> }
            </h1>
        </div>
    )
}

export default TemplatePage