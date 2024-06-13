import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorLogger } from "./middleware";
import { loginApi } from "./features/users/user.service";

import { blogApi } from "./features/blogs/blog.service";
import blogReducer from "./features/blogs/blog.slice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    [blogApi.reducerPath]: blogApi.reducer, // thêm reducer được tạo từ api slice
    [loginApi.reducerPath]: loginApi.reducer,
  },
  // Thêm api middleware để enable các tính năng như caching, invalidation, polling của rtk-query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(blogApi.middleware, rtkQueryErrorLogger)
      .concat(loginApi.middleware, rtkQueryErrorLogger),
});

// Optional, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
