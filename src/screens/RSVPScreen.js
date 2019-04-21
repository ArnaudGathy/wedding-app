import React, {useState} from 'react'
import {useFirebase} from '../hooks/useFirebase'
import {Spinner} from '../style/spinner'
import {Form, Field} from 'react-final-form'
import {CheckBox} from '../style/checkbox'
import styled from 'styled-components'
import posed from 'react-pose'
import {CheckBoxField} from '../style/CheckBoxField'
import {events} from '../assets/constants/events'
import {NoCode} from './HomeScreen'
import {Button} from '../components/Button'

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
  justify-content: center;
`

export const RSVPScreen = ({codeName, reset}) => {
  const {entities, updateEntity} = useFirebase({
    ref: '/attendees',
    toArray: true,
  })
  const attendee = entities.find(({code}) => code === codeName)
  const [step, setStep] = useState(0)

  if (entities.length < 1) {
    return <Spinner />
  }

  if (!attendee) {
    return (
      <NoCode>
        <p>
          <h2>
            Le code "{codeName}" n'existe pas (attention aux majuscules !)
            <br />
            <a href="./#invitation" onClick={reset}>
              Réessayer
            </a>
          </h2>
        </p>
      </NoCode>
    )
  }

  return (
    <NoCode className="container">
      <h1>Coucou {attendee.name.split(' ')[0]} !</h1>
      <Form
        onSubmit={data => {
          if (!data.attending || step === 3) {
            setStep(4)
            const value =
              data.attending === false
                ? {
                    name: attendee.name,
                    code: attendee.code,
                    attending: false,
                    invitation: data.invitation,
                  }
                : data.hasGuest
                ? {name: attendee.name, code: attendee.code, ...data}
                : {
                    name: attendee.name,
                    code: attendee.code,
                    attending: true,
                    invitation: data.invitation,
                  }

            if (attendee.woman === false) {
              value.woman = false
            }
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
                      Tu es invité{attendee.woman === false && 'e'} à notre
                      mariage ce <span>samedi 5 octobre 2019</span>
                    </p>
                    <p>
                      Peux tu nous donner une réponse{' '}
                      <span>avant le 1er Juin 2019</span> ?
                    </p>
                  </>
                ) : (
                  <p>
                    Tu as déjà donné une réponse, mais tu peux la modifier ici,
                    si tu le souhaites.
                  </p>
                )}
              </>
            )}
            <br />
            <FieldContainer pose={step === 0 ? 'visible' : 'hidden'}>
              {step === 0 && (
                <Button type="button" onClick={() => setStep(1)} small>
                  {attendee.attending === undefined
                    ? "Répondre à l'invitation"
                    : 'Modifier ma réponse'}
                </Button>
              )}
            </FieldContainer>
            <FieldContainer pose={step === 1 ? 'visible' : 'hidden'}>
              {step === 1 && (
                <>
                  <h2>Seras-tu présent{attendee.woman === false && 'e'} ?</h2>
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
                  <h2>
                    Viens-tu accompagné{attendee.woman === false && 'e'} ?
                  </h2>
                  <p>(Par quelqu'un qui n'a pas reçu d'invitation.)</p>
                  <Field name="hasGuest" component={CheckBox} type="checkbox" />
                </>
              )}
            </FieldContainer>
            <FieldContainerTop
              pose={step === 2 && values.hasGuest ? 'visible' : 'hidden'}
            >
              {step === 2 && values.hasGuest && (
                <>
                  <h2>Nom de l'invité(e) (requis)</h2>
                  <Field name="guest" component="input" type="input" />
                </>
              )}
            </FieldContainerTop>

            <FieldContainer pose={step === 3 ? 'visible' : 'hidden'}>
              {step === 3 && (
                <>
                  <h2>
                    Tu es invité{attendee.woman === false && 'e'} aux évènements
                    suivants
                  </h2>
                  <p>
                    Aux quels sera tu présent{attendee.woman === false && 'e'} ?
                  </p>
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
                  <h2>Merci d'avoir répondu !</h2>
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
                <div>
                  <Button
                    disabled={step === 2 && values.hasGuest && !values.guest}
                    type="submit"
                  >
                    {values.attending
                      ? step === 3
                        ? 'Enregistrer'
                        : 'Suivant'
                      : 'Enregistrer'}
                  </Button>
                  {[1, 2, 3].includes(step) && (
                    <button
                      type="button"
                      className="button is-text is-small"
                      onClick={() => setStep(step - 1)}
                    >
                      {'retour'}
                    </button>
                  )}
                </div>
              </ButtonContainer>
            )}
          </form>
        )}
      />
    </NoCode>
  )
}
