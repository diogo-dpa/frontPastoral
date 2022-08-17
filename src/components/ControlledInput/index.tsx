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
  maxWidth?: number | string;
  isSelectInput?: boolean;
  selectLabel?: string;
  selectInputOptions?: SelectInputOptions[];
  textarea?: boolean;
  helperText?: string;
  css?: any;
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
  maxWidth = '100%',
  textarea = false,
  required = false,
  isSelectInput = false,
  selectLabel = 'Selecione',
  selectInputOptions = [],
  css = {},
  maxLength,
  helperText,
  ...rest
}: ControlledInputProps) => {
  if (isSelectInput) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl
            sx={{
              width: 1,
              maxWidth,
              fontSize: '18px',
              ...css
            }}
          >
            <InputLabel
              sx={{
                fontSize: '18px'
              }}
            >
              {selectLabel}
            </InputLabel>
            <Select
              {...rest}
              {...field}
              sx={{
                cursor: 'pointer',
                '& input::placeholder, & input': {
                  fontSize: '18px'
                },
                '& .MuiSelect-select': {
                  bgcolor: required ? '#ffef3975' : '',
                  borderBottom: error ? '2px solid red' : ''
                }
              }}
              required={required}
              ref={field.ref}
            >
              {selectInputOptions.map(option => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    fontSize: '16px'
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
          helperText={errorMessage ?? helperText}
          {...field}
          {...rest}
          sx={{
            ...css,
            maxWidth,
            width: '100%',
            '& input::placeholder, & textarea::placeholder': {
              color: '#333',
              opacity: 0.7
            },
            '& input, & textarea': {
              fontSize: '18px',
              bgcolor: required ? '#ffef3975' : '',
              pt: '16px'
            }
          }}
          required={required}
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
          inputProps={{
            maxLength
          }}
        />
      )}
    />
  );
};

export default ControlledInput;
