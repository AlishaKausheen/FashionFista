import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';
import Fashion from './FashionFista.png';
import { ThemeContext } from '../theme/ThemeContext';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigation = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const { toggleTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [file, setFile] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Redirect to results page with the file
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      navigate('/results', { state: { file } });
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" variant="elevation" color="inherit" className="p-3">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 6, display: { xs: 'none', md: 'flex' } }}
            onClick={() => navigate('/')}
          >
            <img height="200px" width="300px" src={Fashion} alt="Fashion" />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img height="120px" width="300px" src={Fashion} alt="Fashion" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Button
              onClick={() => navigate('/men')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
            >
              MEN
            </Button>
            <Button
              onClick={() => navigate('/women')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
            >
              WOMEN
            </Button>
            <Button
              onClick={() => navigate('/kids')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
            >
              KIDS
            </Button>
            <Button
              onClick={() => navigate('/homeandliving')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
            >
              HOME & LIVING
            </Button>
            <Button
              onClick={() => navigate('/beauty')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
            >
              BEAUTY
            </Button>
            <Button
              onClick={() => navigate('/studio')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '35px', paddingLeft: '15px', paddingRight: '20px' }}
            >
              STUDIO
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton color="primary" component="label">
                        <PhotoCameraIcon />
                        <input type="file" hidden onChange={handleFileChange} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{ width: 300, marginRight: 2 }}
              />
              <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>

            <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }} onClick={toggleTheme}>
              <Brightness4Icon style={{ fontSize: '40px' }} />
              <p>Theme</p>
            </div>
            <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/virtualtryon')}>
              <VisibilityIcon style={{ fontSize: '40px' }} />
              <p>TryOn</p>
            </div>
            <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/drawandget')}>
              <BrushIcon style={{ fontSize: '40px' }} />
              <p>Draw</p>
            </div>
            <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/shoppingbuddy')}>
              <GroupOutlinedIcon style={{ fontSize: '40px' }} />
              <p>Shopping Buddy</p>
            </div>
            <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/login')}>
              <PermIdentityIcon style={{ fontSize: '40px' }} />
              <p>Profile</p>
            </div>
            <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/wishlist')}>
              <FavoriteBorderOutlinedIcon style={{ fontSize: '40px' }} />
              <p>Wishlist</p>
            </div>
            <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}>
              <LocalMallOutlinedIcon style={{ fontSize: '40px' }} />
              <p>Bag</p>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;

