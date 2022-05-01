import { Controller, useForm } from 'react-hook-form';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import PageHead from '@components/PageHead';
import PageWrapper from '@components/PageWrapper';
// import firebaseClient from '@services/firebase/firebaseClient';
// import nookies from 'nookies';
// import { schema } from '@utility/validations/passwordRecoverValidation';
import { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import { toast } from 'react-toastify';
import { schema } from '@utility/validations/passwordRecoveryValidation';
import ControlledInput from '@components/ControlledInput';

interface RecoverPasswordFormProps {
  email: string;
}

export default function EsqueciMinhaSenha() {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailToRecover, setEmailToRecover] = useState('');
  const { control, handleSubmit, formState, reset } =
    useForm<RecoverPasswordFormProps>({
      defaultValues: {
        email: ''
      },
      resolver: yupResolver(schema)
    });
  const { errors } = formState;

  const handleSubmitForm = async ({ email }: RecoverPasswordFormProps) => {
    console.log('email', email);
    try {
      setLoadingSubmit(true);
      // await firebaseClient.auth().sendPasswordResetEmail(email);
      setEmailSent(true);
      setEmailToRecover(email);
      reset();
    } catch (err) {
      toast.error('Houve uma falha no processo. Tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true
      });
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <PageWrapper>
      <>
        <PageHead title="Esqueci minha senha | MAVE Assistência" />
        <ForgotPasswordPageContent>
          <ForgotPasswordBox>
            <Typography
              variant="h1"
              color="black"
              fontSize="32px"
              textAlign="center"
            >
              Esqueci minha senha
            </Typography>
            <FormContent as="form" onSubmit={handleSubmit(handleSubmitForm)}>
              {emailSent ? (
                <DescriptionText>
                  E-mail de recuperação de senha enviado! Confira a caixa de
                  entrada do email
                  <EmailSentText>{emailToRecover}.</EmailSentText>
                </DescriptionText>
              ) : (
                <>
                  <InputContent>
                    <DescriptionText>
                      Informe o e-mail cadastrado para que a senha seja
                      resetada.
                    </DescriptionText>
                    <ControlledInput
                      name="email"
                      variant="outlined"
                      control={control}
                      hasLeftElement
                      LeftElementComponent={
                        <AlternateEmailIcon fontSize="small" />
                      }
                      error={!!errors.email}
                      errorMessage={errors.email?.message}
                      placeholder="E-mail"
                      type="email"
                      noValidate
                    />
                  </InputContent>

                  <ButtonContent type="submit">
                    {loadingSubmit ? (
                      <CircularProgress size="20px" />
                    ) : (
                      'Enviar'
                    )}
                  </ButtonContent>
                </>
              )}
              <LoginText>
                <Link href="/">Ir para Login</Link>
              </LoginText>
            </FormContent>
          </ForgotPasswordBox>
        </ForgotPasswordPageContent>
      </>
    </PageWrapper>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    // const cookies = nookies.get(ctx);
    // const token = cookies.token;

    // if (token) {
    //   throw new Error('Usuário já autenticado');
    // }

    return {
      props: {}
    };
  } catch (err) {
    // Está logado
    return {
      redirect: {
        permanent: false,
        destination: '/paginaAutenticada'
      },
      props: {}
    };
  }
};

const ForgotPasswordPageContent = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'cyan'
});

const ForgotPasswordBox = styled(Box)({
  width: '320px',
  maxWidth: '90%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '16px'
});

const FormContent = styled(Box)({
  marginTop: '32px',
  color: '#bbb',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const DescriptionText = styled(Typography)({
  textAlign: 'center',
  fontSize: '14px',
  cursor: 'pointer',
  color: '#3a3939',
  marginBottom: '16px'
});

const EmailSentText = styled(Typography)({
  fontWeight: '600',
  fontSize: '14px'
});

const InputContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '16px',
  '.MuiTextField-root': {
    width: '100%',
    input: {
      padding: '12px 0px',
      fontSize: '18px'
    }
  }
});

const ButtonContent = styled(Button)({
  width: '90%',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'green',
  transition: 'background 0.4s',
  '&:hover': {
    backgroundColor: 'red'
  }
});

const LoginText = styled(Typography)({
  textAlign: 'center',
  fontSize: '14px',
  cursor: 'pointer',
  marginTop: '16px',
  '& a': {
    color: '#aaa',
    textDecoration: 'none',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#ccc'
    }
  }
});
