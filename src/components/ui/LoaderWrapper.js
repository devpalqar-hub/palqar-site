"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader/Loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
  }, []);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div
        style={{
          visibility: loading ? "hidden" : "visible",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
        aria-hidden={loading}
      >
        {children}
      </div>
    </>
  );
}