import { useContext } from 'react'
import { VscGithubInverted} from 'react-icons/vsc'
import { AuthContent } from '../../contexts/auth'


import styles from './styles.module.scss'



export function LoginBox(){
    const {signInUrl} = useContext(AuthContent)
    
    //console.log(user)
    

    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signWithGithubButton}>
                <VscGithubInverted size = "24"/>
                Entrar com Github
            </a>
        </div>
    )
}