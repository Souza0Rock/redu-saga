import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getUserRequest } from "./redux";
import { useState } from "react";
import { UserState } from "./redux/reducers/user";

// seleciona os valores do estado global
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// dispara ações
export const useAppDispatch = () => useDispatch<AppDispatch>();

function App() {
  const dispatch = useAppDispatch();
  const userState: UserState = useAppSelector((state) => state.user);

  console.log(userState, "userState");

  const [name, setName] = useState("");

  const handleUser = () => {
    dispatch(getUserRequest(name));
  };

  return (
    <>
      <h1>User</h1>
      <input
        type="text"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <button onClick={handleUser} disabled={!name.length}>
        User Request
      </button>
      {userState.user.name && (
        <>
          <hr />
          <p>
            info:
            <br />
            {userState.user.name}
          </p>
        </>
      )}
    </>
  );
}

export default App;
