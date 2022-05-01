import {
  InputAdornment,
  OutlinedTextFieldProps,
  TextField
} from '@mui/material';
import React, { HTMLProps, InputHTMLAttributes, ReactElement } from 'react';
import { Controller } from 'react-hook-form';

type ControlledInputCustomProps = {
  name: string;
  control: any;
  hasLeftElement?: boolean;
  LeftElementComponent?: ReactElement;
  hasRightElement?: boolean;
  RightElementComponent?: ReactElement;
  error?: boolean;
  errorMessage?: string;
  bg?: string;
  maxWidth?: number | string;
} & HTMLProps<HTMLInputElement> &
  HTMLProps<HTMLSelectElement> &
  OutlinedTextFieldProps;

type ControlledInputProps = ControlledInputCustomProps &
  InputHTMLAttributes<HTMLInputElement>;

const ControlledInput: React.FC<ControlledInputProps> = ({
  name,
  control,
  hasLeftElement,
  LeftElementComponent: IconLeftElement,
  hasRightElement,
  RightElementComponent,
  error,
  errorMessage,
  bg = 'palette.white',
  maxWidth = '100%',
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          error={error}
          helperText={errorMessage}
          {...field}
          {...rest}
          InputProps={{
            startAdornment: hasLeftElement && (
              <InputAdornment position="start">
                {IconLeftElement}
              </InputAdornment>
            ),
            endAdornment: hasRightElement && (
              <InputAdornment position="end">
                {RightElementComponent}
              </InputAdornment>
            )
          }}
        />
      )}
    />
  );
};

export default ControlledInput;
