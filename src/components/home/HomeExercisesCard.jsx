import { Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import { gym } from "../../assets/icons";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchExercisesData } from "../../utils/fetchExerciseData";

const HomeExercisesCard = ({ exercise }) => {

    // const gifUrl = `https://exercisedb.p.rapidapi.com/image/${exercise.id}`;

    // const gifUrl = `https://d205bpvrqc9yn1.cloudfront.net/${exercise.id}.gif`;

    const fallBackUrl = gym;

    // solution b - not recommended, extra api calls, slower
    // const [imageUrl, setImageUrl] = useState(null)

    // useEffect(() => {
    //     const fetchExerciseImage = async () => {
    //         const fetchedImg = await fetchExercisesData(
    //             `https://exercisedb.p.rapidapi.com/image/${exercise.id}`, exerciseOptions
    //         );
    //         setImageUrl(fetchedImg.url);
    //     };
    //     fetchExerciseImage();
    // }, []);

    return (
        <Link
            className='exercise-card'
            to={`/exercise/${exercise.id}`}
        >
            {/* <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' /> */}
            <img
                // src={imageUrl}
                // src={gifUrl}
                src={gym}
                alt={exercise.name}
                loading='lazy'
                onError={(e) => {
                    e.target.src = fallBackUrl
                }}
            />

            <Stack direction='row'>

                {/* <Typography ml='21pxx' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize'>
                    {exercise.name}
                </Typography> */}

                <Button sx={{
                    ml: '21pxx', color: '#fff', background: '#ffa9a9', fontSize: '14px', textTransform: 'capitalize', borderRadius: '20px'
                }}>
                    {exercise.bodyPart}
                </Button>

                <Button sx={{
                    ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', textTransform: 'capitalize', borderRadius: '20px'
                }}>
                    {exercise.target}
                </Button>
            </Stack>

            <Typography ml='21pxx' color='#000' fontWeight='bold' mt='17px' pb='10px' textTransform='capitalize' textAlign={"center"}>
                {exercise.name}
            </Typography>

            <Typography ml='21pxx' color='#000' fontWeight='normal' mt='11px' pb='10px' textTransform='capitalize' textAlign='center'>
                {exercise.description.slice(0, 60) + '...'}
            </Typography>

        </Link>
    )
}

export default HomeExercisesCard
