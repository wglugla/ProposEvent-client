import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { CheckboxList } from '../CheckboxList';
import { Form, Datepicker } from 'react-formik-ui';

import { StyledSection, StyledContainer } from '../../shared/Container';
import { StyledForm } from '../../shared/Form';

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

export const EventModifierForm = props => {
  const { owner_id, event_id, title, place, date, description, event_tags } = props.eventInfo;
  if (!props.eventInfo) {
    return <p> Wczytywanie.. </p>;
  }
  return (
    <StyledSection className="section">
      <StyledContainer className="container">
        <h2 className="title is-3"> Zmodyfikuj wydarzenie </h2>
        <Formik
          initialValues={{
            owner_id: owner_id,
            title: title,
            place: place,
            date: date,
            description: description,
            tags: event_tags,
          }}
          onSubmit={(values, actions) => {
            props.modifyEvent(values, event_id);
          }}
          onChange={el => {}}
          validationSchema={EventSchema}
          render={({ handleSubmit, onChange, errors, status, touched, isSubmitting }) => (
            <StyledForm
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Form structured>
                <Datepicker
                  id="date"
                  type="date"
                  name="date"
                  autoComplete="date"
                  label="Naciśnij aby wybrać datę i godzinę"
                  showTimeSelect
                  timeFormat="HH:mm"
                  dateFormat="yyyy-MM-dd hh:mm"
                  timeCaption="time"
                  minDate={new Date()}
                />
                {errors.date && touched.date && <div> {errors.date} </div>}
              </Form>
              <div className="field">
                <label className="label" htmlFor="title">
                  Tytuł wydarzenia
                </label>
                <div className="control">
                  <Field
                    className="input"
                    id="title"
                    type="text"
                    name="title"
                    autoComplete="title"
                  />
                  {errors.title && touched.title && <div> {errors.title} </div>}
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="place">
                  Miejsce wydarzenia
                </label>
                <div className="control">
                  <Field
                    className="input"
                    id="place"
                    type="text"
                    name="place"
                    autoComplete="place"
                  />
                  {errors.place && touched.place && <div> {errors.place} </div>}
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="description">
                  Opis wydarzenia
                </label>
                <div className="control">
                  <Field
                    className="input"
                    id="description"
                    type="text"
                    name="description"
                    autoComplete="description"
                  />
                  {errors.description && touched.description && <div> {errors.description} </div>}
                </div>
              </div>
              <CheckboxList />
              {status && status.msg && <div> {status.msg}</div>}
              <button className="button is-info" type="submit">
                Modyfikuj wydarzenie
              </button>
            </StyledForm>
          )}
        />
      </StyledContainer>
    </StyledSection>
  );
};

export default EventModifierForm;
