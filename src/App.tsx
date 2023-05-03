import HomeMeta from "./components/HomeMeta";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-50		">
      <HomeMeta />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold underline text-center text-red-500">
          Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;
