const { createSlice } = require("@reduxjs/toolkit");

let string = window.localStorage.getItem("user-login");

let initUser = {};
if (!string) {
    initUser = {};
    window.localStorage.setItem("user-login", JSON.stringify({}));
} else {
    initUser = JSON.parse(string);
}
const userSlice = createSlice({
    name: "user",
    initialState: initUser,
    reducers: {
        userLogin: function (state, action) {
            window.localStorage.setItem("user-login", JSON.stringify(action.payload));
            return action.payload;
        },
    },
});

export const { userLogin } = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userSlice