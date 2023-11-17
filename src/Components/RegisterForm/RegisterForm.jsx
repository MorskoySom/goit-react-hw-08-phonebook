import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/operations';
import css from './RegisterForm.modules.css'

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
                <input type="text" name="name" />
            </label>
            <label className={css.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};
