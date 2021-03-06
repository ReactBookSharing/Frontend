export const LOGIN = 'LOGIN';
export const LOG_OUT = 'LOG_OUT';
export const CLEAR_DATA = 'CLEAR_DATA';
export const REGISTER_USER = 'REGISTER_USER';


export const login = response => dispatch => {
    dispatch({
        type: LOGIN,
        payload: response.data
    });
};

export const logout = () => dispatch => {
    dispatch({
        type: LOG_OUT,
        payload: {}
    });
};

export const clearData = () => dispatch => {
    dispatch({
        type: CLEAR_DATA,
        payload: {}
    });
}

export const register = response => dispatch => {
    dispatch({
        type: REGISTER_USER,
        payload: response.data
    });
}
