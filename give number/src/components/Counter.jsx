import { useReducer } from "react";

const initialState = { input: "", number: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };

    case "SHOW_NUMBER":
      return { ...state, number: Number(state.input) };

    case "ADD":
      return { ...state, number: state.number + 1 };

    case "SUBTRACT":
      return { ...state, number: state.number - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">

       <p className="counter-number">{state.number}</p>
       
      <div className="counter-top">
        <input
          className="counter-input"
          type="number"
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT", payload: e.target.value })
          }
          placeholder="Please enter a number"
        />

        <button
          className="btn btn-show"
          onClick={() => dispatch({ type: "SHOW_NUMBER" })}
        >
          Show
        </button>
      </div>
      <div className="counter-actions">
        <button
          className="btn btn-add"
          onClick={() => dispatch({ type: "ADD" })}
        >
          +
        </button>

        <button
          className="btn btn-reset"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reast
        </button>

        <button
          className="btn btn-sub"
          onClick={() => dispatch({ type: "SUBTRACT" })}
        >
          -
        </button>
      </div>

     
    </div>
  );
}
