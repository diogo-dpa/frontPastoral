import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { DialogTitleProps, ModalProps } from './interfaces';
import { Box } from '@mui/system';

const StyledModal = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    margin: '0px',
    width: '90%'
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    maxWidth: '500px',
    width: '100%'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const ModalHeaderBox = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      <Typography fontSize="20px" fontWeight="bold">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function Modal({
  open,
  title,
  handleClose,
  content = null,
  onSuccess = null,
  onSuccessTextButton = 'Confirmar'
}: ModalProps) {
  return (
    <div>
      <StyledModal
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <ModalHeaderBox id="customized-dialog-title" onClose={handleClose}>
          {title}
        </ModalHeaderBox>
        {content && <DialogContent dividers>{content}</DialogContent>}
        <DialogActions>
          {onSuccess && (
            <Box
              sx={{
                width: '100%',
                m: '0 auto',
                display: 'flex',
                justifyContent: 'space-evenly'
              }}
            >
              <Button
                autoFocus
                onClick={handleClose}
                sx={{
                  width: '150px',
                  bgcolor: '#dd2b1f',
                  p: '8px 16px',
                  textTransform: 'uppercase',
                  transition: 'bgcolor color 0.2s',
                  '&:hover': {
                    bgcolor: '#9e2219',
                    color: '#fff'
                  }
                }}
              >
                Cancelar
              </Button>

              <Button
                autoFocus
                onClick={onSuccess}
                sx={{
                  width: '150px',
                  bgcolor: '#2389dc',
                  p: '8px 16px',
                  textTransform: 'uppercase',
                  transition: 'bgcolor color 0.2s',
                  '&:hover': {
                    bgcolor: '#1462a2',
                    color: '#fff'
                  }
                }}
              >
                {onSuccessTextButton}
              </Button>
            </Box>
          )}
        </DialogActions>
      </StyledModal>
    </div>
  );
}
