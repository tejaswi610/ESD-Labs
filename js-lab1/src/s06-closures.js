// Section 06 — Scope and closures

// Each call returns a NEW generator with its own counter:
// const next = createIdGenerator("ORD"); next() → "ORD-1", next() → "ORD-2"
export function createIdGenerator(prefix) {
  let counter=0
  return (next)=> `${prefix}-${++counter}`
}

// A function factory: returns a check that "remembers" the limit.
export function makeCreditCheck(limit) {
  return (time)=>time<=limit;
}

// A value only a function can change.
// Returns [get, set]. The value lives in the closure; nothing else can reach it.
export function createBox(initial) {
  let val=initial
  function get() {return val}
  
  function set(newval) {val= newval}
  return [get,set]

}
