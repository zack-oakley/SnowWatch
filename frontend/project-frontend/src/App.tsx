import { useEffect, useState } from "react";
import { fetchWeather } from "./api/snowwatch";

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const json = await fetchWeather();
        if (!cancelled) {
          setData(json);
        }
      } catch (err: unknown) {
        if (!cancelled) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Unknown error");
          }
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>SnowWatch</h1>

      {loading && <p>Loading weather…</p>}

      {!loading && error && (
        <div style={{ padding: 12, border: "1px solid #ccc" }}>
          <p style={{ margin: 0 }}>Error: {error}</p>
        </div>
      )}

      {!loading && !error && data && (
        <div style={{ marginTop: 16 }}>
          <h2>Raw API response (Phase 1)</h2>
          <pre
            style={{
              background: "#f6f6f6",
              padding: 12,
              borderRadius: 8,
              overflowX: "auto",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
