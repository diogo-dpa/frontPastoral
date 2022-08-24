import ControlledInput from '@components/ControlledInput';
import ControlledInputMask from '@components/ControlledMaskInput';
import Modal from '@components/Modal';
import PageHead from '@components/PageHead';
import PageWrapper from '@components/PageWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LocalApi } from '@services/api';
import { InputType } from '@utility/interfaces';
import { PersonData } from '@utility/people/interfaces';
import { personInputsFields } from '@utility/people/utils';
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
      isDisabledPerson: '',
      disabledDescription: '',
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

      await LocalApi.post('/newPerson', {
        ...personDataForm
      });

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

  const renderContent = (section: InputType[]) => {
    return section.map(inputField => {
      if (!inputField.regexMask) {
        return (
          <ControlledInput
            name={inputField.name}
            variant="filled"
            control={control}
            error={!!errors[inputField.error]}
            errorMessage={errors[inputField.error]?.message}
            placeholder={inputField.placeholder}
            isSelectInput={!!inputField.selectOptions}
            selectInputOptions={inputField.selectOptions}
            selectLabel={inputField?.selectLabel}
            textarea={inputField.textarea}
            required={inputField.isRequired}
            maxLength={inputField.maxLength}
            helperText={inputField.helperText}
            css={
              section.length === 1
                ? {
                    'grid-column-start': `${1}`,
                    'grid-column-end': `${3}`
                  }
                : {}
            }
          />
        );
      }

      return (
        <ControlledInputMask
          name={inputField.name}
          variant="filled"
          control={control}
          error={!!errors[inputField.error]}
          errorMessage={errors[inputField.error]?.message}
          placeholder={inputField.placeholder}
          regexMask={inputField.regexMask}
          required={inputField.isRequired}
        />
      );
    });
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
          noValidate
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
              mb: '24px'
            }}
          >
            Cadastro de pessoa
          </Typography>
          <Typography
            sx={{
              width: '100%',
              fontSize: '16px',
              fontWeight: '500',
              mb: '48px'
            }}
          >
            Os campos com a cor
            <Typography
              component="strong"
              sx={{
                m: '0px 8px',
                color: '#ffef39d1',
                fontWeight: 600,
                fontSize: '20px'
              }}
            >
              Amarela
            </Typography>{' '}
            são obrigatórios.
          </Typography>
          {personInputsFields.map(section => (
            <Box
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: ['1fr', '1fr 1fr'],
                columnGap: ['0px', '20px'],
                rowGap: ['20px', '0px'],
                '& + &': {
                  mt: '24px'
                },
                justifyContent: 'space-evenly'
              }}
            >
              {renderContent(section.section)}
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
            disabled={loadingSubmit}
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
