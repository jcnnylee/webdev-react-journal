import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import JournalForm from '../components/JournalForm'
import JournalList from '../components/JournalList'
//import axios from 'axios'
import { API_URL } from '../constants'

import { Typography , Stack , Box , Divider } from '@mui/material'
import api from '../axiosConfig'
import NavBar from '../components/NavBar'

function JournalPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
  }, [navigate])

  const [entries, setEntries] = useState([]);

  // Fetches the entries from the API
  async function getEntries() {
    try {
      const response = await api.get(`${API_URL}/entries`)
      const { data } = response
      setEntries(data.reverse()) // Displays the newest entries first

    } catch (error) {
      console.error('Something went wrong', error)
      setEntries([])
    }
  }

  useEffect(() => {
    getEntries() //ignore
  }, [])

  // Adds an entry to the JournalList
  async function addEntry(title, content, mood) {
    try {
      await api.post(`/entries`, { title, content, mood })
      getEntries()

    } catch (error) {
      console.error(error)
    }
  }

  // Deletes an entry from the JournalList
  async function deleteEntry(id) {
    try {
      await api.delete(`${API_URL}/entries/${id}`)
      getEntries()
    } catch (error) {
      console.error(error)
    }
  }

  // Updates an entry in the JournalList
  async function updateEntry(id, title, content) {
  try {
    await api.put(`${API_URL}/entries/${id}`, 
      { title, 
        content 
      })
    getEntries()
  } catch (error) {
    console.error(error)
  }
}



  // const addEntry = (title, content) => {
  // const newEntry = {
  //   id: Date.now(),
  //   title,
  //   content,
  // }

  // setEntries([...entries, newEntry])
  // }

  /*  const updateEntry = (id, updatedTitle, updatedContent) => {
  setEntries(
  entries.map((entry) =>
    entry.id === id ? { ...entry, title: updatedTitle, content: updatedContent } : entry
  )
  )
  } */

  /*This function deletes an entry from the JournalList */
  // const deleteEntry = (id) => {
  //   setEntries(entries.filter((entry) => entry.id !== id))
  // };

  return (
    <>
      <NavBar />
    {/*Stack container that wraps the heading, JournalList and JournalForm together*/}
    <Stack 
      direction = 'column' 
      spacing = {8} 
      alignItems = 'center' 
      sx={{ mt: 10 }}>
      
      <Stack spacing = {4}>
        <Typography variant = 'h5' color='white'>Journal Entries</Typography>
    
        <Stack 
          direction = {{ xs: 'column', sm: 'row' }} 
          alignItems = 'flex-start' 
          justifyContent= 'center' 
          spacing = {10}>

          <Box flex = {1}>
            <JournalList
            entries={entries}
            updateEntry={updateEntry}
            deleteEntry={deleteEntry}
            />
          </Box>

          <Divider orientation = 'vertical' flexItem sx={{ bgcolor: 'white' }}/>

          <Box
            sx={{
        
            minWidth: { xs: '100%', sm: 600 },
            
            }}
          >
            <JournalForm addEntry={addEntry} />
          </Box>

        </Stack>
      </Stack>
    </Stack>
    </>
  )
}

export default JournalPage