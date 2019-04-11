import React, {useState} from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import {colors} from '../assets/constants/colors'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const TextPose = posed.div({
  on: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 10,
    },
  },
  off: {
    opacity: 0,
    transition: {
      ease: 'linear',
      duration: 0,
    },
  },
})

const Text = styled(TextPose)`
  flex: 1;
  margin-right: 4rem;
  padding: 1.5rem 0;
  text-align: right;

  h2 {
    color: ${colors.title};
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const List = styled.div`
  flex: 1;
  margin-left: 4rem;
  color: ${colors.title};
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.5rem 0;
  cursor: pointer;
`

const BlockNumber = styled.div`
  transition: all 0.5s ease;
  font-size: 1.1rem;
  font-weight: ${({selected}) => (selected ? '500' : '400')};
  border: 1px solid
    ${({selected}) => (selected ? colors.pink : 'rgb(210, 210, 210)')};
  color: ${({selected}) => (selected ? colors.pink : colors.title)};
  border-radius: 4px;
  height: 42px;
  width: 42px;
  text-align: center;
  margin-right: 1rem;
  padding-top: 5px;
`

const MenuPose = posed.div({
  on: {
    x: 16,
    transition: {
      ease: 'linear',
      duration: 0.5,
    },
  },
  off: {
    x: 0,
    transition: {
      ease: 'linear',
      duration: 0.5,
    },
  },
})

const BlockText = styled(MenuPose)`
  color: ${({selected}) => (selected ? colors.pink : colors.title)};
  font-size: 1.25rem;
  transition: all 0.3s ease;

  :hover {
    color: ${colors.pink};
  }
`

const events = [
  'Mariage civil',
  'Cérémonie laïque',
  "Vin d'honneur",
  'Dîner',
  'Activités',
]

const texts = [
  <div>
    <h2>Titre 1</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,
      scelerisque vel diam non, tristique condimentum dui.
      <br />
      <br />
      >Donec venenatis porta mollis. Fusce quis tincidunt orci. Integer
      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare
      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.
    </p>
  </div>,
  <div>
    <h2>Titre 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,
      scelerisque vel diam non, tristique condimentum dui.
      <br />
      <br />
      >Donec venenatis porta mollis. Fusce quis tincidunt orci. Integer
      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare
      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.
    </p>
  </div>,
  <div>
    <h2>Titre 3</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,
      scelerisque
      <br />
      <br />
      >Donec venenatis porta mollis. Fusce quis tincidunt orci. Integer
      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare
      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.
    </p>
  </div>,
  <div>
    <h2>Titre 4</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,
      scelerisque vel diam non, tristique condimentum dui.
      <br />
      <br />
      Integer
      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare
      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.
    </p>
  </div>,
  <div>
    <h2>Titre 5</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa,
      scelerisque vel diam non, tristique condimentum dui.
      <br />
      <br />
      >Donec venenatis porta mollis. Fusce quis tincidunt orci. Integer
      fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare
      elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.
    </p>
  </div>,
]

const ButtonBlock = ({index, title, selected, onClick}) => (
  <Block onClick={onClick}>
    <BlockNumber selected={selected}>{index}</BlockNumber>
    <BlockText pose={selected ? 'on' : 'off'} selected={selected}>
      {title}
    </BlockText>
  </Block>
)

export const Planning = () => {
  const [selected, setSelected] = useState(1)
  return (
    <Container>
      <Text pose="on" poseKey={selected}>
        {texts[selected - 1]}
      </Text>
      <List>
        {events.map((event, index) => (
          <ButtonBlock
            key={event}
            index={index + 1}
            selected={selected === index + 1}
            title={event}
            onClick={() => setSelected(index + 1)}
          />
        ))}
      </List>
    </Container>
  )
}
