export type InputType = {
  name: string;
  error: string;
  errorMessage: string;
  placeholder: string;
  selectOptions?: SelectInputOptions[] | null;
  selectLabel?: string | null;
  textarea?: boolean;
  isRequired?: boolean;
  maxLength?: number;
  regexMask?: string;
  helperText?: string;
};

export type InputFormType = {
  section: InputType[];
};

export type SelectInputOptions = {
  label: string;
  value: string;
};
