import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "../../utils/Loading";
import {
    LoginContainer,
    Content,
    FormContainer,
    Label,
    Input,
    Button,
    FormContent,
    Navigation,
    Logo
} from "./styles";
import logoImg from '../../assets/images/1-removebg-preview.png'

export function Login() {
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            navigate('/io-tech/home')
        }, 3000)
    }
    return (
        <LoginContainer>
            <Content>
                <Logo>
                    <img src={logoImg} alt="" />
                </Logo>
                <FormContainer onSubmit={handleSubmit}>
                    <FormContent>
                        <Label>Usuario</Label>
                        <Input type='text' placeholder="digite seu usuario" />
                    </FormContent>
                    <FormContent>
                        <Label>Senha</Label>
                        <Input type='password' placeholder="digite sua senha" />
                    </FormContent>
                    <Navigation to='/'>Esqueceu a senha?</Navigation>
                    <Button type="submit">
                        {loading ? <LoadingButton /> : 'Entrar'}
                    </Button>
                    <Label>
                        Não tem conta?
                        <Navigation to='//io-techcadastro'> Cadastre-se</Navigation>
                    </Label>
                </FormContainer>
            </Content>
        </LoginContainer>
    )
}