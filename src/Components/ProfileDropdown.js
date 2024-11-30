import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Avatar,
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PieChartIcon from '@mui/icons-material/PieChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const AnimatedFireNav = styled(List)(({ theme }) => ({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
  '& .MuiListItemButton-root:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'scale(1.05)',
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 24,
    color: theme.palette.primary.main,
  },
}));

export default function ProfileDropdown() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result); // Set the avatar image as base64 data
      };
      reader.readAsDataURL(file);
    }
  };

  const menuItems = [
    { icon: <HomeIcon />, label: 'Home', link: '/Dashboard' },
    { icon: <AccountBalanceWalletIcon />, label: 'Income', link: '/Income' },
    { icon: <AttachMoneyIcon />, label: 'Expenses', link: '/Expenses' },
    { icon: <PieChartIcon />, label: 'Budgeting', link: '/Budgeting' },
    { icon: <AssessmentIcon />, label: 'Report', link: '/Reports' },
  ];

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        left: 10,
        display: 'flex',
        zIndex: 10,
      }}
    >
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: 'dark',
            primary: { main: '#66A2F6' },
            background: { paper: '#051E34' },
          },
        })}
      >
        <Paper elevation={2} sx={{ width: 256, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar
              src={avatar || '/default-avatar.png'} // Default avatar fallback
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
                  <PersonIcon />
                </IconButton>
              </Tooltip>
            </label>
          </Box>

          <AnimatedFireNav component="nav" disablePadding>
            <ListItemButton
              onClick={() => setProfileOpen(!profileOpen)}
              sx={{
                height: 56,
                backgroundColor: profileOpen ? '#123456' : 'transparent',
                transition: 'background-color 0.3s ease',
              }}
            >
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Menu"
                primaryTypographyProps={{
                  color: 'primary',
                  fontWeight: 'medium',
                  variant: 'body1',
                }}
              />
              <KeyboardArrowDown
                sx={{
                  transform: profileOpen ? 'rotate(-180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </ListItemButton>

            {profileOpen && (
              <>
                <Divider />
                {menuItems.map((item) => (
                  <ListItemButton
                    key={item.label}
                    component={Link}
                    to={item.link}
                  >
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
              </>
            )}
          </AnimatedFireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
