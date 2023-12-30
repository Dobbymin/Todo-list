import { useDispatch, useSelector } from 'react-redux';

import InputBar from '../InputBar/InputBar';
import LoginButton from '../Button/LoginButton';
import ReturnRegister from '../ReturnPage/ReturnRegister';
import { loginActions } from '../../../store/login-slice';
// import { useNavigate } from 'react-router-dom';
import { loginResult } from '../../../store/login-action';

const LoginForm = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    /** 아이디 입력 event */
    const handleIdChange = (e) => {
        dispatch(loginActions.setUsername(e.target.value));
    };

    /** 비밀번호 입력 event */
    const handlePwChange = (e) => {
        dispatch(loginActions.setPassword(e.target.value));
    };

    const username = useSelector((state) => state.login.username);
    const password = useSelector((state) => state.login.password);

    /** 버튼 입력 event */
    const handleStartClick = async (e) => {
        e.preventDefault();

        // 아이디 값이 비어 있으면 경고 메시지 표시
        if (!username || username.trim() === '') {
            alert('ID를 입력해주세요!');
            return; // 함수 실행을 중단
        }

        await dispatch(loginResult(username, password));
        // navigate('/');
        alert('로그인 성공!');
    };

    return (
        <>
            <form className="mt-6">
                <InputBar htmlFor="id" type="id" id="id" name="ID" onChange={handleIdChange} />
                <InputBar htmlFor="password" type="password" id="password" name="Password" onChange={handlePwChange} />

                <LoginButton onClick={handleStartClick} />

                <ReturnRegister />
            </form>
        </>
    );
};

export default LoginForm;
