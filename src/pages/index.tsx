import { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import PageWrapper from '@components/PageWrapper';
import PageHead from '@components/PageHead';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@utility/validations/loginValidation';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Link from 'next/link';

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const { control, handleSubmit, formState, reset } = useForm<LoginFormProps>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const router = useRouter();
  const { errors } = formState;

  const handleSubmitForm = async ({ email, password }: LoginFormProps) => {
    try {
      console.log('entrou');
      setLoadingSubmit(true);
      // await firebaseClient.auth().signInWithEmailAndPassword(email, password);
      reset();
      router.push('/proximaPagina');
    } catch (err) {
      toast.error('Falha no login. Tente novamente.', {
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
        <PageHead title="Login | Pastoral" />
        <LoginPageContent>
          <LoginBox>
            <Typography variant="h1" color="black">
              Login
            </Typography>

            <InputBox as="form" onSubmit={handleSubmit(handleSubmitForm)}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...field}
                    type="email"
                    placeholder="E-mail"
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    error={!!errors.password}
                    helperText={errors.password?.message ?? ''}
                    {...field}
                    type={'password'}
                    placeholder="Senha"
                  />
                )}
              />
              <CustomButtom variant="contained" type="submit">
                {loadingSubmit ? <CircularProgress size="20px" /> : 'Entrar'}
              </CustomButtom>
            </InputBox>

            <ForgotPasswordText>
              <Link href="/esqueciminhasenha">Esqueci minha senha</Link>
            </ForgotPasswordText>

            <Typography
              variant="subtitle1"
              fontSize="14px"
              fontFamily="sans-serif"
              color="#aaa"
              textAlign="center"
            >
              Para novos cadastros, solicite à equipe de manutenção do sistema.
            </Typography>
          </LoginBox>
        </LoginPageContent>
      </>
    </PageWrapper>
  );
};

const LoginPageContent = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'cyan'
});

const LoginBox = styled(Box)({
  width: '320px',
  maxWidth: '90%',
  borderRadius: '10px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',
  backgroundColor: 'white',
  '.MuiTypography-root': {
    marginBottom: '16px'
  }
});

const InputBox = styled(Box)({
  width: '90%',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  '.MuiButton-root': {
    marginTop: '16px'
  }
});

const ForgotPasswordText = styled(Typography)({
  textAlign: 'center',
  fontSize: '14px',
  cursor: 'pointer',
  '& a': {
    color: '#aaa',
    textDecoration: 'none',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#ccc'
    }
  }
});

const CustomButtom = styled(Button)({
  width: '90%',
  background: 'green',
  transition: 'background 0.4s',
  '&:hover': {
    background: 'red'
  }
});

export default LoginPage;
