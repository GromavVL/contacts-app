import React from 'react'
import ContactsForm from '../../components/ContactsForm'
import ContactsList from '../../components/ContactsList'

function ContactsPage () {
  return (
    <>
      <h2>Contacts Page</h2>
      <main>
        <ContactsForm />
        <p>-------------------------------------------------------</p>
        <ContactsList />
      </main>
    </>
  )
}

export default ContactsPage