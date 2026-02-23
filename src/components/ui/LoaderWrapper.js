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
      {!loading && children}
    </>
  );
}