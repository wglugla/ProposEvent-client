import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

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

function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label>
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              console.log('field.value przed: ', field.value);
              if (field.value.includes(props.value)) {
                const target =
                  field.value.indexOf(`${props.value},`) >= 0
                    ? `${props.value},`
                    : `,${props.value}`;
                console.log('usuwam: ', target);
                const nextValue = field.value.replace(target, '');
                form.setFieldValue(props.name, nextValue);
                console.log(nextValue);
              } else {
                const nextValue = field.value.concat(props.value + ',');
                form.setFieldValue(props.name, nextValue);
                console.log(nextValue);
              }
            }}
          />
          {props.value}
        </label>
      )}
    </Field>
  );
}

export default class RegisterForm extends Component {
  render() {
    return (
      <div>
        <h2> Utwórz konto </h2>
        <p>
          Dobierz zainteresowania do konta, aby pozwolić aplikacji na jak najlepszy wybór
          proponowanych wydarzeń!
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
            console.log(values);
            this.props.register(values);
          }}
          onChange={el => {
            console.log('onchange');
            console.log(el);
          }}
          validationSchema={SignupSchema}
          render={({ handleSubmit, onChange, errors, status, touched, isSubmitting }) => (
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <label>
                Nazwa użytkownika
                <Field type="text" name="username" autoComplete="username" />
                {errors.username && touched.username && <div> {errors.username} </div>}
              </label>
              <label>
                Imię
                <Field type="text" name="name" autoComplete="name" />
                {errors.name && touched.name && <div> {errors.name} </div>}
              </label>
              <label>
                Nazwisko
                <Field type="text" name="surname" autoComplete="surname" />
                {errors.surname && touched.surname && <div> {errors.surname} </div>}
              </label>
              <label>
                Hasło
                <Field type="password" name="password" autoComplete="new-password" />
                {errors.password && touched.password && <div> {errors.password} </div>}
              </label>
              <Checkbox name="tags" value="muzyka" />
              <Checkbox name="tags" value="sport" />
              <Checkbox name="tags" value="taniec" />
              {status && status.msg && <div> {status.msg}</div>}
              <button type="submit" disabled={isSubmitting}>
                Zarejestruj się
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}
