import React from 'react'
import {Form, Field} from 'react-final-form'
import {useFirebase} from '../hooks/useFirebase'
import {Spinner} from '../style/spinner'
import styled from 'styled-components'
import {events} from '../assets/constants/events'

const Row = styled.tr`
  background-color: ${({status}) =>
    status === undefined ? '#fce5cd' : status ? '#d9ead3' : '#f4cccc'};
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 50px;

  div {
    margin-right: 70px;
  }
`

const checkBox = ({title, input: {onChange, value}, ...rest}) => (
  <>
    <label className="checkbox">
      <input
        type="checkbox"
        onClick={() => onChange(value === false ? undefined : false)}
        {...rest}
      />
      {title}
    </label>
    <br />
  </>
)

const Stats = ({list}) => {
  const toPercent = (lowTotal, grandTotal) =>
    `${Math.round((lowTotal / grandTotal) * 100)}%`
  const totalInvitations = list.length
  const totalResponded = list.filter(({attending}) => attending !== undefined)
    .length
  const totalAttending = list.filter(({attending}) => attending).length
  const totalNotAttending = list.filter(({attending}) => attending === false)
    .length
  const totalOfGuests = list.filter(({guest}) => guest).length
  const totalPeople = totalAttending + totalOfGuests
  return (
    <div>
      <h1 className="title is-1">Response stats</h1>
      <table className="table is-narrow">
        <tbody>
          <tr>
            <th>Total invitations</th>
            <td>{totalInvitations}</td>
          </tr>
          <tr>
            <th>Total response</th>
            <td>
              {totalResponded} - {toPercent(totalResponded, totalInvitations)}
            </td>
          </tr>
          <tr>
            <th>Total attending</th>
            <td>
              {totalAttending} - {toPercent(totalAttending, totalResponded)}
            </td>
          </tr>
          <tr>
            <th>Total not attending</th>
            <td>
              {totalNotAttending} -{' '}
              {toPercent(totalNotAttending, totalResponded)}
            </td>
          </tr>
          <tr>
            <th>Number of guests</th>
            <td>{totalOfGuests}</td>
          </tr>
          <tr>
            <th>Total people</th>
            <th>{totalPeople}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const InvitationStats = ({list}) => {
  const getTotalPerEvent = event =>
    list.reduce((acc, {attending, guest, invitation}) => {
      if (attending) {
        if (invitation[event]) {
          return guest ? acc + 2 : acc + 1
        }
      }
      return acc
    }, 0)

  const totalForEachEvent = Object.keys(events).reduce(
    (acc, event) => ({...acc, [event]: getTotalPerEvent(event)}),
    {}
  )
  return (
    <div>
      <h1 className="title is-1">Events stats</h1>
      <table className="table is-narrow">
        <tbody>
          {Object.entries(totalForEachEvent).map(([key, value]) => (
            <tr key={key}>
              <th>{events[key]}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const AttendeesScreen = () => {
  const {entities, addEntity, removeEntity} = useFirebase({
    ref: '/attendees',
    toArray: true,
  })

  if (entities.length < 1) {
    return <Spinner />
  }

  return (
    <div>
      <Container>
        <Stats list={entities} />
        <InvitationStats list={entities} />
      </Container>
      <h1 className="title is-1">Invitation list</h1>
      <table className="table">
        <thead>
          <tr>
            <th>S.</th>
            <th>Name</th>
            <th>Code name</th>
            <th>Guest</th>
            <th>Com.</th>
            <th>Céré.</th>
            <th>Vin</th>
            <th>Dîn.</th>
            <th>Act.</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {entities.map(
            ({
              uid,
              name,
              attending,
              guest,
              code,
              invitation: {ahouse, bceremony, cwine, dinner},
              woman
            }) => (
              <Row key={uid} status={attending}>
                <td>{woman === false ? '👩️' : '👨️'}</td>
                <td>{name}</td>
                <td>{code}</td>
                <td>{guest}</td>
                <td>{ahouse ? '🙋‍♀️' : '🙅‍♀️'}</td>
                <td>{bceremony ? '🙋‍♀️' : '🙅‍♀️'}</td>
                <td>{cwine ? '🙋‍♀️' : '🙅‍♀️'}</td>
                <td>{dinner ? '🙋‍♀️' : '🙅‍♀️'}</td>
                <td>
                  <button
                    className="button is-danger is-small"
                    onClick={() => removeEntity(uid)}
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
          onSubmit={data => addEntity({...data})}
          render={({handleSubmit, values}) => (
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
              <Field
                name="woman"
                component={checkBox}
                type="checkbox"
                title="Femme ?"
              />
              <br />
              <br />
              <Field
                name="invitation.ahouse"
                component={checkBox}
                type="checkbox"
                title="Commune"
              />
              <Field
                name="invitation.bceremony"
                component={checkBox}
                type="checkbox"
                title="Cérémonie Laïque"
              />
              <Field
                name="invitation.cwine"
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
