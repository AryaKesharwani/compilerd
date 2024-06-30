import { useState } from 'react';
import axios from 'axios';
import CodeEditor from './components/CodeEditor';

const App = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (code, language) => {
    try {
      const res = await axios.post("http://localhost:3000/api/execute/", {
        language: language,
        script: code,
      });
      setResponse(res.data);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Code Execution App</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <CodeEditor onSubmit={handleSubmit} response={response} />
        </div>
      </div>
    </div>
  );
};

export default App;