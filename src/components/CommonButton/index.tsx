import { Button, ButtonProps } from '@mui/material';

type CommonButtonProps = {
  text: string;
  onClickAction?: (e: any) => void;
  bgcolor?: string;
  bgcolorHover?: string;
  customCSS?: object;
} & ButtonProps;

const CommonButton = ({
  text,
  onClickAction = null,
  bgcolor = 'blue',
  bgcolorHover = 'red',
  customCSS = {},
  ...rest
}: CommonButtonProps) => {
  if (onClickAction) {
    return (
      <Button
        {...rest}
        sx={{
          ...customCSS,
          color: 'white',
          bgcolor: bgcolor,
          p: '8px 24px',
          textTransform: 'uppercase',
          '&:hover': {
            bgcolor: bgcolorHover
          }
        }}
        onClick={onClickAction}
      >
        {text}
      </Button>
    );
  }

  return (
    <Button
      {...rest}
      sx={{
        ...customCSS,
        color: 'white',
        bgcolor: bgcolor,
        p: '8px 24px',
        textTransform: 'uppercase',
        '&:hover': {
          bgcolor: bgcolorHover
        }
      }}
    >
      {text}
    </Button>
  );
};

export default CommonButton;
