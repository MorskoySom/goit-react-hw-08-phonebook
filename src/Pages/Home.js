const styles = {
    container: {
        // minHeight: 'calc(100vh - 50px)',
        // display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b2f0e0'
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: 500,
        fontSize: 28,
        textAlign: 'center',
    },
};

export default function Home() {
    return (
        <div style={styles.container}>
            <div>
                <h1 style={styles.title}>
                    Phone contacts welcome page{' '}
                    <span role="img" aria-label="Greeting icon">
                        💁‍♀️
                    </span>
                </h1>
            </div>
            <div>
                <h2 style={styles.subtitle}>GoIT courses. Student Somov Vitalii.</h2>
            </div>
        </div>
    );
}
