import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { headerOptions } from '../headerUtils';
import Link from 'next/link';
import { List, ListItemButton, SvgIcon } from '@mui/material';

interface SandwichMenuProps {
  openSandwidhMenu: boolean;
  setOpenSandwidhMenu: (newValue: boolean) => void;
}

const SandwichMenu = ({
  openSandwidhMenu,
  setOpenSandwidhMenu
}: SandwichMenuProps) => {
  const onToggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenSandwidhMenu(open);
    };

  const renderItems = () => (
    <Box
      sx={{ width: 250, pt: 3 }}
      role="presentation"
      onClick={onToggleDrawer(false)}
      onKeyDown={onToggleDrawer(false)}
    >
      <List
        sx={{
          'li + li': {
            mt: 2
          }
        }}
      >
        {headerOptions.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.urlLink}>
              <ListItemButton>
                <ListItemIcon>
                  <SvgIcon component={item.icon} fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    ' > span': {
                      fontSize: '18px'
                    }
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={openSandwidhMenu}
      onClose={() => setOpenSandwidhMenu(false)}
    >
      {renderItems()}
    </Drawer>
  );
};

export default SandwichMenu;
