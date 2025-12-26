//import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_URL } from '../constants'
import EditEntry from '../components/EditEntry'
import { Typography, Button, Stack, Box, Card, CardContent } from '@mui/material'
import api from '../axiosConfig'
import NavBar from '../components/NavBar'
import { Planet } from 'react-kawaii'

function JournalDetailPage() {
  const { id } = useParams()

  useEffect(() => {
    getEntry() //ignore the error
  }, [])

  const [entry, setEntry] = useState(null)
  const [editing, setEditing] = useState(false)

  // Fetches the entry from the API
  async function getEntry() {
    try {
      const response = await api.get(`${API_URL}/entries/${id}`)
      setEntry(response.data)
    } catch (error) {
      console.error(error)
      setEntry(null)
    }
  }

  // UPDATES the entry
  async function updateEntry(updatedTitle, updatedContent, updatedMood) {
    try {
      await api.put(`/entries/${id}`, {
        title: updatedTitle,
        content: updatedContent,
        mood: updatedMood,
      })
      setEditing(false)
      getEntry()
    } catch (error) {
      console.error(error)
    }
  }

  if (!entry) {
    return <Typography>Entry is still loading...</Typography>
  }

  return (
    <>
      <NavBar />
    <Stack alignItems='center' sx={{ mt: 15 }}>
      <Card
        sx={{
          width: '600px',
          padding: 3,
        }}
      >
        <CardContent>
        {editing ? (
          <EditEntry
            entry={entry}
            updateEntry={updateEntry}
            onClose={() => setEditing(false)}
          />
        ) : (
          <>
            <Typography variant='h4' gutterBottom>
              {entry.title}
            </Typography>

            <Typography variant='caption' 
              color='text.secondary' 
              sx={{ 
                display: 'block', 
                mb: 2 
              }}>
              {new Date(entry.createdAt).toLocaleDateString()} 
            </Typography>

            <Typography sx={{ 
              whiteSpace: 'pre-wrap', 
              marginBottom: 2 
              }}>
              {entry.content}
            </Typography>
            
            {/* Displays the mood planet emojis from react-kawaii */}
            {entry.mood && (
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2 
                }}>
                <Typography variant='subtitle2' 
                  sx={{ 
                    mr: 0.5 
                    }}>
                      Mood:
                </Typography>
                <Planet 
                  size={50} 
                  mood={entry.mood} 
                  color='#CCFF00' 
                />
              </Box>
            )}

            <Stack direction='row' spacing={2}>
              <Button variant='contained' 
                sx={{ backgroundColor: '#CCFF00', 
                  color: '#272757', '&:hover': 
                  { backgroundColor: '#deff66' } 
                }} 
                onClick={() => setEditing(true)}>
                Edit
              </Button>

              <Button 
                component={Link} to='/entries' 
                variant='contained' 
                sx={{ backgroundColor: '#CCFF00', 
                color: '#272757', '&:hover': 
                  { backgroundColor: '#deff66' } 
                }}>
                Back
              </Button>

            </Stack>
          </>
        )}
        </CardContent>
      </Card>
    </Stack>
    </>
  )
}

export default JournalDetailPage
