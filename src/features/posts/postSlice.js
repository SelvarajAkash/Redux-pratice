import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "First Blog !",
        body: "Social Media"
    },
    {
        id: 1,
        title: "Two Blog !",
        body: "Social Media 2"
    },
]

const postSlice = createSlice({
    name: "Posts",
    initialState,
    reducers: {

    }
})


// export const {} = postSlice.actions

export default postSlice.reducer