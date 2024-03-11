import {
    Button,
    FormLabel,
    FormTextBox,
    HeaderLogo,
    InputGroup,
    LoginForm,
    LoginPageContainer,
    LoginPageWrapper
} from './styles.ts';
import { useState } from 'react';
import {app} from "../../lib/axios.ts";

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = () => {
        setIsLoading(true)

        const obj = {
            "login": login,
            "password": password
        }

        app.post('/login', obj)
            .then(res => {
                if (res.status == 200){
                    // processes with tokens and set user authenticated for auth wrapper
                }
                else{
                    setError(res.statusText)
                }
            })

        setIsLoading(false)
    };

    return (
        <LoginPageWrapper>
            <LoginPageContainer>
                <HeaderLogo />
                <LoginForm onSubmit={() => onSubmit()}>
                    <InputGroup>
                        <FormTextBox
                            value={login}
                            onChange={(event) => {
                                setLogin(event.target.value);
                            }}
                            type="email"
                            name="email"
                            id="email"
                            required={true}
                        />
                        <FormLabel htmlFor="email">Ваша почта:</FormLabel>
                    </InputGroup>

                    <InputGroup>
                        <FormTextBox
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            type="password"
                            name="password"
                            id="password"
                            required={true}
                        />
                        <FormLabel htmlFor="password">Пароль:</FormLabel>
                    </InputGroup>

                    <Button type="submit" disabled={isLoading || !(login && password)}>
                        Войти
                    </Button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                </LoginForm>
            </LoginPageContainer>
        </LoginPageWrapper>
    );
};
