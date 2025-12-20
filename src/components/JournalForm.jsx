import { useState } from "react"
import {Button, TextField, Stack} from '@mui/material'


function JournalForm({ addEntry }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return
        addEntry(title, content)
        setTitle("")
        setContent("")
    };

  return (
    
    <form onSubmit={handleSubmit}>
        <Stack spacing = {4}>
            <TextField
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField multiline = {true} rows = {8}
                placeholder="Write your journal entry..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" color = 'primary'>Add entry</Button>
        </Stack>
    </form>

  );
}

export default JournalForm
