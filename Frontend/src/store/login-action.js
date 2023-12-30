import axios from 'axios';

import { BASE_URL } from '../utils/URL';
import { loginActions } from './login-slice';

export const loginResult = (username, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/login`,
                { username, password },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            dispatch(loginActions.setUsername(response.id));
            dispatch(loginActions.setPassword(response.pw));
        } catch (error) {
            alert('로그인에 실패했습니다.');
            throw new Error(error);
        }
    };
};
