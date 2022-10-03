const { createSlice } = require("@reduxjs/toolkit");


let init = [];

let string = window.localStorage.getItem("data-redux");
if (!string) {
    init = []
    window.localStorage.setItem("data-redux", JSON.stringify([]));
} else {
    init = JSON.parse(string);
}
const dataSlice = createSlice({
    name: "data",
    initialState: init,
    reducers: {
        storeData: function (state, action) {
            window.localStorage.setItem("data-redux", JSON.stringify(action.payload));
            return action.payload;
        },
    },
});

export const { storeData } = dataSlice.actions;
export const DataReducer = dataSlice.reducer;
export default dataSlice