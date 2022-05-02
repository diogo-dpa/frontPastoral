import { TypographyOptions } from '@mui/material/styles/createTypography';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BACKGROUND_COLOR,
  DISABLED_COLOR,
  LINK_COLOR,
  BORDER_COLOR,
  DISABLED_DISABLED_COLOR
} from './color';

import { Components } from '@mui/material/styles/components';
import { PaletteOptions } from '@mui/material';

export const FONT_FAMILY = 'Roboto';

const SPACING = 8;

export const spacing = (num: number) => (num ? num * SPACING + 'px' : '0');

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440
  }
};

export const palette: PaletteOptions = {
  primary: {
    light: PRIMARY_COLOR,
    main: PRIMARY_COLOR,
    dark: PRIMARY_COLOR
  },
  secondary: {
    light: SECONDARY_COLOR,
    main: SECONDARY_COLOR
  },
  background: {
    default: BACKGROUND_COLOR
  }
};

export const typography: TypographyOptions = {
  fontFamily: FONT_FAMILY,

  h1: {
    fontWeight: 'bold',
    fontSize: '2.25rem',
    color: PRIMARY_COLOR
  },

  h2: {
    fontWeight: 600,
    fontSize: '1.5rem',
    color: PRIMARY_COLOR
  },

  h3: {
    fontWeight: 600,
    fontSize: '1.3125rem',
    color: PRIMARY_COLOR
  },

  h4: {
    fontWeight: 500,
    fontSize: '1.125rem',
    color: PRIMARY_COLOR
  },

  h5: {
    fontWeight: 500,
    fontSize: '1rem',
    color: PRIMARY_COLOR
  },

  h6: {
    fontWeight: 500,
    fontSize: '0.875rem',
    color: PRIMARY_COLOR
  },

  body1: {
    fontWeight: 500,
    fontSize: '0.75rem',
    color: PRIMARY_COLOR
  },

  body2: {
    fontWeight: 'lighter',
    fontSize: '0.625rem',
    color: PRIMARY_COLOR
  },

  subtitle1: {
    fontWeight: 600,
    fontSize: '1rem',
    color: PRIMARY_COLOR
  },

  subtitle2: {
    fontWeight: 'normal',
    fontSize: '0.75rem',
    color: PRIMARY_COLOR
  }
};

export const components: Components = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          backgroundColor: DISABLED_DISABLED_COLOR
        },
        color: PRIMARY_COLOR,
        fontWeight: '500',
        fontSize: '1rem'
      }
    }
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontFamily: FONT_FAMILY,
        color: '#636D76',
        fontSize: '1rem',
        fontWeight: '500'
      },
      asterisk: {
        fontFamily: FONT_FAMILY,
        fontWeight: '600',
        fontSize: '1.875rem',
        color: SECONDARY_COLOR,
        '&$error': {
          color: SECONDARY_COLOR
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        display: 'flex'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: '600',
        '&.Mui-disabled': {
          backgroundColor: DISABLED_COLOR,
          color: '#ffffff'
        }
      },
      text: {
        '&.Mui-disabled': {
          backgroundColor: 'rgb(255, 255, 255, 0)',
          color: DISABLED_COLOR
        }
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        '&.spacing-1': {
          padding: '14px 8px 14px 8px'
        }
      },
      sizeSmall: {
        padding: `6px ${spacing(1)} 6px ${spacing(1)}`
      },
      head: {
        fontSize: '14px',
        color: PRIMARY_COLOR,
        fontWeight: 'normal',
        padding: `10px ${spacing(1)} 2px ${spacing(1)}`
      },
      footer: {
        borderBottom: '0px'
      },
      body: {
        fontSize: '16px',
        fontWeight: '500',
        color: PRIMARY_COLOR,
        padding: `10px ${spacing(1)} 10px ${spacing(1)}`,
        borderBottom: `1px solid ${BORDER_COLOR}`
      }
    }
  },
  MuiTablePagination: {
    styleOverrides: {
      toolbar: {
        paddingLeft: '0px',
        float: 'left'
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      contained: {
        marginLeft: '0px'
      }
    }
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        '&.Mui-disabled.Mui-checked': {
          color: PRIMARY_COLOR
        },
        '&.Mui-disabled': {
          color: DISABLED_COLOR
        }
      },
      colorSecondary: {
        '&.Mui-disabled.Mui-checked': {
          color: PRIMARY_COLOR
        },
        '&.Mui-disabled': {
          color: DISABLED_COLOR
        }
      }
    }
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          color: PRIMARY_COLOR
        }
      },
      colorSecondary: {
        '&.Mui-disabled': {
          color: PRIMARY_COLOR
        }
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        opacity: 0
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          color: SECONDARY_COLOR
        },
        fontWeight: '600',
        fontSize: '1rem'
      }
    }
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        border: 'none',
        borderBottom: `1px solid ${BORDER_COLOR}`,
        boxShadow: 'none',
        '&.Mui-expanded': {
          margin: '0px'
        },
        '&:before': {
          display: 'none'
        }
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: '0 24px',
        margin: '0px',
        minHeight: '50px',
        '&$expanded': {
          minHeight: '40px'
        },
        '&:before': {
          display: 'none'
        }
      },
      content: {
        margin: '0px',
        '&$expanded': {
          margin: '0px'
        }
      }
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: '0px'
      }
    }
  },
  MuiCollapse: {
    styleOverrides: {
      wrapper: {
        paddingBottom: '10px'
      }
    }
  },
  MuiSwitch: {
    defaultProps: { color: 'secondary' },
    styleOverrides: {
      track: {
        backgroundColor: SECONDARY_COLOR,
        opacity: '0.5'
      },
      thumb: {
        color: SECONDARY_COLOR
      }
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      '@global': {
        '.required': {
          '&::after': {
            content: "'*'",
            fontWeight: '600',
            marginTop: '-6px',
            fontSize: 30,
            color: SECONDARY_COLOR
          }
        }
      }
    }
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: LINK_COLOR,
        fontSize: '0.75rem',
        fontWeight: '600',
        fontFamily: FONT_FAMILY
      }
    }
  }
};
