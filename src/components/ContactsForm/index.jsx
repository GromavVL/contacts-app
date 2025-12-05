import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationsShemas'
import { addContact } from '../../store/slices/contactSlice'

function ContactsForm ({ addNewContact }) {
  const initialValues = {
    fullName: '',
    phoneNumber: ''
  }
  const submitHandler = (values, { resetForm }) => {
    console.log('values :>> ', values)
    addNewContact(values)
    resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Name:{' '}
          <Field
            name='fullName'
            type='text'
            placeholder='Enter full name'
            autoFocus
          />
          <ErrorMessage name='fullName' component={'div'} />
        </label>
        <label>
          Phome number:{' '}
          <Field name='phoneNumber' type='text' placeholder='+XXX XXX XXX XX' />
          <ErrorMessage name='phoneNumber' component={'div'} />
        </label>
        <button type='submit'>Add Contact</button>
      </Form>
    </Formik>
  )
}
const mapDispatchToProps = dispatch => ({
  addNewContact: data => dispatch(addContact(data))
})

export default connect(null, mapDispatchToProps)(ContactsForm)