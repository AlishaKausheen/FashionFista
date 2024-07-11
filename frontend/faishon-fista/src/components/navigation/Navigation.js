import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from 'react-router-dom';
import Kids from '../kids/KidsBody';
import Fashion from './FashionFista.png'
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigation = (props) => {
  // const [menNav, setmenNav] = useState(false)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" variant='elevation' color='inherit' className='p-3'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
      variant="h5"
      noWrap
      component="div"
      sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
      onClick={() => navigate('/')}
    >
      <img
        height="120px"
        width = "300px"
        src={Fashion}
        alt="Fashion"
      />
    </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img
            height="120px"
            width = "300px"
            src={Fashion}
            alt="Fashion"
          />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              onClick={() => { props.history.push('/men.js') }}
              sx={{ my: 2, color: 'black', marginLeft: '30px', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
            MEN
            </Button>

            <Button
              onClick={() => { props.history.push('/women') }}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              WOMEN
            </Button>
            <Button
              onClick={() => { this.props.history.push({Kids}) }}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              KIDS
            </Button>
            <Button
              onClick={() => { props.history.push('/homeandliving') }}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              HOME & LIVING
            </Button>

            <Button
              onClick={() => { props.history.push('/kids') }}

              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              BEAUTY
            </Button>

            <Button
              onClick={() => { props.history.push('/kids') }}

              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              STUDIO
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }} className='d-fixed'>
            <TextField style={{ marginTop: '10px' }} id="outlined-basic" label="Search" size='small' variant="outlined" />
            {/* <div className='d-inline-block '>       */}
            <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '20px' }}
              onClick={() => { props.history.push('/login') }}>
              <PermIdentityIcon className='m-auto'
                style={{ marginLeft: '30px', fontSize: '30px' }} />
              <p >Profile</p>
            </div>

            <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '20px' }}
              onClick={() => { props.history.push('/wishlist') }}>
              <FavoriteBorderOutlinedIcon className='m-auto' style={{ marginLeft: '30px', fontSize: '30px' }} />
              <p >Wishlist</p>
            </div>

            <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '20px' }}>
              <LocalMallOutlinedIcon className='m-auto' style={{ marginLeft: '30px', fontSize: '30px' }} />
              <p >Bag</p>
            </div>
            {/* </div> */}


            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default Navigation;