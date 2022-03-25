import { createTheme } from '@mui/material/styles';

import {
  palette,
  components,
  typography,
  breakpoints,
  spacing
} from './theme-config';

const theme = createTheme({
  spacing: spacing,
  palette: palette,
  typography: typography,
  components: components,
  breakpoints: breakpoints
});

export default theme;
