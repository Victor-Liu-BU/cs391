'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ProfilePageInner() {
    const searchParams = useSearchParams();
    const user = {
        login: searchParams.get('login') || '',
        name: searchParams.get('name') || '',
        avatar_url: searchParams.get('avatar_url') || '',
        email: searchParams.get('email') || '',
    };

    const handleSignOut = () => {
        window.location.href = '/';
    };

    if (!user.login) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-lg text-gray-700">No user info. Please sign in.</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-md w-full text-black">
                <img
                    src={user.avatar_url}
                    alt="GitHub Avatar"
                    className="w-28 h-28 rounded-full shadow mb-4 border-4 border-blue-500"
                />
                <h1 className="text-2xl font-bold mb-1">{user.name || user.login}</h1>
                <p className="text-gray-600 mb-2">@{user.login}</p>
                <p className="text-gray-700 mb-4">{user.email || 'Email not public'}</p>
                <button
                    onClick={handleSignOut}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Sign out
                </button>
            </div>
            <footer className="mt-8 text-gray-500 text-sm">
                Powered by GitHub OAuth · <a href="https://github.com" className="underline">GitHub</a>
            </footer>
        </main>
    );
}

// Export the page wrapped in Suspense
export default function ProfilePage() {
    return (
        <Suspense fallback={<div>Loading profile...</div>}>
            <ProfilePageInner />
        </Suspense>
    );
}
