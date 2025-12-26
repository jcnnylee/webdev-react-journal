import { useState } from 'react'
import {Button, TextField, Stack, Paper, Typography, Box} from '@mui/material'
import { Planet } from 'react-kawaii'


function JournalForm({ addEntry }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [mood, setMood] = useState('');

    const moods = [
        { name: 'sad', mood: 'sad' },
        { name: 'shocked', mood: 'shocked' },
        { name: 'happy', mood: 'happy' },
        { name: 'excited', mood: 'excited' }
    ];

    // Sends the user an alert if they submit the journal without a title, content, or mood
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) {
            alert('Must enter a title for your journal entry! :)')
            return
        }
        if (!content.trim()) {
            alert('Must write content for your journal entry! :)')
            return
        }
        if (!mood) {
            alert('Must select a mood for your journal entry! :)')
            return
        }
        addEntry(title, content, mood)
        setTitle('')
        setContent('')
        setMood('')
    };

  return (
    
    <Paper sx={{ padding: 3 }}>
      <form onSubmit={handleSubmit}>
          <Stack spacing = {4}>
              <TextField
                  type='text'
                  placeholder='Journal Title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <TextField multiline = {true} rows = {8}
                  placeholder='How are you feeling...?'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
              />
              
              {/* React Kawaii Mood Icons when creating an entry, you will be able to select a mood*/}
              <Box>
                <Typography variant='subtitle2' gutterBottom>Mood:</Typography>
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
                      <Planet size={50} mood={m.mood} color='#CCFF00' />
                    </Box>
                  ))}
                </Stack>
              </Box>

            <Button type='submit' 
                sx={{ 
                    backgroundColor: '#CCFF00',
                    color: '#272757', 
                    fontWeight: 'bold', '&:hover': { backgroundColor: '#deff66' } }} variant='contained'>
                        Add entry
            </Button>
        </Stack>
      </form>
    </Paper>

  );
}

export default JournalForm