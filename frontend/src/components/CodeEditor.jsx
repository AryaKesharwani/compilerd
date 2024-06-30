import { useState } from "react";
import Monaco from "@monaco-editor/react";
import { Send } from "lucide-react";
import Select from "./Select";
import ReactJson from "react18-json-view";
import "react18-json-view/src/style.css";

const languages = [
  { value: "javascript", label: "JavaScript", backend: "nodejs" },
  { value: "python", label: "Python", backend: "python" },
  { value: "java", label: "Java", backend: "java" },
  { value: "c", label: "C", backend: "c" },
  { value: "cpp", label: "C++", backend: "cpp" },
  { value: "ruby", label: "Ruby", backend: "ruby" },
  { value: "rust", label: "Rust", backend: "rust" },
  { value: "typescript", label: "TypeScript", backend: "typescript" },
  { value: "perl", label: "Perl", backend: "perl" },
];

const themes = [
  { value: "vs-dark", label: "Dark" },
  { value: "vs-light", label: "Light" },
];

export default function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState(languages[0]);
  const [theme, setTheme] = useState(themes[0]);
  const [stdin, setStdin] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/execute/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: stdin
          ? JSON.stringify({ language: language.backend, script: code, stdin })
          : JSON.stringify({ language: language.backend, script: code }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
        <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
          <div className="flex justify-between mb-4">
            <Select
              options={languages}
              value={language}
              onChange={setLanguage}
              label="Language"
            />
            <Select
              options={themes}
              value={theme}
              onChange={setTheme}
              label="Theme"
            />
          </div>
          <Monaco
            height="100%"
            language={language.value}
            value={code}
            theme={theme.value}
            onChange={setCode}
            options={{ minimap: { enabled: false }, automaticLayout: true }}
            className="flex-grow"
          />
          <textarea
            className="mt-4 p-2 border rounded resize-none"
            placeholder="Standard Input (stdin)"
            rows={4}
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition duration-150 ease-in-out"
          >
            {isLoading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
            ) : (
              <Send className="w-4 h-4 mr-2" />
            )}
            {isLoading ? "Running..." : "Run Code"}
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-2">
        <div className="bg-white rounded-lg shadow-md p-4 h-full overflow-auto">
          <h3 className="text-lg font-semibold mb-2">Response:</h3>
          {response ? (
            <ReactJson
              src={response}
              theme="monokai"
              collapseStringsAfterLength={15}
              displayDataTypes={false}
              displayObjectSize={false}
              name={false}
              style={{ backgroundColor: "transparent" }}
            />
          ) : (
            <p className="text-gray-500">
              Run your code to see the output here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
