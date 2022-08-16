import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar } from './components/import'
import { TemplatePage } from './Pages/import'
import './App.css'

const App = () => {
	const theme = useSelector(state => state.theme)

	return (
		<div className={theme? 'app-light' : 'app-dark'} >
			<div className="container">        
				<BrowserRouter>
				<Navbar />
				
				<Routes> 
					<Route path='/' element={<TemplatePage title='Home' />} />
					<Route path='/about' element={<TemplatePage title='About' />} />
					<Route path='/service/:id/' element={<TemplatePage title='Service' />} />
					<Route path='/blog/:id/:section' element={<TemplatePage title='Blog' />} />
					<Route path='/contact' element={<TemplatePage title='Contact' />} />
				</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App