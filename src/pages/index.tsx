import { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import PageWrapper from '@components/PageWrapper';
import PageHead from '@components/PageHead';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@utility/validations/loginValidation';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Link from 'next/link';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import firebase from '@services/firebase/firebaseClient';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import ControlledInput from '@components/ControlledInput';
import { getUserDataMe, postUserAuth } from '@services/strapi';
import { useAuth } from '@contexts/userContext';

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setAllUserData } = useAuth();

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
      setLoadingSubmit(true);

      // Loga no firebase
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Buscar jwt no strapi
      const {
        data: { jwt: token_jwt }
      } = await postUserAuth(email, password);
      // seta cookies do token strapi
      nookies.set(null, 'token_strapi', token_jwt);
      const userData = await getUserDataMe(token_jwt);
      setAllUserData(userData);

      reset();
      router.push('/paginaAutenticada');
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
              <ControlledInput
                name="email"
                variant="outlined"
                control={control}
                hasLeftElement
                LeftElementComponent={<AlternateEmailIcon fontSize="small" />}
                error={!!errors.email}
                errorMessage={errors.email?.message}
                placeholder="E-mail"
                type="email"
                noValidate
              />
              <ControlledInput
                name="password"
                variant="outlined"
                control={control}
                hasLeftElement
                LeftElementComponent={
                  <EnhancedEncryptionIcon fontSize="small" />
                }
                hasRightElement
                RightElementComponent={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                }
                error={!!errors.password}
                errorMessage={errors.password?.message}
                placeholder="Senha"
                type={showPassword ? 'text' : 'password'}
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = cookies.token;

    if (token) {
      throw new Error('Usuário já autenticado');
    }

    return {
      props: {}
    };
  } catch (err) {
    // Está logado
    console.warn('err.message', err.message);
    return {
      redirect: {
        permanent: false,
        destination: '/paginaAutenticada'
      },
      props: {}
    };
  }
};

const LoginPageContent = styled(Box)({
  width: '100%',
  height: '100vh',
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
  },
  '.MuiTextField-root': {
    width: '100%',
    input: {
      padding: '12px 0px',
      fontSize: '18px'
    }
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
