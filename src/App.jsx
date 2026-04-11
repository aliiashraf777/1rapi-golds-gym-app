import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { ExerciseDetail, Home } from './pages';
import { Footer, Navbar } from './components';
 
const App = () => {
  return (

    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto' >

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:exerciseId' element={<ExerciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App
