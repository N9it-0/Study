import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles.js'
import UsersImage from './assets/users.png'


function Home() {
  return (
    // in JSX you must always wrap all elements in a single tag.
    // this, bellow is a fragment, used for this purpose.
    <Container>
      <TopBackground>
        <img src={UsersImage} />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder='Nome do usuário' />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="Number" placeholder='Idade do usuário' />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder='E-mail do usuário' />
        </div>

        <Button>Cadastrar Usuário</Button>

      </Form>



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