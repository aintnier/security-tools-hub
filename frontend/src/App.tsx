import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Security Tools Hub
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl">
            Frontend initialization complete with React, Vite, Tailwind CSS v4, and shadcn/ui
          </p>
          
          <div className="flex space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
            <Button variant="ghost">Documentation</Button>
          </div>

          <div className="mt-8 p-6 border rounded-lg bg-card">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>React 19.1.1</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Vite 7.1.7</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>Tailwind CSS v4 (Alpha)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>shadcn/ui</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>TypeScript</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
