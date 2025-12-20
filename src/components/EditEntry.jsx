import { useState } from "react"
import {Button, TextField, } from '@mui/material'

function EditEntry({ entry, updateEntry, onClose }) {
  const [title, setTitle] = useState(entry.title)
  const [content, setContent] = useState(entry.content)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateEntry(entry.id, title, content)
    onClose()
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        multiline = {true}
        rows = {4}
        placeholder="Write your journal entry..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Save</Button>
      <Button type="button" onClick={onClose}>Cancel</Button>
    </form>
  );
}

export default EditEntry
