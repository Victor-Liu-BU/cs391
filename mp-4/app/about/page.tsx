export default function AboutPage(){
    // @ts-ignore
    return (
        <main className="min-h-screen p-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl text-black font-bold mb-4">About Icon Finder Application</h1>

                    <div className="section-card text-black">
                        <h2 className="section-title text-black">Project Overview</h2>
                        <p className="paragraph mb-4">
                            This application offers the functionality of obtaining icons as a result from an API call to Iconfinder API.
                            To use, you would input in the search bar any category and the API will filter the results based on the
                            associated tags each icon is affiliated with in the Iconfinder API framework.
                        </p>
                        <p className="paragraph">
                            The output icons is contained in a card of width 64, padding 4, with hover effects. The icons
                            are centered and ensured it is contained within the box using object-contain from Next.js image component.
                        </p>
                    </div>

                    <div className="section-card text-black">
                        <h2 className="section-title text-black">Technical Implementation</h2>

                        <h3 className="text-xl font-medium mt-4 mb-2">API Key Security</h3>
                        <p className="paragraph mb-4">
                            The application uses the Iconfinder API which requires an API key for authentication. To keep this key
                            secure, all API requests are made server-side using Next.js server components and API routes.
                        </p>
                        <div className="code-block">
                            <p className="paragraph">// Server-side API function with "use server" directive</p>
                            <p className="paragraph">// This ensures the API key remains on the server</p>
                            <p className="paragraph">const API_KEY = process.env.ICON_API_KEY;</p>
                            <p className="paragraph">// API request with proper authorization header</p>
                            <p className="paragraph">const response = await fetch(url, &#123;</p>
                            <p className="paragraph pl-4">headers: &#123; "Authorization": Bearer &#36;&#123;API_KEY&#125; &#125;</p>
                            <p className="paragraph">&#125;);</p>
                        </div>

                        <h3 className="text-xl font-medium mt-4 mb-2">Client-Server Communication</h3>
                        <p className="paragraph mb-4">
                            The application implements a secure bridge between client-side components and server-side API calls using
                            Next.js API routes. This ensures the API key is never exposed to the client.
                        </p>
                        <div className="code-block">
                            <p className="paragraph">// Client-side search component</p>
                            <p className="paragraph">const handleSearch = async (e) => &#123;</p>
                            <p className="paragraph pl-4">// Call our internal API route instead of external API directly</p>
                            <p className="paragraph pl-4">const response = await fetch(`/api/icons/search?query=&#36;&#123;query&#125;`);</p>
                            <p className="paragraph pl-4">const data = await response.json();</p>
                            <p className="paragraph pl-4">onSearch(data.icons);</p>
                            <p className="paragraph">&#125;;</p>
                        </div>

                        <h3 className="text-xl font-medium mt-4 mb-2">Image Optimization</h3>
                        <p className="paragraph mb-4">
                            The application uses Next.js Image component for optimized image loading, with proper configuration
                            in next.config.js to allow images from the Iconfinder CDN domains.
                        </p>
                    </div>

                    <div className="section-card">
                        <h2 className="section-title">Technologies Used</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Next.js with App Router</li>
                            <li>TypeScript for type safety</li>
                            <li>Tailwind CSS for styling</li>
                            <li>Iconfinder API for icon data</li>
                            <li>Environment variables for secure API key storage</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <a
                        href="/"
                        className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-full transition-colors"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}