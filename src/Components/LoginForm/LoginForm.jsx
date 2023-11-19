import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/operations';
import { Button, Input } from '@chakra-ui/react'
import css from './LoginForm.module.css';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Email
                <Input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <Input type="password" name="password" />
            </label>
            <Button colorScheme='teal' size='md' type="submit">Log In</Button>
        </form>
    );
};


