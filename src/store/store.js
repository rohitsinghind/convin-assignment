import { configureStore } from "@reduxjs/toolkit";
import { allUsersReducer, userProfileReducer } from "./reducers/User";

const store = configureStore({
    reducer:{
        userProfile: userProfileReducer,
        allUsers: allUsersReducer,
    }
})

export default store;