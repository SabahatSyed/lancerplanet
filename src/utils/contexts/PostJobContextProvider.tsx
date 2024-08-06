import { useReducer } from "react";
import PostJobReducer from "../reducers/post-job";
import { PostJobContext, initialState } from "./post-job";

export default function PostJobContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(PostJobReducer, initialState);

  return (
    <PostJobContext.Provider value={{ state, dispatch }}>
      {children}
    </PostJobContext.Provider>
  );
}
