// import { createSlice } from "@reduxjs/toolkit"


// const initialState = {
//     userInfo: null,
//     isAuthenticated: false,
//     // loading: false,
//     error: null
// };

// export const autoSlice  = createSlice ({
//     name: 'auth',
//     initialState,
//     reducers: {
//         loginAuth: (state, action) =>{
//             state.userInfo = action.payload;
//             // state.loading = false;
//             state.isAuthenticated = true;
//         },
//         logoutAuth: (state) =>{
//             state.userInfo = null;
//             // state.loading = false;
//             state.isAuthenticated = false;
//         }
//     } 
// })

// export const { loginAuth, logoutAuth } = autoSlice.actions

// export default autoSlice.reducer