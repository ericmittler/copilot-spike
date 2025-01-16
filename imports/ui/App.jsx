import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline' // Import CssBaseline
import theme from '/imports/ui/theme'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useTracker } from 'meteor/react-meteor-data'
import { Cats } from '/imports/api/Cats/cat'
import { Cat_insert } from '/imports/api/Cats/cat_meteor_methods'
import { Cat_remove } from '/imports/api/Cats/cat_meteor_methods'
import { Cat_update } from '/imports/api/Cats/cat_meteor_methods'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

console.log('Cat_insert', Cat_insert)

export const App = () => {

  document.title = 'Cat Adoption Center'

  const { loading, cats } = useTracker(() => {
    const subscription = Meteor.subscribe('cats')
    let cats = Cats.find().fetch()
    const loading = !subscription.ready() || cats === undefined
    console.log(!subscription.ready(), cats, loading)
    return { loading, cats }
  })

  const handleAddCat = () => {
    const cat = {
    }
    Cat_insert.call({ cat })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box role='App' sx={{ minHeight: '100vh' }}>
        <Box role='header'
          sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src='http://localhost:8000/Little-Monsters.png' width='200px' height='200px' />
          <Typography variant='h1'>Welcome to the Cat Adoption Center!</Typography>
        </Box>

        <Box role='main' sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {loading ?
            <Typography variant='h6'>Loading...</Typography>
            : (
              cats.map(cat => <CatCard key={cat._id} cat={cat} />)
            )}
        </Box>

        <Box role='add-cat'>
          <Button
            variant="contained"
            onClick={handleAddCat}
          >
            Add Cat
          </Button>
        </Box>

      </Box>
    </ThemeProvider>
  )
}

const CatCard = ({ cat }) => {

  const [name, setName] = useState(cat.name)

  const handleFileUpload = async event => {
    console.log(event)
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    formData.append('cat', JSON.stringify(cat))
    try {
      const response = await axios.post('http://localhost:3333/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('File uploaded successfully:', response.data)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }



  const handleNameChangeBlur = async event => {
    const newName = event.target.value
    setName(newName)
    const delta = { name: newName }
    Cat_update.call({ cat, delta })
  }

  return (
    <Card key={cat._id} sx={{ maxWidth: 345, margin: '12px', padding: '8px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
        <img src={cat.imageUrl()} alt={cat.name} style={{ width: '200px', height: 'auto' }} />
        <TextField role='Edit-Cat-Name'
          variant='outlined' value={name}
          onChange={e => setName(e.target.value)}
          onBlur={handleNameChangeBlur}
          label='Cat Name'
          fullWidth
          sx={{ margin: '8px 0' }}
        />

        <Box role='Button-Actions'
          sx={{ display: 'flex', gap: '4px' }}>
          <Box role='Upload-Image'>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id={`upload-button-${cat._id}`}
              type="file"
              onChange={handleFileUpload}
            />
            <label htmlFor={`upload-button-${cat._id}`}>
              <Button variant="contained" startIcon={<UploadFileIcon />}>
                Upload Image
              </Button>
            </label>
          </Box>
          <Button role='Delete-Cat-Button'
            variant='contained' color='error'
            startIcon={<DeleteForeverIcon />}
            onClick={() => Cat_remove.call({ cat })}
          >
            Remove Cat
          </Button>
        </Box>
      </Box >
    </Card >
  )
}
