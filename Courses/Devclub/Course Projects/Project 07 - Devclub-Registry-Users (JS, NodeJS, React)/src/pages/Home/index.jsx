import { useRef } from 'react'

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel
} from './styles.js'


import api from '../../services/api.js'
import Button from "../../components/Button"
import TopBackground from '../../components/TopBackground'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser() {
    const data = await api.post('/users', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    })
    console.log(data)
  }

  return (
    // in JSX you must always wrap all elements in a single tag.
    // this, bellow is a fragment, used for this purpose.
    <Container>

      <TopBackground />
      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder='Nome do usuário' ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="Number" placeholder='Idade do usuário' ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder='E-mail do usuário' ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} beako='kashira'>Cadastrar Usuário</Button>

      </Form>

      <Button type='button'>Ver Lista de Usuários</Button>
    </Container>
  )
}

export default Home
/* 
  export default --> ONE thing per page.
  If I want to export more: "export function funcName()"
*/

/*
  There are many ways to style stuff! (With styled-components library)
  <h1 style={{color: 'red', fontSize: 30}}>aa</h1>
  importing styles from styles.js
  putting stuff like that h1 inside the container style stuff in the styles.js...
*/