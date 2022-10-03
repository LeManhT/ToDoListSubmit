const { createSlice } = require("@reduxjs/toolkit");

let string = window.localStorage.getItem("user-login");

let init = {};
if (!string) {
    init = {};
    window.localStorage.setItem("user-login", JSON.stringify({}));
} else {
    init = JSON.parse(string);
}

const userSlice = createSlice({
    name: "user",
    initialState: init,
    reducers: {
        userLogin: function (state, action) {
            window.localStorage.setItem("user-login", JSON.stringify(action.payload));
            return action.payload;
        },
    },
});

export const { userLogin } = userSlice.actions;
export const userReducer = userSlice.reducer;
