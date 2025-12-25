import { Link, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import BookIcon from '@mui/icons-material/Book' // journal-style icon
import PersonIcon from '@mui/icons-material/Person'

import LogoutButton from './LogoutButton'

function NavBar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  return (
    <AppBar color="inherit">
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        
        {/* Menu icon (visual only) */}
        <MenuIcon sx={{ marginRight: 2, fontSize: 30 }} />

        {/* Logo / Title */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <BookIcon sx={{ marginRight: 0.5, fontSize: 32, color: '#505081' }} />
          <Typography variant="h6" fontWeight="bold" color="#505081">
            Journaly
          </Typography>
        </Link>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right side */}
        {token ? (
          <>
            <IconButton
              sx={{
                borderRadius: '50%',
                border: '1px solid gray',
                marginRight: 1,
              }}
              color="inherit"
              component={Link}
              to="/entries"
            >
              <PersonIcon sx={{ color: '#505081' }} />
            </IconButton>

            <LogoutButton />
          </>
        ) : (
          <IconButton
            sx={{
              borderRadius: '50%',
              border: '1px solid gray',
            }}
            color="inherit"
            onClick={() => navigate('/')}
          >
            <PersonIcon sx={{ color: '#505081' }} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
