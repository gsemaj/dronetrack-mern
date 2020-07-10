import React from 'react';

export default function Copyright() {
  return (
    <>
      <div className="footer">Gent Semaj. Licensed under GPLv3.0.</div>

      <style jsx>{`
        .footer {
          position: fixed;
          bottom: 0px;
        }
      `}
      </style>
    </>
  );
}
