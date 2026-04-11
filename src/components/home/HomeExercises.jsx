import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeExercisesCard from './HomeExercisesCard';
import { exerciseOptions, fetchExercisesData } from '../../utils/fetchExerciseData';
import SearchExercises from './SearchExercises';

const HomeExercises = ({ searchedExercises, setSearchedExercises, selectedBodyPart }) => {

    // console.log('homeExercises', searchedExercises);

    const exercisesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastExercise = currentPage * exercisesPerPage

    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

    const currentExercises = Array.isArray(searchedExercises) ? searchedExercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }

    // solution 1
    // useEffect(() => {
    //     const fetchHomeExercises = async () => {
    //         const homeFetchedExercises = await fetchExercisesData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

    //         if (selectedBodyPart === 'all') {
    //             setSearchedExercises(homeFetchedExercises);
    //         } else {
    //             const filteredHomeExercises = homeFetchedExercises.filter((exercise) =>
    //                 exercise.bodyPart === selectedBodyPart
    //             );

    //             setSearchedExercises(filteredHomeExercises);
    //         }
    //     }

    //     fetchHomeExercises();

    // }, [selectedBodyPart]);


    useEffect(() => {
        const fetchHomeExercises = async () => {

            // const homeFetchedExercises = [];
            let homeFetchedExercises = [];

            if (selectedBodyPart === 'all') {
                homeFetchedExercises = await fetchExercisesData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                homeFetchedExercises = await fetchExercisesData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`, exerciseOptions);
            }

            setSearchedExercises(homeFetchedExercises);
        }

        fetchHomeExercises();

    }, [selectedBodyPart]);

    console.log('homeExercises', searchedExercises);


    return (
        <Box
            border='1px solid blackx'
            id='searchedExercises'
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            p='20px'
        >
            {/* <Typography variant='h3' mb='46px'> */}
            <Typography fontWeight={700} sx={{
                fontSize: { lg: '44px', xs: '40px' },
                mb: 8, ml: 4,
            }}>
                Showing Results
            </Typography>

            <Stack direction='row' sx={{
                gap: { xs: '50px', lg: '70px' }
            }}
                flexWrap='wrap'
                justifyContent='center'
            >
                {/* {searchedExercises.length === 0 ? ( */}
                {/* {currentExercises.slice(0, 8).length === 0 ? ( */}
                {currentExercises.length === 0 ? (
                    <Typography>Kindly Search Exercise</Typography>
                ) : (<>
                    {searchedExercises.slice(0, 9).map((exercise, idx) => (
                        <HomeExercisesCard
                            key={idx}
                            exercise={exercise}
                        />
                    ))}
                </>)}
            </Stack>


            {/* paginating excess exercises */}
            <Stack mt='100px' alignItems='center'>
                {SearchExercises.length > exercisesPerPage && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(searchedExercises.length / exercisesPerPage)}
                        size='large'
                        page={currentPage}
                        onChange={paginate}
                    />
                )}
            </Stack>
        </Box>
    )
}

export default HomeExercises
