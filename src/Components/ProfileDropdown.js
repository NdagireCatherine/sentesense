import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Person from '@mui/icons-material/Person';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';

const profileData = [
  { label: 'View Profile', href: '#profile' },
  { label: 'Edit Profile', href: '#edit-profile' },
  { label: 'Log Out', action: () => alert('Logging out...') },
];

const otherData = [
  { icon: <Home />, label: 'Project Overview', href: '#overview' },
  { icon: <Settings />, label: 'Settings', href: '#settings' },
];

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function ProfileDropdown() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        left: 10,
        display: 'flex',
      }}
    >
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={2} sx={{ width: 256 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar
              src={avatar}
              alt="User Avatar"
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              style={{ display: 'none' }}
              id="avatar-upload"
            />
            <label htmlFor="avatar-upload">
              <Tooltip title="Upload Avatar">
                <IconButton component="span" color="primary">
                  <Person />
                </IconButton>
              </Tooltip>
            </label>
          </Box>
          <FireNav component="nav" disablePadding>
            <ListItemButton
              onClick={() => setProfileOpen(!profileOpen)}
              sx={{ height: 56 }}
            >
              <ListItemIcon>
                <Person color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Profile"
                primaryTypographyProps={{
                  color: 'primary',
                  fontWeight: 'medium',
                  variant: 'body2',
                }}
              />
              <KeyboardArrowDown
                sx={{
                  transform: profileOpen ? 'rotate(-180deg)' : 'rotate(0)',
                  transition: '0.3s',
                }}
              />
            </ListItemButton>
            {profileOpen &&
              profileData.map((item) => (
                <ListItemButton
                  key={item.label}
                  component="a"
                  href={item.href || '#'}
                  onClick={item.action || null}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 'medium',
                    }}
                  />
                </ListItemButton>
              ))}
            <Divider />

            {otherData.map((item) => (
              <ListItemButton key={item.label} component="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
            ))}
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}n