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
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Change Theme Icon
import VisibilityIcon from '@mui/icons-material/Visibility'; // Virtual Try-On Icon
import BrushIcon from '@mui/icons-material/Brush'; // Draw and Get Icon
import { useNavigate } from 'react-router-dom';
import Fashion from './FashionFista.png';
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
      <Container maxWidth="l">
        <Toolbar disableGutters>
        <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ mr: 6, display: { xs: 'none', md: 'flex' } }}
      onClick={() => navigate('/')}
    >
      <img
        height="200px"
        width = "300px"
        src={Fashion}
        alt="Fashion"
      />
    </Typography>
          <Typography
            variant="h6"
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

          <div container direction="column" spacing={2}>
          <div item xs={12} spacing={5} className='d-flex justify-content-center'>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
            onClick={() => navigate('/men')}
            sx={{ my: 2, color: 'black', marginLeft: '30px', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
          >
            MEN
          </Button>
          <Button
            onClick={() => navigate('/women')}
            sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
          >
            WOMEN
          </Button>
          <Button
            onClick={() => navigate('/kids')}
            sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
          >
            KIDS
          </Button>
          <Button
            onClick={() => navigate('/homeandliving')}
            sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
          >
            HOME & LIVING
          </Button>
          <Button
            onClick={() => navigate('/beauty')}
            sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
          >
            BEAUTY
          </Button>
          <Button
            onClick={() => navigate('/studio')}
            sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
          >
            STUDIO
          </Button>
        </Box>
      </div>
      <div item xs={12}>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
      <input type="text" style={{ marginTop: '20px' }} className="form-control" id="exampleFormControlInput1" placeholder="Search" />
          
      <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/changetheme')}>
            <Brightness4Icon style={{ fontSize: '40px' }} />
            <p>Theme</p>
          </div>
          <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/virtualtryon')}>
            <VisibilityIcon style={{ fontSize: '40px' }} />
            <p>TryOn</p>
          </div>
          <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/drawandget')}>
            <BrushIcon style={{ fontSize: '40px' }} />
            <p>Draw</p>
          </div>
        <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/login')}>
            <PermIdentityIcon style={{ fontSize: '40px' }} />
            <p>Profile</p>
          </div>
          <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/wishlist')}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: '40px' }} />
            <p>Wishlist</p>
          </div>
          <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}>
            <LocalMallOutlinedIcon style={{ fontSize: '40px' }} />
            <p>Bag</p>
          </div>

        </Box>
        </div>
        </div>
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default Navigation;