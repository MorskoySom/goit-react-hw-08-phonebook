import { Helmet } from 'react-helmet';
import { RegisterForm } from 'Components/RegisterForm/RegisterForm';
import styled from 'styled-components';

const styles = {
    container: {
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b2f0e0'
    },
};

const Text = styled.div`
    text-align: center;
`;

export default function Register() {
    return (
        <div style={styles.container}>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
            <Text>Join us - discover the world of AI</Text>
            <Text>Add advertising</Text>
        </div>
    );
}