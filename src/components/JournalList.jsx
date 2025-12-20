import JournalEntry from "./JournalEntry"
import { Link } from "react-router-dom"
import {Button, Stack, Typography, Card, CardContent, CardActions,} from '@mui/material'
/**
 * If there are no entries, display a message
 * Displays the entries in a list with MUI's Card components and includes a delete and view button
 */
function JournalList({ entries, deleteEntry }) {
    if (!entries.length) return <p>There are no entries yet :(</p>
        return (
            <Stack spacing={2}> 
                {entries.map((entry) => (
                    <Card sx = {{
                        width: 250,
                        height: 120,
                        overflow: 'hidden',
                        backgroundColor: '#b0c4b1',
                        '&&:hover': {
                            backgroundColor: '#748d75ff',
                        }
                    }} key={entry.id} variant="outlined">
                        
                        <CardContent>
                            <Typography variant="h6" noWrap>{entry.title}</Typography>
                        </CardContent>
                        
                        <CardActions>
                            <Button size="small" onClick={() => deleteEntry(entry.id)}>Delete</Button>

                            <Button size="small" component={Link} to= {`/entries/${entry.id}`} state={{ entry }}>View</Button>
                        </CardActions>

                    </Card>
                ))}
            </Stack>
        )
}

export default JournalList
