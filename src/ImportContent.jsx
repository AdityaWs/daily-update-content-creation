import { useState } from "react";
import { useGlobalState } from "./AppProvider";

import * as EditorModule from "react-simple-code-editor";

function findComponent(mod, depth = 0) {
  if (!mod || depth > 5) return null;
  if (typeof mod === "function" || mod.$$typeof) {
    return mod;
  }
  if (mod.default) {
    return findComponent(mod.default, depth + 1);
  }
  return null;
}

const Editor = findComponent(EditorModule);

import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";

export default function ImportContent() {
  const { g_content, setGContent } = useGlobalState();

  const [jsonInput, setJsonInput] = useState(g_content ? JSON.stringify(g_content, null, 2) : "{}");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleImport = () => {
    try {
      setError(null);
      setSuccess(false);

      if (!jsonInput.trim()) {
        setError("Input tidak boleh kosong!");
        return;
      }

      const parsedJson = JSON.parse(jsonInput);
      setGContent(parsedJson);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Hilangkan pesan sukses setelah 3 detik
    } catch (err) {
      setError("Format JSON tidak valid! Periksa kembali tanda koma, tanda petik, atau kurung.");
    }
  };

  return (
    <aside className="absolute top-0 left-0 w-[400px] h-screen bg-white border-r border-gray-200 p-4 flex flex-col z-50">
      <div className="mb-4 shrink-0">
        <h2 className="text-lg font-bold text-gray-800">Import Content JSON</h2>
        <p className="text-xs text-gray-500">
          Masukkan naskah atau data terstruktur dalam format JSON
        </p>
      </div>
      <div className="flex-1 min-h-0 overflow-auto border border-gray-200 rounded-sm mb-4">
        <Editor
          value={jsonInput}
          onValueChange={(code) => setJsonInput(code)}
          highlight={(code) => Prism.highlight(code, Prism.languages.json, "json")}
          padding={10}
          className="focus:outline-none text-sm"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            whiteSpace: "pre",
            minWidth: "max-content",
            minHeight: "100%",
          }}
        />
      </div>
      {error && (
        <div className="p-3 mb-4 text-xs text-red-700 bg-red-100 border border-red-200 rounded-sm shrink-0">
          ⚠️ {error}
        </div>
      )}
      {success && (
        <div className="p-3 mb-4 text-xs text-green-700 bg-green-100 border border-green-200 rounded-sm shrink-0">
          ✅ Data berhasil diimport ke Global State!
        </div>
      )}
      <div className="pt-2 border-t border-gray-100 shrink-0">
        <button
          onClick={handleImport}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-sm transition duration-200 active:scale-[0.98] text-sm">
          Import Data JSON
        </button>
      </div>
    </aside>
  );
}