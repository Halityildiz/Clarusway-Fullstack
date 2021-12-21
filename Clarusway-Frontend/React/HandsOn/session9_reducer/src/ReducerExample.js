import { useReducer } from "react";
import { initialState, Reducer } from "./Reducer";

const ReducerExample = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { loading, dog, error } = state;

  const fetchDog = () => {
    dispatch({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        dispatch({ type: "FAIL", payload: "HATA VERİLER ÇEKİLEMEDİ" });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{
          width: "200px",
          margin: "1rem 10rem",
          padding: "1rem 2rem",
          background: "red",
          fontSize: "1.2rem",
        }}
      >
        Fetch Dog
      </button>
      {dog && (
        <img src={dog} alt="" style={{ width: "600px", borderRadius: "20%" }} />
      )}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ReducerExample;
