import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

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
    <React.Fragment>
      <h2> Logowanie </h2>
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
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label htmlFor="username">Nazwa użytkownika</label>
            <Field id="username" type="text" name="username" autoComplete="username" />
            {errors.username && touched.username && <div> {errors.username} </div>}
            <label htmlFor="password">Hasło</label>
            <Field id="password" type="password" name="password" autoComplete="old-password" />
            {errors.password && touched.password && <div> {errors.password} </div>}
            <button type="submit">Zaloguj się</button>
          </form>
        )}
      />
      {props.failed ? <p> Błąd logowania </p> : null}
    </React.Fragment>
  );
};

export default LoginForm;
