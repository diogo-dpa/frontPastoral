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
import {
  ForwardRefRenderFunction,
  HTMLProps,
  ReactElement,
  forwardRef
} from 'react';

type SelectInputOptions = {
  label: string;
  value: string;
};

type CommonInputProps = {
  hasLeftElement?: boolean;
  LeftElementComponent?: ReactElement;
  hasRightElement?: boolean;
  RightElementComponent?: ReactElement;
  error?: boolean;
  errorMessage?: string;
  isSelectInput?: boolean;
  selectInputPlaceholder?: string;
  selectInputOptions?: SelectInputOptions[];
  maxWidth?: number | string;
} & HTMLProps<HTMLInputElement> &
  HTMLProps<HTMLSelectElement> &
  SelectProps &
  TextFieldProps;

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement & HTMLSelectElement,
  CommonInputProps
> = (
  {
    hasLeftElement,
    LeftElementComponent: IconLeftElement,
    hasRightElement,
    RightElementComponent,
    error,
    errorMessage,
    isSelectInput = false,
    selectInputPlaceholder = 'Selecione',
    selectInputOptions,
    maxWidth = '100%',
    ...rest
  }: CommonInputProps,
  ref
) => {
  if (isSelectInput) {
    return (
      <FormControl
        sx={{
          maxWidth
        }}
      >
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          {...rest}
          sx={{
            width: ['300px', '350px'],
            cursor: 'pointer'
          }}
          placeholder={selectInputPlaceholder}
          ref={ref}
        >
          {selectInputOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
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
    );
  }

  return (
    <TextField
      error={error}
      helperText={errorMessage}
      sx={{
        maxWidth
      }}
      {...rest}
      InputProps={{
        startAdornment: hasLeftElement && (
          <InputAdornment position="start">{IconLeftElement}</InputAdornment>
        ),
        endAdornment: hasRightElement && (
          <InputAdornment position="end">
            {RightElementComponent}
          </InputAdornment>
        )
      }}
    />
  );
};

export const CommonInput = forwardRef(InputBase);
