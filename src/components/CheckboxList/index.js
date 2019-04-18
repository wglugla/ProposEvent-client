import React, { useState, useEffect } from 'react';
import { tagsDomain } from '../../state/ducks/domains';
import { Field } from 'formik';

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
    <React.Fragment>
      {tags[0] ? (
        tags.map(tag => <Checkbox key={tag.tag_id} name="tags" value={tag.value} />)
      ) : (
        <p> Wczytywanie tagów... </p>
      )}
    </React.Fragment>
  );
};
