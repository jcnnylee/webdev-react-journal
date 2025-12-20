import { useState } from "react"
import EditEntry from "./EditEntry"
import { Link } from "react-router-dom"

import {Button, Typography} from "@mui/material"

function JournalEntry({ entry, updateEntry, deleteEntry }) {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      {editing ? (
        <EditEntry
          entry={entry}
          onClose={() => setEditing(false)}
          updateEntry={updateEntry}
        />
      ) : (
        <>
          <Typography variant="h3">{entry.title}</Typography>
          <Button onClick={() => deleteEntry(entry.id)}>Delete</Button>
          <Link to={`/entries/${entry.id}`} state={{ entry }}>
            <Button>View</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default JournalEntry
