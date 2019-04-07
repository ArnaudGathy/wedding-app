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
  const {entities, addEntity, removeEntity} = useFirebase({
    ref: '/attendees',
    toArray: true,
  })
  const attendeesCount = entities.length

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
            <th>Code name</th>
            <th>Is attending ?</th>
            <th>Guest</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entities.map(({uid, name, attending, guest, code}) => (
            <Row key={uid} status={attending}>
              <td>{name}</td>
              <td>{code}</td>
              <td>
                {attending === undefined ? 'TBD' : attending ? 'YES' : 'NO'}
              </td>
              <td>{guest}</td>
              <td>
                <button
                  className="button is-danger is-small"
                  onClick={() => removeEntity(uid)}
                >
                  Remove
                </button>
              </td>
            </Row>
          ))}
        </tbody>
      </table>
      <div>
        <Form
          onSubmit={data => addEntity({...data})}
          initialValues={{invitation: {house: false, ceremony: false, wine: false, dinner: false, activities: false}}}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
              <br />
              <Field
                name="code"
                component="input"
                type="text"
                placeholder="Code Name"
              />
              <br />
              <label className="checkbox">
                <Field name="invitation.house" component="input" type="checkbox" />
                Commune
              </label>
              <br />
              <label className="checkbox">
                <Field name="invitation.ceremony" component="input" type="checkbox" />
                Cérémonie laïque
              </label>
              <br />
              <label className="checkbox">
                <Field name="invitation.wine" component="input" type="checkbox" />
                Vin d'honneur
              </label>
              <br />
              <label className="checkbox">
                <Field name="invitation.dinner" component="input" type="checkbox" />
                Diner
              </label>
              <br />
              <label className="checkbox">
                <Field name="invitation.activities" component="input" type="checkbox" />
                Activités
              </label>

              <br />
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
