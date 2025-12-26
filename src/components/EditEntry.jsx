import { useState } from 'react'
import {Button, TextField, Stack, Box, Typography} from '@mui/material'
import { Planet } from 'react-kawaii'

function EditEntry({ entry, updateEntry, onClose }) {
  const [title, setTitle] = useState(entry.title)
  const [content, setContent] = useState(entry.content)
  const [mood, setMood] = useState(entry.mood || '')

  // Mood options in react kawaii
  const moods = [
    { name: 'sad', mood: 'sad' },
    { name: 'shocked', mood: 'shocked' },
    { name: 'happy', mood: 'happy' },
    { name: 'excited', mood: 'excited' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault()
    updateEntry(title, content, mood)
    onClose()
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          multiline = {true}
          rows = {4}
          placeholder='Write your journal entry...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        {/* React Kawaii Mood Icons when editing the entry, you will be able to select a mood*/}
        <Box>
          <Typography variant='subtitle2' gutterBottom>What mood are you feeling?</Typography>
          <Stack direction='row' spacing={2} justifyContent='center'>
            {moods.map((m) => (
              <Box
                key={m.name}
                onClick={() => setMood(m.name)}
                sx={{
                  cursor: 'pointer',
                  padding: 1,
                  borderRadius: 2,
                  border: mood === m.name ? '3px solid #CCFF00' : '3px solid transparent',
                  backgroundColor: mood === m.name ? '#f0f0f0' : 'transparent',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  }
                }}
              >
                <Planet size={60} mood={m.mood} color='#CCFF00' />
              </Box>
            ))}
          </Stack>
        </Box>

        <Stack direction='row' spacing={2}>
          <Button type='submit' variant='contained' sx={{ backgroundColor: '#CCFF00', color: '#272757', fontWeight: 'bold', '&:hover': { backgroundColor: '#deff66' } }}>Save</Button>
          <Button type='button' variant='outlined' onClick={onClose}>Cancel</Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default EditEntry