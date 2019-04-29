import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { CheckboxList } from '../CheckboxList';

import { StyledSection, StyledContainer } from '../../shared/Container';
import { StyledForm } from '../../shared/Form';
import { StyledParagraph } from '../../shared/Paragraph';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(45, 'Zbyt długie!')
    .required('Wymagane!'),
  name: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(20, 'Zbyt długie!')
    .required('Wymagane!'),
  surname: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(20, 'Zbyt długie!')
    .required('Wymagane!'),
  password: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(20, 'Zbyt długie!')
    .required('Wymagane!'),
});

export const RegisterForm = props => {
  return (
    <StyledSection className="section">
      <StyledContainer className="container">
        <h2 className="title is-3"> Utwórz konto </h2>
        <StyledParagraph className="subtitle has-text-grey is-6">
          Dobierz zainteresowania do konta, aby pozwolić aplikacji na jak najlepszy wybór
          proponowanych wydarzeń!
        </StyledParagraph>
        <p>
          Masz już konto? <Link to="/login"> Zaloguj się </Link>
        </p>
        <Formik
          initialValues={{
            username: '',
            name: '',
            surname: '',
            password: '',
            tags: '',
          }}
          onSubmit={(values, actions) => {
            props.register(values);
          }}
          onChange={el => {}}
          validationSchema={SignupSchema}
          render={({ handleSubmit, onChange, errors, status, touched, isSubmitting }) => (
            <StyledForm
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="field">
                <label className="label" htmlFor="username">
                  Nazwa użytkownika
                </label>
                <div className="control">
                  <Field
                    className="input"
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                  />
                  {errors.username && touched.username && <div> {errors.username} </div>}
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="name">
                  Imię
                </label>
                <div className="control">
                  <Field className="input" type="text" name="name" autoComplete="name" />
                  {errors.name && touched.name && <div> {errors.name} </div>}
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="surname">
                  Nazwisko
                </label>
                <div className="control">
                  <Field className="input" type="text" name="surname" autoComplete="surname" />
                  {errors.surname && touched.surname && <div> {errors.surname} </div>}
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="password">
                  Hasło
                </label>
                <div className="control">
                  <Field
                    className="input"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                  />
                  {errors.password && touched.password && <div> {errors.password} </div>}
                </div>
              </div>
              <CheckboxList />
              {status && status.msg && <div> {status.msg}</div>}
              <button className="button is-info" type="submit">
                Zarejestruj się
              </button>
            </StyledForm>
          )}
        />
      </StyledContainer>
    </StyledSection>
  );
};

export default RegisterForm;
