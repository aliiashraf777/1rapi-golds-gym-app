import { Button, Stack, Typography } from "@mui/material";
import { bodyPart, equipment, gym, target } from "../../assets/icons";
 

const ExerciseDetail = ({ exerciseDetail }) => {

    const { bodyPart, name, target, equipment } = exerciseDetail;

    console.log('exercise detail', { exerciseDetail });

    const customExtraDetail = [
        {
            icon: bodyPart,
            name: bodyPart,
        },
        {
            icon: target,
            name: target,
        },
        {
            icon: equipment,
            name: equipment,
        },
    ]

    return (
        <Stack ga='60px' sx={{
            flexDirection: { lg: 'row' }, alignItems: 'center', p: '20px'
        }}>
            <img src={gym} alt="gym_img" loading='lazy' />

            <Stack>
                <Typography variant='h3'>
                    {name}
                </Typography>

                <Typography variant='h6'>
                    Exercises keep you strong {name} {' '}

                    is one of the best
                    exercises to target your {target}. It will help you improve your mood and gain energy
                </Typography>

                {/* extra details */}
                {customExtraDetail.map((item) => (
                    <Stack
                        key={item.name}
                        direction='row'
                        alignItems='center'
                        gap='24px'
                    >
                        <Button>
                            <img
                                src={item.icon}
                                alt="bodyPart"
                                style={{ width: '50px', height: '50px' }}
                            />
                        </Button>

                        <Typography variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}

            </Stack>
        </Stack>
    )
}

export default ExerciseDetail
