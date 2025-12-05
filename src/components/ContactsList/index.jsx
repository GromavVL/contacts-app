import React from 'react'
import { connect } from 'react-redux'
import { deleteContact, updateContact } from '../../store/slices/contactSlice'

function ContactsList ({ contacts, deleteContactById, updateContactById }) {
  // const isFavouriteChanged = () => {}
  const changeIsFavourite = (id, checked) =>
    updateContactById(id, { isFavourite: checked })
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <label>
            <input
              type='checkbox'
              checked={c.isFavavorite}
              onChange={({ target: { checked } }) =>
                changeIsFavourite(c.id, checked)
              }
            />{' '}
          </label>
          {JSON.stringify(c)}
          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ contactsList }) => contactsList

const mapDispatchToProps = dispach => ({
  deleteContactById: id => dispach(deleteContact(id)),
  updateContactById: (id, data) => dispach(updateContact({ id, data }))
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
