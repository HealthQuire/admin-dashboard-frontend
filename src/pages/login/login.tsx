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
// import {userServiceApp} from "../../lib/axios.ts";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    // const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = () => {

        localStorage.setItem("hq_id", "id")
        navigate("/")

        // const obj = {
        //     "login": login,
        //     "password": password
        // }

        // userServiceApp.post('/login', obj)
        //     .then(res => {
        //         if (res.status == 200){
        //             localStorage.setItem("hq_id", res.data.id)
        //         }
        //         else{
        //             setError(res.statusText)
        //         }
        //     })
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

                    <Button type="submit" disabled={!(login && password)}>
                        Войти
                    </Button>
                    {/*{error && <div style={{ color: 'red' }}>{error}</div>}*/}
                </LoginForm>
            </LoginPageContainer>
        </LoginPageWrapper>
    );
};
