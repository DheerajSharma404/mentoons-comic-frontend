import { configureStore } from "@reduxjs/toolkit";
import comicsReducer from "./comicSlice";
import userReducer from "./userSlice";
import workshopReducer from "./workshopSlice"
export const store = configureStore({
  reducer: { 
    comics: comicsReducer, 
    user: userReducer ,
    workshop: workshopReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
