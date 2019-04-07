import React from 'react'
import {Form, Field} from 'react-final-form'
import {useFirebase} from '../hooks/useFirebase'
import {Spinner} from '../style/spinner'
import styled from 'styled-components'

const Row = styled.tr`
  background-color: ${({status}) =>
    status === undefined ? '#fce5cd' : status ? '#d9ead3' : '#f4cccc'};
`

const checkBox = ({title, input: {onChange, value}, ...rest}) => (
  <>
    <label className="checkbox">
      <input type="checkbox" onClick={() => onChange(false)} {...rest} />
      {title}
    </label>
    <br />
  </>
)

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
          // initialValues={{
          //   invitation: {
          //     house: null,
          //     ceremony: null,
          //     wine: null,
          //     dinner: null,
          //     activities: null,
          //   },
          // }}
          render={({handleSubmit, values}) => (
            <form onSubmit={handleSubmit}>
              {console.log(values)}
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
              <Field
                name="invitation.house"
                component={checkBox}
                type="checkbox"
                title="Commune"
              />
              <Field
                name="invitation.ceremony"
                component={checkBox}
                type="checkbox"
                title="Cérémonie Laïque"
              />
              <Field
                name="invitation.wine"
                component={checkBox}
                type="checkbox"
                title="Vin d'honneur"
              />
              <Field
                name="invitation.dinner"
                component={checkBox}
                type="checkbox"
                title="Dîner"
              />
              <Field
                name="invitation.activities"
                component={checkBox}
                type="checkbox"
                title="Activités"
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
