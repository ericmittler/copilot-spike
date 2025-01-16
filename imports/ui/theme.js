import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: { default: '#ddcfcf' },
  },
  typography: {
    fontFamily: [
      'Arial', 'sans-serif'
    ].join(','),
    caption: {
      lineHeight: 1,
      color: '#514848'
    },
    body1: {
      color: '#000',
      fontSize: '10pt',
    },
    body2: {
      color: '#333',
      fontSize: '9pt',
    },
    h1: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: '28pt',
    },
    h2: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: '18pt',
    },
    h3: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    h4: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: '12pt',
    },
    label: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: '10pt',
    }
  }
})

export default theme