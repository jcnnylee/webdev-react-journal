import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import BookIcon from '@mui/icons-material/Book' // the icon for the journal
import PersonIcon from '@mui/icons-material/Person'

function NavBar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [anchorEl, setAnchorEl] = useState(null)

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    handleMenuClose()
    navigate('/')
  }

  return (
    <AppBar 
      sx={{ 
        backgroundColor: '#272757', 
        borderBottom: '1px solid white' 
      }}>
        
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        
        {/* Menu icon*/}
        <MenuIcon sx={{ marginRight: 2, fontSize: 30 }} />

        <Link
          to='/'
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <BookIcon sx={{ marginRight: 0.5, fontSize: 32, color: '#CCFF00' }} />
          <Typography variant='h6' fontWeight='bold' color='#CCFF00'>
            Journaly
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        {/* Makes profile only visible when the user is logged in */}
        {token && (
          <>
            <IconButton
              sx={{
                borderRadius: '50%',
                border: '1px solid gray',
                marginRight: 1,
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
              color='inherit'
              onClick={handleProfileClick}
            >
              <PersonIcon sx={{ color: '#272757' }} />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
