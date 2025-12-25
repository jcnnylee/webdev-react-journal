import LoginForm from "../components/LoginForm"
import { Typography, Box, Stack } from "@mui/material"

function HomePage() {
  return (
    <Stack alignItems="center" spacing={4} sx={{ mt: 10 }}>
        <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
            Welcome to Journaly
        </Typography>
        <Typography variant="h5" gutterBottom>
            Track your thoughts and feelings
        </Typography>
        </Box>

        <LoginForm />
    </Stack>
  )
}

export default HomePage