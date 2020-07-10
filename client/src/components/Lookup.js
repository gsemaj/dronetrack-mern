import React, { useState } from 'react';

export default function Lookup() {

  const [val, setVal] = useState("");

  return (
    <form className="form-inline">
      <input
      type="text"
      className="form-control"
      aria-describedby="orderNumber"
      value={val}
      onChange={e => setVal(e.target.value)}
      placeholder="Order Number" />
      <button type="submit" className="btn btn-primary ml-1">Track</button>
    </form>
  );
}
