import RegisterForm from '../common/Form/RegisterForm';
import Header from '../common/Header';
import Title from '../common/Text/Title';

const RegisterTemplate = () => {
    return (
        <>
            <Header />
            <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
                <div className="p-6 bg-white rounded-md shadow-lg">
                    <Title title="회원가입" />
                    <RegisterForm />
                </div>
            </section>
        </>
    );
};

export default RegisterTemplate;
