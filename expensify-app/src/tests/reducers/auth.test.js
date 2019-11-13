import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = "123"
    const state = authReducer({}, {
        type: "LOGIN",
        uid
    })
    expect(state.uid).toEqual(uid);
});

test('should clear uid for logout', () => {
    const uid = "123"
    const state = authReducer({uid}, {
        type: "LOGOUT"
    })
    expect(state).toEqual({});
});
