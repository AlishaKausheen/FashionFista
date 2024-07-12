import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const ChangeThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Brightness4Icon />}
      onClick={toggleTheme}
    >
      Change Theme
    </Button>
  );
};

export default ChangeThemeButton;
