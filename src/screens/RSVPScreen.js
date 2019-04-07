import React, {useState} from 'react'
import {useFirebase} from '../hooks/useFirebase'
import {Spinner} from '../style/spinner'
import {Form, Field} from 'react-final-form'
import {CheckBox} from '../style/checkbox'
import styled from 'styled-components'
import posed from 'react-pose'
import {CheckBoxField} from '../style/CheckBoxField'
import {events} from '../assets/constants/events'

const AppearRight = posed.div({
  hidden: {opacity: 0, x: 200},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 400,
      ease: [0.42, 0, 1, 1],
    },
  },
})

const AppearTop = posed.div({
  hidden: {opacity: 0, x: -200},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 400,
      ease: [0.42, 0, 1, 1],
    },
  },
})

const FieldContainer = styled(AppearRight)`
  margin: 20px 0;
`

const FieldContainerTop = styled(AppearTop)`
  margin: 20px 0;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const RSVPScreen = ({match: {params}}) => {
  const {entities, updateEntity} = useFirebase({
    ref: '/attendees',
    toArray: true,
  })
  const attendee = entities.find(({code}) => code === params.code)
  const [step, setStep] = useState(0)

  if (entities.length < 1) {
    return <Spinner />
  }

  if (!attendee) {
    return (
      <div>
        <h2 className="title is-2">
          L'adresse demandée n'existe pas (attention aux majuscules !)
        </h2>
        <img src="https://http.cat/404" alt="not found" />
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="title is-1">Hello {attendee.name.split(' ')[0]}</h1>
      <Form
        onSubmit={data => {
          if (!data.attending || step === 3) {
            setStep(4)
            const value =
              data.attending === false
                ? {name: attendee.name, code: attendee.code, attending: false, invitation: data.invitation}
                : data.hasGuest
                ? {name: attendee.name, code: attendee.code, ...data}
                : {name: attendee.name, code: attendee.code, attending: true, invitation: data.invitation}
            return updateEntity({
              uid: attendee.uid,
              value,
            })
          }
          setStep(step + 1)
        }}
        initialValues={{attending: true, hasGuest: true, ...attendee}}
        render={({handleSubmit, values}) => (
          <form onSubmit={handleSubmit}>
            {step === 0 && (
              <>
                {attendee.attending === undefined ? (
                  <>
                    <p>
                      Tu es invité(e) à notre mariage ce samedi 5 octobre 2019
                    </p>
                    <p>Peux tu nous donner une réponse avant le dd/mm/yyyy ?</p>
                  </>
                ) : (
                  <p>
                    Tu as déjà donné une réponse, mais tu peux la modifier ici
                    si tu le souhaites.
                  </p>
                )}
              </>
            )}
            <br />
            <FieldContainer pose={step === 0 ? 'visible' : 'hidden'}>
              {step === 0 && (
                <button
                  className={`button is-${
                    attendee.attending === undefined ? 'success' : 'warning'
                  } is-large`}
                  type="button"
                  onClick={() => setStep(1)}
                >
                  {attendee.attending === undefined
                    ? 'Répondre'
                    : 'Modifier ma réponse'}
                </button>
              )}
            </FieldContainer>
            <FieldContainer pose={step === 1 ? 'visible' : 'hidden'}>
              {step === 1 && (
                <>
                  <h4 className="title is-4">Seras-tu présent(e) ?</h4>
                  <Field
                    name="attending"
                    component={CheckBox}
                    type="checkbox"
                  />
                </>
              )}
            </FieldContainer>

            <FieldContainer pose={step === 2 ? 'visible' : 'hidden'}>
              {step === 2 && (
                <>
                  <h4 className="title is-4">Viens-tu accompagné(e) ?</h4>
                  <h4 className="subtitle">
                    (Par quelqu'un qui n'a pas reçu d'invitation.)
                  </h4>
                  <Field name="hasGuest" component={CheckBox} type="checkbox" />
                </>
              )}
            </FieldContainer>
            <FieldContainerTop
              pose={step === 2 && values.hasGuest ? 'visible' : 'hidden'}
            >
              {step === 2 && values.hasGuest && (
                <>
                  <h4 className="title is-4">Nom de l'invité</h4>
                  <Field name="guest" component="input" type="input" />
                </>
              )}
            </FieldContainerTop>

            <FieldContainer pose={step === 3 ? 'visible' : 'hidden'}>
              {step === 3 && (
                <>
                  <h4 className="title is-4">
                    Tu es invité(e) aux évènements suivants
                  </h4>
                  <h4 className="subtitle">Aux quels sera tu présent(e) ?</h4>
                  {Object.keys(attendee.invitation).map(name => (
                    <Field
                      key={name}
                      name={`invitation.${name}`}
                      component={CheckBoxField}
                      type="checkbox"
                      title={events[name]}
                    />
                  ))}
                </>
              )}
            </FieldContainer>

            <FieldContainer pose={step === 4 ? 'visible' : 'hidden'}>
              {step === 4 && (
                <>
                  <h4 className="title is-4">Merci d'avoir répondu.</h4>
                  <p>
                    Tu peux revenir sur cette page plus tard pour modifier ta
                    réponse.
                  </p>
                </>
              )}
            </FieldContainer>
            <br />
            {[1, 2, 3].includes(step) && (
              <ButtonContainer>
                {[2, 3].includes(step) && (
                  <div>
                    <button
                      type="button"
                      className="button is-text is-small"
                      onClick={() => setStep(step - 1)}
                    >
                      {'retour'}
                    </button>
                  </div>
                )}
                <div>
                  <button
                    disabled={step === 2 && values.hasGuest && !values.guest}
                    type="submit"
                    className="button is-primary"
                  >
                    {values.attending
                      ? step === 3
                        ? 'Enregistrer'
                        : 'Suivant'
                      : 'Enregistrer'}
                  </button>
                </div>
              </ButtonContainer>
            )}
          </form>
        )}
      />
    </div>
  )
}
