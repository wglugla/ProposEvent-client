import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router';

const EventSchema = Yup.object().shape({
  owner_id: Yup.number().required('Wymagane!'),
  place: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(45, 'Zbyt długie!')
    .required('Wymagane!'),
  date: Yup.date().required('Wymagane!'),
  description: Yup.string()
    .min(5, 'Zbyt krótkie!')
    .max(255, 'Zbyt długie!')
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
              if (field.value.includes(props.value)) {
                const target =
                  field.value.indexOf(`${props.value},`) >= 0
                    ? `${props.value},`
                    : `,${props.value}`;
                const nextValue = field.value.replace(target, '');
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value + ',');
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          {props.value}
        </label>
      )}
    </Field>
  );
}

export const EventCreatorForm = props => {
  return (
    <div>
      <h2> Nowe wydarzenie </h2>
      <Formik
        initialValues={{
          owner_id: localStorage.proposEventUserId,
          place: '',
          date: '',
          description: '',
          tags: '',
        }}
        onSubmit={(values, actions) => {
          props.createEvent(values);
        }}
        onChange={el => {}}
        validationSchema={EventSchema}
        render={({ handleSubmit, onChange, errors, status, touched, isSubmitting }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label htmlFor="username">Miejsce wydarzenia</label>
            <Field type="text" name="place" autoComplete="place" />
            {errors.place && touched.place && <div> {errors.place} </div>}
            <label htmlFor="name"> Data </label>
            <Field type="date" name="date" autoComplete="date" />
            {errors.date && touched.date && <div> {errors.date} </div>}
            <label htmlFor="surname">Opis wydarzenia</label>
            <Field type="text" name="description" autoComplete="description" />
            {errors.description && touched.description && <div> {errors.description} </div>}
            <Checkbox name="tags" value="muzyka" />
            <Checkbox name="tags" value="sport" />
            <Checkbox name="tags" value="taniec" />
            {status && status.msg && <div> {status.msg}</div>}
            <button type="submit"> Utwórz wydarzenie </button>
          </form>
        )}
      />
      {props.created && !props.failed ? (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { redirectText: 'Wydarzenie utworzone pomyślnie' },
          }}
        />
      ) : null}
    </div>
  );
};

export default EventCreatorForm;
