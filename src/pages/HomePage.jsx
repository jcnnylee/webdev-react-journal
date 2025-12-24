import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import { Typography, Button, Box, Stack } from "@mui/material"

function HomePage() {
  return (
    <Stack>
        <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h2" gutterBottom>
            Welcome to Journaly
        </Typography>
        <Typography variant="h5" gutterBottom>
            Track your thoughts and feelings
        </Typography>
        <Button variant="contained" component={Link} to="/entries">
            View Journal Entries
        </Button>

        <LoginForm />

        </Box>
    </Stack>
  )
}

export default HomePage