import { Logout } from '@mui/icons-material';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import React from 'react';

interface SuspenseMenuProps {
  anchor: null | HTMLElement;
  handleClose: () => void;
  open: boolean;
  handleSignOut: () => void;
}

const SuspenseMenu = ({
  anchor,
  handleClose,
  handleSignOut,
  open
}: SuspenseMenuProps) => {
  return (
    <Menu
      anchorEl={anchor}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          p: '8px',
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={() => handleSignOut()}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Deslogar
      </MenuItem>
    </Menu>
  );
};

export default SuspenseMenu;
