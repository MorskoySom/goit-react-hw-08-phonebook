import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/operations';
import { Button, Input } from '@chakra-ui/react'
import css from '../LoginForm/LoginForm.module.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleRegSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleRegSubmit} autoComplete="off">
            <label className={css.label}>
                Username
                <Input type="text" name="name" />
            </label>
            <label className={css.label}>
                Email
                <Input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <Input type="password" name="password" />
            </label>
            <Button className={css.btn} type="submit">Register</Button>
        </form>
    );
};
