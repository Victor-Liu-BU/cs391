import { getRandomIcons } from "@/lib/iconFinderAPI";
import IconsDisplay from "@/components/IconsDisplay";

export default async function Home() {
  const icons = await getRandomIcons();

  return (
      <main className="min-h-screen p-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">Icon Finder Search</h1>
            <p className="text-gray-600">
              Search for icons by keywords or browse our collection
            </p>
          </div>

          <IconsDisplay inputIcons={icons} />
        </div>
      </main>
  );
}