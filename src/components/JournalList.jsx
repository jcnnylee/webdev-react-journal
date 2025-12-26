import { Link } from 'react-router-dom'
import {Button, Stack, Typography, Card, CardContent, CardActions,} from '@mui/material'
/**
 * If there are no entries, display a message
 * Displays the entries in a list with MUI's Card components and includes a delete and view button
 */
//Added to display the date of when the entry was created using toLocaleDateString()
function JournalList({ entries, deleteEntry }) {
    if (!entries.length) return <p>There are no entries yet :(</p>
        return (
            <Stack spacing={2} sx={{ pb: 4 }}> 
                {entries.map((entry) => (
                    <Card sx = {{
                        width: 260,
                        height: 140,
                        overflow: 'hidden',
                    
                    }} key={entry.id} variant='outlined'>
                        
                        <CardContent>
                            <Typography variant='h6' noWrap>{entry.title}</Typography>
                            {/* Displays the date of the journal entry*/}
                            <Typography variant='caption' color='text.secondary'> 
                                {new Date(entry.createdAt).toLocaleDateString()}
                            </Typography>
                        </CardContent>
                        
                        <CardActions>
                            <Button size='small' variant='contained' 
                                sx={{ backgroundColor: '#CCFF00', 
                                color: '#272757',  '&:hover': { backgroundColor: '#deff66' } }}
                                onClick={() => deleteEntry(entry.id)}>
                                    Delete
                            </Button>

                            <Button size='small' variant='contained' 
                                sx={{ backgroundColor: '#CCFF00', 
                                color: '#272757',  '&:hover': { backgroundColor: '#deff66' } }} 
                                component={Link} to= {`/entries/${entry.id}`} 
                                state={{ entry }}>
                                    View
                            </Button>
                        </CardActions>

                    </Card>
                ))}
            </Stack>
        )
}

export default JournalList