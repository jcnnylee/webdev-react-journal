//import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { API_URL } from "../constants"
import EditEntry from "../components/EditEntry"
import { Typography, Button, Stack, Box } from "@mui/material"
import api from "../axiosConfig"

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
  async function updateEntry(updatedTitle, updatedContent) {
    try {
      await api.put(`/entries/${id}`, {
        title: updatedTitle,
        content: updatedContent,
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
    <Stack alignItems="center" marginTop={6}>
      <Box
        sx={{
          width: "600px",
          border: "1px solid gray",
          borderRadius: 2,
          padding: 3,
        }}
      >
        {editing ? (
          <EditEntry
            entry={entry}
            updateEntry={updateEntry}
            onClose={() => setEditing(false)}
          />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              {entry.title}
            </Typography>

            <Typography sx={{ whiteSpace: "pre-wrap", marginBottom: 2 }}>
              {entry.content}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={() => setEditing(true)}>
                Edit
              </Button>

              <Button component={Link} to="/entries" variant="outlined">
                Back
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Stack>
  )
}

export default JournalDetailPage
