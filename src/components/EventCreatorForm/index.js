import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router';
import { CheckboxList } from '../CheckboxList';

const EventSchema = Yup.object().shape({
  owner_id: Yup.number().required('Wymagane!'),
  title: Yup.string()
    .min(5, 'Zbyt krotkie!')
    .max(45, 'Zbyt długie!')
    .required('Wymagane!'),
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

export const EventCreatorForm = props => {
  return (
    <div>
      <h2> Nowe wydarzenie </h2>
      <Formik
        initialValues={{
          owner_id: localStorage.proposEventUserId,
          title: '',
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
            <label htmlFor="title"> Tytuł wydarzenia </label>
            <Field id="title" type="text" name="title" autoComplete="title" />
            {errors.title && touched.title && <div> {errors.title} </div>}
            <label htmlFor="place">Miejsce wydarzenia</label>
            <Field id="place" type="text" name="place" autoComplete="place" />
            {errors.place && touched.place && <div> {errors.place} </div>}
            <label htmlFor="date"> Data </label>
            <Field id="date" type="date" name="date" autoComplete="date" />
            {errors.date && touched.date && <div> {errors.date} </div>}
            <label htmlFor="description">Opis wydarzenia</label>
            <Field id="description" type="text" name="description" autoComplete="description" />
            {errors.description && touched.description && <div> {errors.description} </div>}
            <CheckboxList />
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
