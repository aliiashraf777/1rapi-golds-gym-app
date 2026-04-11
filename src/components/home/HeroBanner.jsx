import { Box, Button, Stack, Typography } from '@mui/material'
import { banner } from '../../assets/images'

const HeroBanner = () => {
    return (

        <Stack direction='row' border='2px solid greenx'>

            <Box sx={{
                mt: { xs: '70px', lg: '120px' },
                ml: { sm: '50px' },
                border: '1px solid redx'
            }} position='relative' p='20px'
            >
                <Typography color='#ff2625'
                    fontWeight='600' fontSize='26px'
                >
                    Fitness Club
                </Typography>

                <Typography fontWeight={700} sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}>
                    Sweat, Smile <br /> and Repeat
                </Typography>

                <Typography fontSize='22px' lineHeight='35px' mb={3}>
                    Check out the most effective exercises
                </Typography>

                <Button variant='contained' color='error' href='#exercises' sx={{
                    backgroundColor: '#ff2625', padding: '10px'
                }}>
                    Explore Exercises
                </Button>
            </Box >


            {/* herobanner img */}
            <Box sx={{
                border: '1px solid blackx',
                position: 'absolute',
                top: '0px',
                right: '0px'
            }}>
                <img
                    src={banner}
                    alt="hero_banner" className='hero-banner-img' sx={{
                        position: 'relative'
                    }} />

                <Typography fontWeight={600} color='#ff2625' fontSize='200px' sx={{
                    opacity: 0.1,
                    display: { xs: 'none', lg: 'block' },
                    position: 'relative',
                    right: '180px',
                    top: '430px',
                    zIndex: '-10'
                }}>
                    Exercises
                </Typography>
            </Box>

        </Stack>
    )
}

export default HeroBanner
