import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Button, Typography } from "@mui/material"
import EditEntry from "../components/EditEntry"

function JournalDetailPage() {
  const { state } = useLocation()
  const { entry, updateEntry } = state

  const [editing, setEditing] = useState(false)

  if (!entry) return <p>There are no entries selected.</p>

  return (
    <div>
      {editing ? (
        <EditEntry
          entry={entry}
          updateEntry={updateEntry}
          onClose={() => setEditing(false)}
        />
      ) : (
        <>
          <Typography variant="h2">{entry.title}</Typography>
          <Typography>{entry.content}</Typography>

          <Button onClick={() => setEditing(true)}>Edit</Button>
        </>
      )}
    </div>
  )
}

export default JournalDetailPage
