import React from 'react'
import {Form, Field} from 'react-final-form'
import {useFirebase} from '../hooks/useFirebase'
import {Spinner} from '../style/spinner'
import styled from 'styled-components'

const Row = styled.tr`
  background-color: ${({status}) =>
    status === undefined ? '#fce5cd' : status ? '#d9ead3' : '#f4cccc'};
`

export const AttendeesScreen = () => {
  const [attendees, addAttendee, removeAttendee] = useFirebase('/attendees')
  const attendeesCount = Object.keys(attendees).length

  if (attendeesCount < 1) {
    return <Spinner />
  }

  return (
    <div>
      <h1 className="title is-1">Attendees ({attendeesCount})</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Is attending ?</th>
            <th>Guest</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(attendees).map(
            ([uid, {name, responded, attending, guest}]) => (
              <Row key={uid} status={attending}>
                <td>{name}</td>
                <td>
                  {attending === undefined ? 'TBD' : attending ? 'YES' : 'NO'}
                </td>
                <td>{guest === undefined ? 'TBD' : guest ? guest : 'NO'}</td>
                <td>
                  <button
                    className="button is-danger is-small"
                    onClick={() => removeAttendee(uid)}
                  >
                    Remove
                  </button>
                </td>
              </Row>
            )
          )}
        </tbody>
      </table>
      <div>
        <Form
          onSubmit={data => addAttendee({...data})}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
              <button className="button is-warning is-small" type="submit">
                Add
              </button>
            </form>
          )}
        />
      </div>
    </div>
  )
}
