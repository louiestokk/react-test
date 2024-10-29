import React,{useState} from 'react'
import { AppBar,Box,Toolbar,Typography,IconButton,Switch,
FormControlLabel,FormGroup,MenuItem,Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { getUserData } from '../redux/user/userSlice';

const Header = () => {
    const [auth, setAuth] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null)
    const {user} = useSelector(getUserData)
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         {user?.length>0? `${user[0].name.title}.${user[0].name.first} ${user[0].name.last}`:'Members'} 
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              {user?.length>0 ? <img alt='the user' style={{borderRadius:'50px',height:'35px',width:'35px'}} src={user?.[0].picture.thumbnail}/>:<AccountCircle />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header