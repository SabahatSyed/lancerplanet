import { useReducer } from "react";
import CreateFProfileReducer from "../reducers/create-f-profile";
import {
  CreateFProfileContext,
  initialState,
} from "./create-freelance-profile";

export default function CreateFProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(CreateFProfileReducer, initialState);

  return (
    <CreateFProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateFProfileContext.Provider>
  );
}
