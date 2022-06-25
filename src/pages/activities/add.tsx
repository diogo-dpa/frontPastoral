import { useState } from 'react';
import PageHead from '@components/PageHead';
import PageWrapper from '@components/PageWrapper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@utility/validations/addActivitiesValidation';
import ControlledInput from '@components/ControlledInput';
import { styled } from '@mui/system';
import {
  Box,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import {
  CalendarMonth, People, Person
} from "@mui/icons-material";
import SubjectIcon from '@mui/icons-material/Subject';
import PlaceIcon from '@mui/icons-material/Place';
import ControlledSelect from "@components/ControlledSelect";

interface AddActivityFormProps {
  activityType: string,
  dateTime: string,
  participantsQuantity: number,
  place: string,
  responsible: string,
  subject: string
}

const AddActivityPage = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const { control, handleSubmit, formState } = useForm<AddActivityFormProps>({
    defaultValues: {
      activityType: '',
      dateTime: '',
      participantsQuantity: 1,
      place: '',
      responsible: '',
      subject: ''
    },
    resolver: yupResolver(schema)
  });

  const { errors } = formState;

  const handleSubmitForm = async ({
    activityType,
    dateTime,
    participantsQuantity,
    place,
    responsible,
    subject
  }: AddActivityFormProps) => {
    try {
      setLoadingSubmit(true)
      console.log({
        activityType,
        dateTime,
        participantsQuantity,
        place,
        responsible,
        subject
      })
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => {
        setLoadingSubmit(false)
      }, 3000)
    }
  };

  return (
    <PageWrapper>
      <>
        <PageHead title="Cadastrar atividade | Pastoral" />
        <AddActivityPageContent>
          <Typography variant="h1" color="#486a74">Cadastrar atividade</Typography>
          <AddActivityBox>
            <InputBox as="form" onSubmit={handleSubmit(
              handleSubmitForm,
              (e) => { console.log('@@@@ tchau', e)})}>
              <ControlledSelect
                name="activityType"
                control={control}
                label="Tipo de atividade"
                variant="outlined"
                values={[
                  'Acompanhamento',
                  'Visita Técnica',
                  'Oficinas',
                  'Rodas de Conversa',
                  'Reunião Externa',
                  'Reunião Interna',
                  'Outras'
                ]}
              />
              <ControlledInput
                name="dateTime"
                variant="outlined"
                control={control}
                hasLeftElement
                LeftElementComponent={<CalendarMonth fontSize="small" />}
                error={!!errors.dateTime}
                errorMessage={errors.dateTime?.message}
                label="Date e hora"
                placeholder="Insira a data e hora da atividade"
                type="text"
              />
              <ControlledInput
                name="subject"
                variant="outlined"
                control={control}
                hasLeftElement
                LeftElementComponent={<SubjectIcon fontSize="small" />}
                error={!!errors.subject}
                errorMessage={errors.subject?.message}
                label="Tema/Pauta"
                placeholder="Insira o tema/pauta da atividade"
                type="text"
              />
              <ControlledInput
                name="place"
                variant="outlined"
                control={control}
                hasLeftElement
                LeftElementComponent={<PlaceIcon fontSize="small" />}
                error={!!errors.place}
                errorMessage={errors.place?.message}
                label="Local"
                placeholder="Insira o local da atividade"
                type="text"
              />
              <ControlledInput
                name="responsible"
                variant="outlined"
                control={control}
                hasLeftElement
                LeftElementComponent={<Person fontSize="small" />}
                error={!!errors.responsible}
                errorMessage={errors.responsible?.message}
                label="Responsável"
                placeholder="Insira o responsável pela atividade"
                type="text"
              />
              <ControlledInput
                name="participantsQuantity"
                variant="outlined"
                control={control}
                hasLeftElement
                LeftElementComponent={<People fontSize="small" />}
                error={!!errors.participantsQuantity}
                errorMessage={errors.participantsQuantity?.message}
                label="Nº de participantes"
                placeholder="Insira a quantidade de participantes da atividade"
                type="number"
              />
              {/*material sim/nao qual*/}
              {/*objetivo/pauta*/}
              {/*descrição*/}
              {/*Avaliacao () encaminhamentos ()*/}
              {/*registro fotografico (caso seja necessario)*/}
              <SubmitButton variant="contained" type="submit">
                {loadingSubmit ? <CircularProgress size="20px" /> : 'Salvar atividade'}
              </SubmitButton>
            </InputBox>
          </AddActivityBox>
        </AddActivityPageContent>
      </>
    </PageWrapper>
  );
};

const AddActivityPageContent = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  backgroundColor: 'lightblue',
  padding: '16px',
});

const AddActivityBox = styled(Box)({
  width: '960px',
  maxWidth: '90%',
  borderRadius: '6px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',
  backgroundColor: 'white',
  marginTop: '16px',
  '.MuiTypography-root': {
    marginBottom: '16px'
  }
});

const InputBox = styled(Box)({
  width: '95%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '.MuiButton-root': {
    marginTop: '16px'
  },
  '.MuiFormControl-root': {
    marginBottom: '24px'
  },
  '.MuiTextField-root': {
    width: '100%',
    input: {
      padding: '12px 0px',
      fontSize: '18px'
    }
  }
});

const SubmitButton = styled(Button)({
  width: '100%',
  background: 'green',
  transition: 'background 0.4s'
});

export default AddActivityPage;
