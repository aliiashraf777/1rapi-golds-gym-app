import { Box } from '@mui/material'
import { HeroBanner, HomeExercises, SearchExercises } from '../components'
import { useState } from 'react';
 
const Home = () => {

    // shared state of application
    const [selectedBodyPart, setSelectedBodyPart] = useState('all');
    const [searchedExercises, setSearchedExercises] = useState([]);

    return (
        <Box>
            <HeroBanner />

            <SearchExercises
                setSearchedExercises={setSearchedExercises}
                selectedBodyPart={selectedBodyPart}
                setSelectedBodyPart={setSelectedBodyPart}
            />

            <HomeExercises
                searchedExercises={searchedExercises}
                setSearchedExercises={setSearchedExercises}
                selectedBodyPart={selectedBodyPart}
            />
        </Box>
    )
}

export default Home
