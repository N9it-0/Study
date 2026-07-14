import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import Title from '../../components/Title/index.jsx'
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import Trash from '../../assets/trash.svg'

import {
    Container,
    ContainerUsers,
    CardUsers,
    TrashIcon,
    AvatarUser,
} from './styles'

function ListUsers() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/users/')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id){
        await api.delete(`/users/${id}`)
        const updatedUsers = users.filter( user => user.id !== id)
        setUsers(updatedUsers)
    }

    //EVERY TIME the screen loads, useEffect is called.
    //EVERY TIME an variable CHANGES value, it's called.
    return (
        <Container>
            <TopBackground />
            <Title style={{ marginTop: '30px' }}>Listagem de Usuários</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${user.name}`} alt='avatar'/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button onClick={() => navigate('/')} beako={'null'}>Voltar</Button>
        </Container>
    )
}

export default ListUsers