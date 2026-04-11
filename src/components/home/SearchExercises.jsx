import { Box, Button, Skeleton, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { exerciseOptions, fetchExercisesData } from "../../utils/fetchExerciseData"
import HorizontalScrollbar from "../HorizontalScrollbar"
HorizontalScrollbar


const SearchExercises = ({ setSearchedExercises, selectedBodyPart, setSelectedBodyPart }) => {

    const [searchInput, setSearchInput] = useState('')
    // const [searchedExercises, setSearchedExercises] = useState([]);
    const [loadBodyParts, setLoadBodyParts] = useState([]);

    // loading skeleton state
    const [isLoadingSkel, setIsLoadingSkel] = useState(true)


    const handleSearch = async () => {
        if (searchInput) {
            const fetchedExercisesData = await fetchExercisesData(
                'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
            );

            console.log('fetchedExercisesData', fetchedExercisesData);

            const filteredSearchExercises = fetchedExercisesData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(searchInput)
                    || exercise.bodyPart.toLowerCase().includes(searchInput)
                    || exercise.target.toLowerCase().includes(searchInput)
                    || exercise.equipment.toLowerCase().includes(searchInput)
            );

            console.log('filteredSearchExercises result', filteredSearchExercises);

            setSearchInput('');

            // console.log('searched exercises: ', filteredSearchExercises)

            // setSearchedExercises(filteredSearchExercises);
            setSearchedExercises(fetchedExercisesData);

            // console.log('searched exercises: ', filteredSearchExercises)
        }
    }

    // exercises category load on page load
    useEffect(() => {
        const fetchBodyPartsData = async () => {

            setIsLoadingSkel(true);

            const fetchedBodyParts = await fetchExercisesData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions
            );

            // console.log('fetchedBP: ', fetchedBodyParts);
            setLoadBodyParts(['all', ...fetchedBodyParts]);

            setIsLoadingSkel(false);
        }

        fetchBodyPartsData()
    }, [])



    return (
        <Stack alignItems='center' justifyContent='center' p='20px' border='2px solid redx' sx={{
            marginTop: { xs: '50px', md: '220px' }
        }}>
            <Typography fontWeight={700} sx={{
                fontSize: { lg: '44px', xs: '30px' }
            }} mb='50px' textAlign='center'
            >
                Awesome Exercises You <br /> Should Know
            </Typography>

            <Box position='relative' mb='72px'>
                <TextField
                    type='text'
                    placeholder='Search Exercises'
                    height='76px'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
                    // enter key support
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch()
                        }
                    }}
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { xs: '250px', lg: '900px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                    className='search-input'
                />

                <Button className='search-btn' sx={{
                    bgcolor: '#ff2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { xs: '80px', lg: '175px' },
                    fontSize: { xs: '14px', lg: '20px' },
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>


            {/* body parts scrollbar */}
            <Box sx={{
                position: 'relative', width: '100%', p: '20px', height: '350pxx', overflow: 'hiddenx', border: '2px solid redx'
            }}>
                {isLoadingSkel ? (
                    <Stack>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <Skeleton
                                key={idx}
                                variant='rectangular'
                                width={200}
                                height={200}
                                sx={{ borderRadius: '20px' }}
                            />
                        ))}
                    </Stack>
                ) : (
                    <HorizontalScrollbar
                        data={loadBodyParts}
                        selectedBodyPart={selectedBodyPart}
                        setSelectedBodyPart={setSelectedBodyPart}
                    />
                )
                }
            </Box>
        </Stack>
    )
}

export default SearchExercises
