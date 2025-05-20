import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          My Tailwind + Shadcn UI App
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-4">
            This is a paragraph styled with Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
              Tailwind Button
            </button>

            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
