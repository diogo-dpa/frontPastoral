import { Box, TextField, TextFieldProps } from '@mui/material';
import React, { InputHTMLAttributes } from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

type ControlledInputMaskProps = {
  name: string;
  control: any;
  defaultValue?: string;
  error?: boolean;
  errorMessage?: string;
  maxLength?: number;
  regexMask?: string | (string | RegExp)[];
  maxWidth?: number | string;
} & TextFieldProps;

type ControlledInputMaskCompleteProps = ControlledInputMaskProps &
  InputHTMLAttributes<HTMLInputElement>;

const ControlledInputMask: React.FC<ControlledInputMaskCompleteProps> = ({
  name,
  control,
  defaultValue = '',
  error,
  errorMessage,
  maxLength = 50,
  regexMask = '',
  maxWidth = '100%',
  ...rest
}: ControlledInputMaskCompleteProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <InputMask
          mask={regexMask}
          {...field}
          onChange={field.onChange}
          value={field.value}
        >
          {(inputProps: any) => (
            <Box
              sx={{
                maxWidth
              }}
            >
              <TextField
                error={error}
                helperText={errorMessage}
                {...inputProps}
                {...field}
                {...rest}
                max={maxLength}
                sx={{
                  width: '100%',
                  '& input::placeholder, & textarea::placeholder, & input': {
                    fontSize: '18px'
                  },
                  '& input': {
                    bgcolor: rest.required ? '#ffef3975' : '',
                    pt: '16px'
                  }
                }}
              />
            </Box>
          )}
        </InputMask>
      )}
    />
  );
};

export default ControlledInputMask;
