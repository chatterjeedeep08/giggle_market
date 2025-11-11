import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function TopBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{ color: 'white', backgroundColor: '#87CEEB', fontFamily: 'LazyDog, monospace' }}>
          <Grid container spacing={2} sx={{ borderColor: 'red', borderWidth: 2, borderStyle: 'solid' }}>
            <Grid size={{ xs: 6, md: 3 }}>
              {/* LOGO */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', mr: 1, borderColor: 'red', borderWidth: 2, borderStyle: 'solid' }}>
                <img src="/test.png" alt="Smile Logo" style={{ height: 64 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 7 }} sx={{ borderColor: 'red', borderWidth: 2, borderStyle: 'solid' }}>
            {/* SEARCH BAR */}
            <Search sx={{ borderColor: 'red', borderWidth: 2, borderStyle: 'solid', marginTop: 1 }}>
              <SearchIconWrapper>
                <SearchIcon sx={{color:'black'}}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: '100%' , color: 'black'}}
              />
            </Search>
            </Grid>
            <Grid size={{ xs: 6, md: 2 }} sx={{ borderColor: 'red', borderWidth: 2, borderStyle: 'solid', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* USER PROFILE */}
              <Box sx={{ flexGrow: 0 , borderColor: 'red', borderWidth: 2, borderStyle: 'solid' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
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
                      <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
            {/* CATEGORIES BAR */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, borderColor: 'red', borderWidth: 2, borderStyle: 'solid', alignItems: 'center', justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', borderColor: 'red', borderWidth: 2, borderStyle: 'solid', alignSelf: 'center', alignContent: 'center' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            
          </Grid>
    </AppBar>
  );
}
export default TopBar;
