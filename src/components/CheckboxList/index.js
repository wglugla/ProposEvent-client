import React, { useState, useEffect } from 'react';
import { tagsDomain } from '../../state/ducks/domains';
import { Field } from 'formik';
import {
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledCheckbox,
} from '../../shared/Checkbox';
import { StyledLabel } from '../../shared/Form';

function Checkbox(props) {
  return (
    <Field className="field" name={props.name}>
      {({ field, form }) => (
        <StyledCheckboxContainer className="checkbox">
          <StyledCheckboxInput
            type="checkbox"
            className="checkbox"
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
          <StyledCheckbox />
          {props.value}
        </StyledCheckboxContainer>
      )}
    </Field>
  );
}

export const CheckboxList = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function getTags() {
      const newTags = await fetch(tagsDomain());
      const json = await newTags.json();
      setTags(json.data);
    }
    getTags();
  }, []);
  return (
    <div className="field is-horizontal">
      <StyledLabel className="label"> Zainteresowania: </StyledLabel>
      <div className="field-body">
        {tags[0] ? (
          tags.map(tag => <Checkbox key={tag.tag_id} name="tags" value={tag.value} />)
        ) : (
          <p> Wczytywanie tagów... </p>
        )}
      </div>
    </div>
  );
};
