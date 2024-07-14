import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton, Button } from '@mui/material';
import { Brightness4 as Brightness4Icon } from '@mui/icons-material';

const themes = {
  light: {
    background: '#f0f0f0',
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
    color: '#fff'
  },
  voilet: {
    background: '#4B0082',
    color: '#fff'
  },
  blue: {
    background: '#0000FF',
    color: '#000'
  },
  greenblue: {
    background: '#00CED1',
    color: '#fff'
  },
  greenishblue: {
    background: '#00FFFF',
    color: '#fff'
  },
  skyblue: {
    background: '#00BFFF',
    color: '#fff'
  },
  darkblue: {
    background: '#000080',
    color: '#fff'
  },
  lightgreen: {
    background: '#00FF00',
    color: '#000'
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

const Container = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  transition: background-color 0.3s;
`;

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  text-align: right;
`;

const ThemeDialog = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  padding: 20px;
  background-color: #111;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ThemeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Color = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #000;
  background-color: ${props => props.color};
`;

const CustomThemeInputs = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
`;

const ThemeChanger = ({ setTheme }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [customTheme, setCustomTheme] = useState({
    background: '#ff0000',
    color: '#00ff00'
  });

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setShowDialog(false);
  };

  const handleCustomThemeApply = () => {
    setTheme(customTheme);
    setShowDialog(false);
  };

  return (
    <Container>
      <Nav>
        <IconButton color="inherit" onClick={() => setShowDialog(!showDialog)}>
          <Brightness4Icon />
        </IconButton>
      </Nav>
      <ThemeDialog show={showDialog}>
        <h3>Theme Changer</h3>
        <ThemeOptions>
          <Color color="#f0f0f0" onClick={() => handleThemeChange(themes.light)} />
          <Color color="#222" onClick={() => handleThemeChange(themes.dark)} />
          <Color color="#FF0000" onClick={() => handleThemeChange(themes.red)} />
          <Color color="#FF4500" onClick={() => handleThemeChange(themes.orange)} />
          <Color color="#FF69B4" onClick={() => handleThemeChange(themes.pink)} />
          <Color color="#8A2BE2" onClick={() => handleThemeChange(themes.purple)} />
          <Color color="#4B0082" onClick={() => handleThemeChange(themes.voilet)} />
          <Color color="#0000FF" onClick={() => handleThemeChange(themes.blue)} />
          <Color color="#00CED1" onClick={() => handleThemeChange(themes.greenblue)} />
          <Color color="#00FFFF" onClick={() => handleThemeChange(themes.greenishblue)} />
          <Color color="#00BFFF" onClick={() => handleThemeChange(themes.skyblue)} />
          <Color color="#000080" onClick={() => handleThemeChange(themes.darkblue)} />
          <Color color="#00FF00" onClick={() => handleThemeChange(themes.lightgreen)} />
          <Color color="#ADFF2F" onClick={() => handleThemeChange(themes.green)} />
          <Color color="#FFFF00" onClick={() => handleThemeChange(themes.yellow)} />
          <Color color="#FFD700" onClick={() => handleThemeChange(themes.darkyellow)} />
          <Color color="#FFA500" onClick={() => handleThemeChange(themes.yellowishOrange)} />
          <Button onClick={() => handleThemeChange(themes.custom)}>Custom</Button>
          <Button onClick={() => setShowDialog(false)}>Cancel</Button>
        </ThemeOptions>
        <CustomThemeInputs show={setTheme === themes.custom}>
          <label>
            Primary Color:
            <input type="color" value={customTheme.background} onChange={(e) => setCustomTheme({ ...customTheme, background: e.target.value })} />
          </label>
          <label>
            Secondary Color:
            <input type="color" value={customTheme.color} onChange={(e) => setCustomTheme({ ...customTheme, color: e.target.value })} />
          </label>
          <Button onClick={handleCustomThemeApply}>Apply Custom Theme</Button>
        </CustomThemeInputs>
      </ThemeDialog>
    </Container>
  );
};

export default ThemeChanger;
