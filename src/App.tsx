import { useEffect, useRef, useState } from "react";
import { CardCat } from "./components/CardCat/CardCat";
import axios from "axios";
import { Checkboxes } from "./components/Checkboxes/Checkboxes";
import "./App.css";

function App() {
  const [catUrl, setCatUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);

  const API_KEY = import.meta.env.VITE_CAT_API_KEY;
  const API_URL = import.meta.env.VITE_CAT_API_URL;

  const fetchRandomCat = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL, {
        headers: { "x-api-key": API_KEY },
      });
      setCatUrl(response.data[0].url);
    } catch (err) {
      setError("Failed to load cat image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (enabled) {
      fetchRandomCat();
    } else {
      setCatUrl(undefined);
    }
  }, [enabled]);

  useEffect(() => {
    if (autoRefresh && enabled) {
      intervalRef.current = setInterval(fetchRandomCat, 5000);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoRefresh, enabled]);

  return (
    <div className="app">
      <Checkboxes
        enabled={enabled}
        refresh={autoRefresh}
        onEnabledChange={setEnabled}
        onRefreshChange={setAutoRefresh}
      />
      <button className="btn" onClick={fetchRandomCat} disabled={loading}>
        {loading ? "Loading..." : "Get cat"}
      </button>
      <CardCat imageUrl={catUrl} loading={loading} error={error} />
    </div>
  );
}

export default App;
