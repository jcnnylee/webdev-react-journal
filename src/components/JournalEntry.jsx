import { useState } from "react";
import EditEntry from "./EditEntry";
import { Link } from "react-router-dom";

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
          <h3>{entry.title}</h3>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteEntry(entry.id)}>Delete</button>
          <Link to={`/entries/${entry.id}`} state={{ entry }}>
            <button>View</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default JournalEntry;
