import CodeEditor from './components/CodeEditor';

const App = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Code Execution App</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <CodeEditor  />
        </div>
      </div>
    </div>
  );
};

export default App;