import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const emailValidate = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength15 = minLength(8);

const renderField = ({ input, label, type, meta: { error } }) => (
  <div>
    {label}
    <div>
      <input {...input} placeholder={label} type={type} />
      {error && <span>{error}</span>}
    </div>
  </div>
);

const Form = props => {
  const { handleSubmit, loginError } = props;
  const loginFailMsg = loginError ? <span>Login Fail</span> : null;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          label="Email"
          component={renderField}
          type="text"
          validate={[emailValidate, required]}
        />
      </div>
      <div>
        <Field
          name="password"
          label="Password"
          component={renderField}
          type="text"
          validate={[minLength15, required]}
        />
      </div>
      <button type="submit">Submit</button>
      {loginFailMsg}
    </form>
  );
};

const MyForm = reduxForm({
  form: 'login'
})(Form);

renderField.propTypes = {
  input: PropTypes.element,
  label: PropTypes.element,
  type: PropTypes.element,
  meta: PropTypes.element,
  error: PropTypes.element
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  loginError: PropTypes.element
};

export default MyForm;
