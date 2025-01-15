import React from 'react'
import Box from '@mui/material/Box'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Typography from '@mui/material/Typography'
import theme from '/imports/ui/theme'


export const App = () => {

  document.title = 'Cat Adoption Center'

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <img src='http://localhost:8000/Little-Monsters.png'
          width='200px' height='200px' />
        <Typography variant='h1'>Welcome to the Cat Adoption Center!</Typography>
      </Box>
    </ThemeProvider>
  )
}
