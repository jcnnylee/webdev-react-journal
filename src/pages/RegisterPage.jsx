import RegisterForm from '../components/RegisterForm'
import NavBar from '../components/NavBar'
import { Box, Paper, Typography } from '@mui/material'

function RegisterPage() {
    return (
    <>
    <NavBar/>

    <Box
        sx={{
        minHeight: 600,
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
    <Typography variant="h6" alignContent="center">Journaly</Typography>
    <RegisterForm />
    </Paper>
    </Box>
    </>
    )
}

export default RegisterPage
