'use client';

export default function Home() {
  const handleLogin = () => {
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!, // Use NEXT_PUBLIC_
      redirect_uri: process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI!,
      scope: 'read:user user:email',
      allow_signup: 'true',
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
  };

  return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="text-black justify-center items-center flex flex-col">
          <p>OAuth App</p>
          <p>By Ting Shing Liu</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={handleLogin}>Sign in with GitHub</button>
        </div>
      </main>
  );
}