import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { CheckboxList } from '../CheckboxList';

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
    <div>
      <h2> Utwórz konto </h2>
      <p>
        Dobierz zainteresowania do konta, aby pozwolić aplikacji na jak najlepszy wybór
        proponowanych wydarzeń!
      </p>
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
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label htmlFor="username">Nazwa użytkownika</label>
            <Field type="text" name="username" autoComplete="username" />
            {errors.username && touched.username && <div> {errors.username} </div>}
            <label htmlFor="name">Imię</label>
            <Field type="text" name="name" autoComplete="name" />
            {errors.name && touched.name && <div> {errors.name} </div>}
            <label htmlFor="surname">Nazwisko</label>
            <Field type="text" name="surname" autoComplete="surname" />
            {errors.surname && touched.surname && <div> {errors.surname} </div>}
            <label htmlFor="password">Hasło</label>
            <Field type="password" name="password" autoComplete="new-password" />
            {errors.password && touched.password && <div> {errors.password} </div>}
            <CheckboxList />
            {status && status.msg && <div> {status.msg}</div>}
            <button type="submit">Zarejestruj się</button>
          </form>
        )}
      />
    </div>
  );
};

export default RegisterForm;
