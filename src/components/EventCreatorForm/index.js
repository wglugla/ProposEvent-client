import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { CheckboxList } from '../CheckboxList';

import { StyledSection, StyledContainer } from '../../shared/Container';
import { StyledForm } from '../../shared/Form';
import { StyledParagraph } from '../../shared/Paragraph';

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
    <StyledSection className="section">
      <StyledContainer className="container">
        <h2 className="title is-3"> Utwórz nowe wydarzenie </h2>
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
            <StyledForm
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
                <label className="label" htmlFor="date">
                  Data
                </label>
                <div className="control">
                  <Field className="input" id="date" type="date" name="date" autoComplete="date" />
                  {errors.date && touched.date && <div> {errors.date} </div>}
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
                Utwórz wydarzenie
              </button>
            </StyledForm>
          )}
        />
      </StyledContainer>
    </StyledSection>
  );
};

export default EventCreatorForm;
