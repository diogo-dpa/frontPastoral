import React, {HTMLProps, SelectHTMLAttributes } from "react"
import { Controller } from 'react-hook-form'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  OutlinedTextFieldProps
} from '@mui/material'

type ControlledSelectCustomProps = {
  name: string;
  control: any;
  values: string[];
  error?: boolean;
  errorMessage?: string;
  bg?: string;
  maxWidth?: number | string;
} & HTMLProps<HTMLSelectElement>
  & OutlinedTextFieldProps;

type ControlledSelectProps = ControlledSelectCustomProps &
  SelectHTMLAttributes<HTMLSelectElement>;

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  name,
  label,
  control,
  error,
  errorMessage,
  values,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={name}
            label={label}
            error={error}
            {...field}
          >
            {values.map((value) => (
              <MenuItem value={value} key={value}>{value}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{errorMessage}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

export default ControlledSelect
