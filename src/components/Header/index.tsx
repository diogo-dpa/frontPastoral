import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { headerOptions } from './headerUtils';
import { useAuth } from '@contexts/userContext';
import SuspenseMenu from './SuspenseMenu';
import { Button } from '@mui/material';
import SandwichMenu from './SandwichMenu';
import AvatarButton from './AvatarButton';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSandwichMenu, setOpenSandwichMenu] = useState(false);
  const open = Boolean(anchorEl);

  const { SignOut, allUserData } = useAuth();
  const handleSignOut = () => {
    SignOut();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleManipulateSandwichMenu = () => {
    setOpenSandwichMenu(!openSandwichMenu);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        p: '24px 32px',
        bgcolor: 'secondary.main'
      }}
    >
      <Button
        onClick={() => handleManipulateSandwichMenu()}
        sx={{
          display: ['block', 'none']
        }}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          m: '0 auto',
          'span + span': {
            ml: '16px'
          }
        }}
      >
        <HeaderOptions options={headerOptions} />
        <AvatarButton
          username={allUserData?.username}
          handleClick={handleClick}
        />
      </Box>
      <SuspenseMenu
        anchor={anchorEl}
        handleClose={handleClose}
        handleSignOut={handleSignOut}
        open={open}
      />
      <SandwichMenu
        openSandwidhMenu={openSandwichMenu}
        setOpenSandwidhMenu={setOpenSandwichMenu}
      />
    </Box>
  );
};

export default Header;
