import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  password: "",
  posts: [],
  followed: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.password = action.payload.password;
      state.posts = action.payload.posts;
      state.followed = action.payload.followed;
    },

    setSignOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
      state.password = null;
      state.posts = null;
      state.followed = null;
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export const selectUserPosts = (state) => state.user.posts;
export const selectUserFollowed = (state) => state.user.followed;

export default userSlice.reducer;
