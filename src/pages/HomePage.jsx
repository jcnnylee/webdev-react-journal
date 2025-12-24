import { Link } from 'react-router-dom'
import { Typography, Button, Box } from '@mui/material'

function HomePage() {
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Your Journal
      </Typography>
      <Typography variant="h5" gutterBottom>
        Keep track of your thoughts and memories.
      </Typography>
      <Button variant="contained" component={Link} to="/entries">
        View Journal Entries
      </Button>
    </Box>
  )
}

export default HomePage