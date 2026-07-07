import { useEffect, useState } from "react"
import { useGlobalState } from "./AppProvider";

export default function ExportCaption() {
  const { g_content } = useGlobalState();
  const [caption, setCaption] = useState('Salutations! DailyUpdate Historien.\n\n');
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (Object.hasOwn(g_content, 'caption') && Object.hasOwn(g_content, 'hashtags')) {
      const hashtags = g_content.hashtags;
      const hashtagString = hashtags
        .filter(tag => typeof tag === "string" && tag.trim() !== "")
        .map(tag => {
          tag = tag.trim();
          return tag.startsWith("#") ? tag : `#${tag}`;
        })
        .join(" ");
      setCaption('Halo Sobat Berita Harian!.\n\n' + g_content.caption + '\n\n' + hashtagString);
    }
  }, [g_content]);

  return (
    <>
      <div
        className={`fixed bottom-0 right-0 m-6 bg-white w-120 h-100 rounded-md border-1 border-gray-200 p-4 flex flex-col gap-2 shadow-lg transition-transform duration-300 ease-in-out ${
          isHidden ? "translate-x-[calc(100%+2rem)]" : "translate-x-0"
        }`}>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Caption:</p>
          <button
            onClick={() => setIsHidden(true)}
            className="text-xs text-gray-500 hover:text-gray-800 border border-gray-200 rounded px-2 py-1"
            title="Sembunyikan panel">Hide ➜</button>
        </div>
        <textarea
          className="w-full h-full bg-gray-100 border-1 border-gray-200 resize-none rounded-md text-sm p-2"
          readOnly={true}
          value={caption}
        ></textarea>
      </div>
      <button
        onClick={() => setIsHidden(false)}
        className={`fixed top-1/2 -translate-y-1/2 right-0 bg-white border-1 border-gray-200 rounded-l-md shadow-lg px-2 py-3 text-xs text-gray-600 hover:bg-gray-50 transition-transform duration-300 ease-in-out ${
          isHidden ? "translate-x-0" : "translate-x-full"
        }`}>⬅ Caption</button>
    </>
  )
}
