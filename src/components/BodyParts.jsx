import { Stack, Typography } from '@mui/material'
import { gym } from '../assets/icons/index';


const BodyParts = ({ item, selectedBodyPart, setSelectedBodyPart }) => {
    return (
        <Stack
            type='button'
            onClick={() => {
                setSelectedBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: selectedBodyPart === item ? '4px solid #ff2625' : '4px solid #dfdfdf',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '180px',
                height: '180px',
                cursor: 'pointer', gap: '20px',
                boxShadow: '2px 4px 10px 0px rgba(0,0,0, 0.1)'
            }}
        >
            <img
                src={gym}
                alt="gym_icon"
                style={{
                    width: '40px', height: '40px'
                }}
            />

            <Typography
                fontSize='22px'
                fontWeight='medium'
                fontFamily='Alegreya'
                color='#3a1212'
                textTransform='capitalize'
            >
                {/* {console.log('bodyparts:', item)} */}
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyParts
