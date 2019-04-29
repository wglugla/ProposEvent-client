import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { StyledSection, StyledContainer } from '../../shared/Container';
import { StyledForm } from '../../shared/Form';

const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(45, 'Zbyt długie!')
    .required('Wymagane!'),
  password: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(20, 'Zbyt długie!')
    .required('Wymagane!'),
});

export const LoginForm = props => {
  return (
    <StyledSection className="section">
      <StyledContainer className="container">
        <h2 className="title is-3"> Zaloguj się </h2>
        <Link to="/">Nie masz konta? Zarejestruj się</Link>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={(values, actions) => {
            props.login(values);
          }}
          onChange={() => {}}
          validationSchema={SigninSchema}
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
                    id="username"
                    type="text"
                    name="username"
                    autoComplete="username"
                  />
                  {errors.username && touched.username && <div> {errors.username} </div>}
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="password">
                  Hasło
                </label>
                <div className="control">
                  <Field
                    className="input"
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="old-password"
                  />
                  {errors.password && touched.password && <div> {errors.password} </div>}
                </div>
              </div>
              <button className="button is-info" type="submit">
                Zaloguj się
              </button>
            </StyledForm>
          )}
        />
        {props.failed ? <p> Błąd logowania </p> : null}
      </StyledContainer>
    </StyledSection>
  );
};

export default LoginForm;
