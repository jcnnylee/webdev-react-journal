import { useState } from "react"
import JournalForm from "../components/JournalForm"
import JournalList from "../components/JournalList"

import { Typography , Stack , Box , Divider } from "@mui/material"

function JournalPage() {
  const [entries, setEntries] = useState([]);

  const addEntry = (title, content) => {
  const newEntry = {
    id: Date.now(),
    title,
    content,
  }

  setEntries([...entries, newEntry])
  }

  /*  const updateEntry = (id, updatedTitle, updatedContent) => {
  setEntries(
  entries.map((entry) =>
    entry.id === id ? { ...entry, title: updatedTitle, content: updatedContent } : entry
  )
  )
  } */

  /*This function deletes an entry from the JournalList */
  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id))
  };

  return (
    /*Stack container that wraps the heading, JournalList and JournalForm together*/
    <Stack direction = 'column' spacing = {8} alignItems = 'center'>
      <Typography variant="h3">Journal</Typography>

      <Stack spacing = {4}>

        <Typography variant = "h5">Journal Entries</Typography>
    
        <Stack direction = {{ xs: 'column', sm: 'row' }} alignItems = 'flex-start' justifyContent= 'center' spacing = {10}>

          <Box flex = {1}>
            <JournalList
            entries={entries}
            //updateEntry={updateEntry}
            deleteEntry={deleteEntry}
            />
          </Box>

          <Divider orientation = 'vertical' flexItem />

          <Box
            sx={{
            border: '1px solid gray',
            padding: 2,
            borderRadius: 2,
            minWidth: { xs: '100%', sm: 600 },
            
            }}
          >
            <JournalForm addEntry={addEntry} />
          </Box>

        </Stack>
      </Stack>
    </Stack>
  )
}

export default JournalPage
