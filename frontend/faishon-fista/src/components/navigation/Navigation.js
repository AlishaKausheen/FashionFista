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
import { useNavigate } from 'react-router-dom';
import Fashion from './FashionFista.png';
import ThemeChanger from '../theme/ThemeChanger';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import styled, { ThemeProvider } from 'styled-components';

const themes = {
  light: {
    background: '#fff',
    color: '#000'
  },
  dark: {
    background: '#222',
    color: '#fff'
  },
  red: {
    background: '#FF0000',
    color: '#000'
  },
  orange: {
    background: '#FF4500',
    color: '#000'
  },
  pink: {
    background: '#FF69B4',
    color: '#fff'
  },
  purple: {
    background: '#8A2BE2',
    color: '#000'
  },
  voilet: {
    background: '#4B0082',
    color: '#000'
  },
  blue: {
    background: '#0000FF',
    color: '#000'
  },
  greenblue: {
    background: '#00CED1',
    color: '#000'
  },
  greenishblue: {
    background: '#00FFFF',
    color: '#000'
  },
  skyblue: {
    background: '#00BFFF',
    color: '#000'
  },
  darkblue: {
    background: '#000080',
    color: '#000'
  },
  lightgreen: {
    background: '#00FF00',
    color: '#fff'
  },
  green: {
    background: '#ADFF2F',
    color: '#000'
  },
  yellow: {
    background: '#FFFF00',
    color: '#000'
  },
  darkyellow: {
    background: '#FFD700',
    color: '#000'
  },
  yellowishOrange: {
    background: '#FFA500',
    color: '#fff'
  },
  custom: {}
};

const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.theme.background} !important;
  color: ${props => props.theme.color} !important;
`;

const StyledButton = styled(Button)`
  color: ${props => props.theme.color} !important;
`;

const Navigation = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(themes.light);  // Set the primary theme to light
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

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="sticky" variant="elevation" className="p-3">
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
              <StyledButton
                onClick={() => navigate('/men')}
                sx={{ my: 2, display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
              >
                MEN
              </StyledButton>
              <StyledButton
                onClick={() => navigate('/women')}
                sx={{ my: 2, display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
              >
                WOMEN
              </StyledButton>
              <StyledButton
                onClick={() => navigate('/kids')}
                sx={{ my: 2, display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
              >
                KIDS
              </StyledButton>
              <StyledButton
                onClick={() => navigate('/homeandliving')}
                sx={{ my: 2, display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
              >
                HOME & LIVING
              </StyledButton>
              <StyledButton
                onClick={() => navigate('/beauty')}
                sx={{ my: 2, display: 'block', fontSize: '35px', paddingLeft: '20px', paddingRight: '20px' }}
              >
                BEAUTY
              </StyledButton>
              <StyledButton
                onClick={() => navigate('/studio')}
                sx={{ my: 2, display: 'block', fontSize: '35px', paddingLeft: '15px', paddingRight: '20px' }}
              >
                STUDIO
              </StyledButton>
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

              <div style={{ display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}>
                <ThemeChanger setTheme={setTheme} />
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
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default Navigation;
