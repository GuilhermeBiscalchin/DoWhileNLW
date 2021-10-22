import { FormEvent, useContext, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContent } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'


export function SendMessageForm() {
    const { user ,signOut} = useContext(AuthContent)

    const [message,setMessage] = useState('')

    async function criarMensagem(event: FormEvent){
        event.preventDefault()
        
        if(!message.trim()){
            return
        }
        await api.post('messages',{message})

        setMessage('')
    }

    

    return (
        <div className={styles.sendMessageFormWrapper}>
            <button onClick={signOut} className={styles.signOutButton}>
                <VscSignOut size="32" />
            </button>

            <header className={styles.signedUserInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size="16" />
                    {user?.login}
                </span>
            </header>

            <form onSubmit ={criarMensagem}className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea onChange = {event => setMessage(event.target.value)} name="message" id="message" placeholder="Qual sua expectativa para o evento?" 
                value={message} />

                <button type="submit">Enviar Mensagem</button>
            </form>

        </div>
    )
}