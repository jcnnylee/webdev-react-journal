import LoginForm from "../components/LoginForm"
import NavBar from "../components/NavBar"
import { Typography, Box, Stack, Paper } from "@mui/material"
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <NavBar />
      <Stack alignItems="center" spacing={4} sx={{ mt: 10 }}>
        <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2">
            Welcome to Journaly, <br/> <Typography variant="h5">a journaling platform <br/> to track your thoughts and feelings</Typography>
        </Typography>
        
        </Box>
        
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: '100%',
            maxWidth: 300,
          }}
        >
        <LoginForm />
        </Paper>
    
        <Typography>Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}>Sign up</Link></Typography>
      </Stack>
    </>
  )
}

export default HomePage