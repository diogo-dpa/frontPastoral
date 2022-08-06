import { Avatar, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { formatUsernameFromUserData } from '../headerUtils';

interface AvatarButtonProps {
  username: string | null;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const AvatarButton = ({ handleClick, username }: AvatarButtonProps) => {
  return (
    <Tooltip title={username ?? ''}>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          position: 'absolute',
          right: '32px',
          display: 'flex',
          flexDirection: 'column',
          ml: 2
        }}
      >
        <Avatar sx={{ width: 40, height: 40 }}>
          {formatUsernameFromUserData(username)}
        </Avatar>
      </IconButton>
    </Tooltip>
  );
};

export default AvatarButton;
