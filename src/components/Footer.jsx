import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { logo1 } from '../assets/images'
 
const Footer = () => {
  return (
    <Box
      mt="80px"
      bgcolor="#FFF3F4"
    >
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={logo1} alt="logo" style={{ width: '200px', height: '41px' }} />
      </Stack>

      <Typography
        variant="h5"
        sx={{ fontSize: { lg: '28px', xs: '20px' } }}
        mt="41px" textAlign="center" pb="40px"
      >
        Made with ❤️ by Ali Ashraf
      </Typography>
    </Box>
  )
}

export default Footer
