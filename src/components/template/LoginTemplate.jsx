import LoginForm from '../common/Form/LoginForm';
import Header from '../common/Header';
import Title from '../common/Text/Title';

const LoginTemplate = () => {
    return (
        <>
            <Header />
            <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
                <div className="p-6 bg-white rounded-md shadow-md">
                    <Title title="로그인" />
                    <LoginForm />
                </div>
            </section>
        </>
    );
};

export default LoginTemplate;
