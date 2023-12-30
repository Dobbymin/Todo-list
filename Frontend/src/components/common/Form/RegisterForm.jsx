import InputBar from '../InputBar/InputBar';
import RegisterButton from '../Button/RegisterButton';
import ReturnLogin from '../ReturnPage/ReturnLogin';

const RegisterForm = () => {
    return (
        <>
            <form className="mt-6">
                <InputBar htmlFor="id" type="id" id="id" name="ID" />
                <InputBar htmlFor="password" type="password" id="password" name="Password" />
                <InputBar htmlFor="studentid" type="studentid" id="studentid" name="Student ID" />

                <RegisterButton />

                <ReturnLogin />
            </form>
        </>
    );
};

export default RegisterForm;
