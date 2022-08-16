import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  TextField,
  TextFieldProps
} from '@mui/material';
import { SelectInputOptions } from '@utility/interfaces';
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
  isSelectInput?: boolean;
  selectLabel?: string;
  selectInputOptions?: SelectInputOptions[];
  textarea?: boolean;
} & HTMLProps<HTMLInputElement> &
  HTMLProps<HTMLSelectElement> &
  SelectProps &
  TextFieldProps;

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
  textarea = false,
  isSelectInput = false,
  selectLabel = 'Selecione',
  selectInputOptions = [],
  ...rest
}) => {
  if (isSelectInput) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl
            sx={{
              maxWidth,
              width: ['300px', '350px'],
              fontSize: '18px'
            }}
          >
            <InputLabel>{selectLabel}</InputLabel>
            <Select
              {...rest}
              {...field}
              sx={{
                cursor: 'pointer',
                border: 'none',
                borderBottom: error ? '1.5px solid red' : '',
                '& input::placeholder': {
                  fontSize: '16px',
                  color: 'rgba(0, 0, 0, 0.371)'
                }
              }}
              ref={field.ref}
            >
              {selectInputOptions.map(option => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    fontSize: '18px'
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {error && (
              <FormHelperText
                sx={{
                  fontSize: '12px',
                  color: 'red'
                }}
              >
                {errorMessage}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    );
  }

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
          sx={{
            maxWidth,
            width: '100%',
            '& input::placeholder, & textarea::placeholder, & input': {
              fontSize: '18px'
            }
          }}
          multiline={textarea}
          rows={textarea ? 4 : 1}
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
