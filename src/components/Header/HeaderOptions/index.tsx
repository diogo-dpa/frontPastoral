import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { OptionsType } from '../headerUtils';

interface HeaderOptionsProps {
  options: OptionsType[];
}

const HeaderOptions = ({ options }: HeaderOptionsProps) => {
  return (
    <>
      {options.map(item => (
        <Typography
          component="span"
          sx={{
            fontSize: '14px',
            textTransform: 'uppercase',
            a: {
              textDecoration: 'none',
              color: 'text.secondary',
              transition: 'color 0.2s',
              '&:hover': {
                fontWeight: 'bold',
                color: 'text.primary'
              }
            },
            display: ['none', 'block']
          }}
        >
          <Link href={item.urlLink}>{item.label}</Link>
        </Typography>
      ))}
    </>
  );
};

export default HeaderOptions;
