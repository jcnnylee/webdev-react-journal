import RegisterForm from '../components/RegisterForm'
import NavBar from '../components/NavBar'
import { Box, Paper, Typography, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

function RegisterPage() {
    return (
    <>
    <NavBar/>
    <Stack alignItems='center' spacing={4} sx={{ mt: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h2' color='white' 
                    sx={{ 
                        fontFamily: '"Playfair Display", serif', 
                        mb: 2 
                    }}>
                    Welcome to Journaly
                </Typography>
                
                <Typography variant='h5' color='white'>a journaling platform <br/> to track your thoughts and feelings</Typography>
            
            </Box>
        <Box
            sx={{
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <Paper
                elevation={2}
                sx={{
                padding: 3,
                width: '100%',
                maxWidth: 300,
                }}
            >
            <RegisterForm />
            </Paper>
        </Box>

        <Typography 
        color='white'>Have an account? 
            <Link to='/' 
                style={{ textDecoration: 'none', 
                color: '#CCFF00' }}>Login
            </Link>
        </Typography>
    </Stack>
    </>
    )
}

export default RegisterPage
