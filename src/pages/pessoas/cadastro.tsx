import ControlledInput from '@components/ControlledInput';
import Modal from '@components/Modal';
import PageHead from '@components/PageHead';
import PageWrapper from '@components/PageWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { PersonData } from '@utility/person/interfaces';
import { personInputsFields } from '@utility/person/utils';
import { newPersonFormSchema } from '@utility/validations/registerPersonValidation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CadastroPessoas = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [personDataForm, setPersonDataForm] = useState<PersonData | null>(null);

  const { control, handleSubmit, formState, reset } = useForm<PersonData>({
    defaultValues: {
      name: '',
      birthDate: '',
      cpf: '',
      rg: '',
      mothersName: '',
      civilSituation: '',
      gender: '',
      genderCategory: '',
      race: '',
      childrenQuantity: '',
      nationality: '',
      birthCity: '',
      telephone: '',
      ctps: '',
      hasHealthProblem: '',
      isCareSituation: '',
      healthDescription: '',
      referenceServices: '',
      schoolLevel: '',
      skills: '',
      observations: '',
      ocupation: '',
      ocupationDetails: ''
    },
    resolver: yupResolver(newPersonFormSchema)
  });

  const { errors } = formState;

  const handleSubmitForm = async () => {
    try {
      setOpenModal(false);
      setLoadingSubmit(true);

      console.log('data', personDataForm);

      toast.success('Cadastrado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true
      });
      reset();
    } catch (err) {
      toast.error('Falha no cadastro. Tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true
      });
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleOpenModal = (data: PersonData) => {
    setPersonDataForm(data);
    setOpenModal(true);
  };

  return (
    <PageWrapper authenticatedPage>
      <>
        <PageHead title="Cadastro de Pessoas | Pastoral" />
        <Box
          component="form"
          sx={{
            maxWidth: '800px',
            width: '100%',
            bgcolor: '#ffffff',
            marginTop: '56px',
            padding: '40px 24px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
          onSubmit={handleSubmit(handleOpenModal)}
        >
          <Typography
            sx={{
              width: '100%',
              fontSize: '26px',
              fontWeight: '600',
              color: '#444',
              textTransform: 'uppercase',
              textAlign: 'center',
              mb: '48px'
            }}
          >
            Cadastro de pessoa
          </Typography>
          {personInputsFields.map(section => (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                '& + &': {
                  mt: '24px'
                },
                justifyContent: 'space-evenly'
              }}
            >
              {section.section.map(inputField => (
                <ControlledInput
                  name={inputField.name}
                  variant="filled"
                  control={control}
                  error={!!errors[inputField.error]}
                  errorMessage={errors[inputField.error]?.message}
                  placeholder={inputField.placeholder}
                  isSelectInput={!!inputField.selectOptions}
                  selectInputOptions={inputField.selectOptions ?? []}
                  selectLabel={inputField?.selectLabel ?? ''}
                  textarea={inputField.textarea ?? false}
                  maxWidth={`${100 / section.section.length - 5}%`}
                  noValidate
                />
              ))}
            </Box>
          ))}

          <Button
            type="submit"
            sx={{
              m: '48px auto 0px auto',
              p: '12px 32px',
              width: '90%',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              bgcolor: 'green',
              color: '#fff',
              transition: 'bgcolor 0.2',
              '&:hover': {
                bgcolor: '#0c5017'
              }
            }}
          >
            {loadingSubmit ? <CircularProgress size="20px" /> : 'Cadastrar'}
          </Button>
        </Box>
        <Modal
          title="Deseja confirmar o cadastro?"
          open={openModal}
          handleClose={() => setOpenModal(false)}
          onSuccess={() => handleSubmitForm()}
        />
      </>
    </PageWrapper>
  );
};

export default CadastroPessoas;
