import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Error404 from '../pages/Error404'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
