import React from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Stack
      marginLeft="100px"
      direction="row"
      gap="40px"
      fontFamily="Italic"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#2e2e2e', borderBottom: '3px solid #2e2e2e' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#2e2e2e' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;