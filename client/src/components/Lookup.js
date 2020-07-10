import React, { useState } from 'react';

export default function Lookup() {

  const [val, setVal] = useState("");

  return (
    <div className="container form-group mb-5">
      <input type="text" className="form-control"
      aria-describedby="orderNumber" value={val}
      onChange={e => setVal(e.target.value)}
      placeholder="Order Number (XXXXXXXXXXXX)" />
    </div>
  );
}
