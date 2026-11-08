// Section 15 — Build your own useState

// A tiny version of React's useState.
//   const [getCount, setCount] = useState(0, render);
// - getState() returns the current value.
// - setState(next) accepts a value OR an updater function (prev) => next,
//   stores the result, and then calls onChange() — the "hidden code" that
//   redraws the screen.
// - If the new value is the same (Object.is), it does nothing: no onChange.
export function useState(initial, onChange) {
  let state = initial;

  function getState() {
    return state;
  }

  function setState(next) {
    if (typeof next === "function") {
      next = next(state);
    }

    if (Object.is(next, state)) {
      return;
    }

    state = next;
    onChange();
  }

  return [getState, setState];
}
