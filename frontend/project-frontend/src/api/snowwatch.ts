export async function fetchWeather(): Promise<any> {
  const res = await fetch("/weather");;

  if (!res.ok) {
    let msg = "Failed to fetch weather";
    try {
      const body = await res.json();
      if (body?.error) msg = body.error;
    } catch {
      /* ignore */
    }
    throw new Error(msg);
  }

  return res.json();
}