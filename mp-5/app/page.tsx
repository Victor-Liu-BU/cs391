"use client";

import { useState } from "react";
import { isValidUrl } from "@/lib/isValidUrl";

export default function Home() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleShorten() {
    setError("");
    setShortUrl("");
    setLoading(true);

    // Client-side validation for empty alias
    if (!alias.trim()) {
      setError("Alias cannot be empty.");
      setLoading(false);
      return;
    }
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/link/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, alias: alias.trim() }),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || "Error");
      else setShortUrl(data.shortUrl);
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  }

  function copy() {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="bg-white p-8 rounded shadow max-w-md w-full space-y-4 text-black">
          <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
          <input
              className="w-full p-2 border rounded"
              placeholder="https://example.com"
              value={url}
              onChange={e => setUrl(e.target.value)}
              required
          />
          <input
              className="w-full p-2 border rounded"
              placeholder="Custom alias (required)"
              value={alias}
              onChange={e => setAlias(e.target.value)}
              required
          />
          <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              disabled={loading}
              onClick={handleShorten}
          >
            {loading ? "Shortening..." : "Shorten"}
          </button>
          {error && <div className="text-red-600">{error}</div>}
          {shortUrl && (
              <div className="flex items-center gap-2 bg-green-100 p-2 rounded">
                <input className="flex-1 bg-transparent" value={shortUrl} readOnly />
                <button type="button" onClick={copy} className="text-blue-600 font-semibold">
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
          )}
        </div>
      </main>
  );
}
