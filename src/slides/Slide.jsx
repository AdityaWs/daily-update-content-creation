import { use, useEffect, useState } from "react";
import { findImageForKeyword } from './../utility/FindImageForKeyword';
import { useGlobalState } from "../AppProvider";
import FormatMateri from "./FormatMateri";
import { downloadSingleSlide } from "../utility/DownloadAllSlides";

export default function Slide({ kata_kunci_gambar, judul, materi, index = 1, template_to_use = 'default' }) {
  const { g_target_server_bahasa, g_templates, g_content } = useGlobalState();

  function cleanKeyword(keyword) {
    if (!keyword) return "";
    let cleaned = keyword;
    cleaned = cleaned.replace(/["'“”‘’[\]()]/g, "");
    const noiseWords = /\b(portrait|vector|illustration|photo|photography|image|picture|gambar|foto|sketsa|sketch|clipart|png|jpg|background|latar belakang|vintage)\b/g;
    cleaned = cleaned.replace(noiseWords, "");
    cleaned = cleaned.replace(/\\s+/g, " ").trim();
    return cleaned;
  }

  const [kata_kunci_digunakan, setKataKunciDigunakan] = useState('');
  const [input_kata_kunci, setInputKataKunci] = useState('');

  useEffect(() => {
    const cleaned = cleanKeyword(kata_kunci_gambar);
    setKataKunciDigunakan(cleaned);
    setInputKataKunci(cleaned);
    document.getElementById(`keyword-override-${index}`).value = cleaned;
  }, [kata_kunci_gambar]);

  const [target_server_bahasa, setTargetServerBahasa] = useState(g_target_server_bahasa);
  const [image_url, setImageUrl] = useState('https://placehold.co/600x400');
  const [override_image_url, setOverrideImageUrl] = useState('');
  const [image_loaded, setImageLoaded] = useState(false);
  const [style_object_fit, setStyleObjectFit] = useState('cover');
  const [style_object_position, setStyleObjectPosition] = useState('top');

  const [selected_template, setSelectedTemplate] = useState(template_to_use);
  const Template = g_templates[selected_template];

  /**
   * update jika nilai global target server bahasa berubah
   */
  useEffect(() => {
    setTargetServerBahasa(g_target_server_bahasa);
  }, [g_target_server_bahasa]);

  /**
   * load gambar dan update jika keyword atau target server bahasa di ubah
   */
  useEffect(() => {
    async function loadImage() {
      try {
        setImageLoaded(false);
        const url = await findImageForKeyword(kata_kunci_digunakan, target_server_bahasa);
        setOverrideImageUrl('');
        setImageUrl(url);
        setImageLoaded(true);
      } catch (error) {
        setImageLoaded(false);
      }
    }

    if (kata_kunci_digunakan || target_server_bahasa) {
      loadImage();
    }
  }, [kata_kunci_digunakan, target_server_bahasa]);

  let image_to_display = override_image_url || (image_loaded ? image_url : 'https://placehold.co/600x400');

  const handleImageOverride = (event) => {
    setOverrideImageUrl(event.target.value);
  }

  /**
   * filter konten
   */
  function bersihkanJudul(judulKotor) {
    if (!judulKotor) return "";
    let judulBersih = judulKotor.replace(/^slide\s*\d+\s*[:\-]?\s*/i, "");
    judulBersih = judulBersih.replace(/^\d+\s*[\.\-:]?\s*/, "");
    return judulBersih.trim();
  }

  judul = bersihkanJudul(judul);

  if (typeof materi === "string") {
    materi = <FormatMateri teks={materi} />
  }

  /**
   * function untuk kontrol
   */
  const changeObjectFit = () => {
    if (style_object_fit == 'cover') {
      setStyleObjectFit('contain');
    } else {
      setStyleObjectFit('cover');
    }
  }

  const changeObjectPosition = (position) => {
    setStyleObjectPosition(position);
  }

  const handleTargetServer = (bahasa) => {
    setTargetServerBahasa(bahasa);
  }

  const handleKeywordInput = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    setOverrideImageUrl('');
    setKataKunciDigunakan(input_kata_kunci);
  }

  return (
    <div className="relative mb-10">
      <div className="absolute top-0 left-0 translate-x-[-64px] text-2xl text-center w-[48px] flex flex-col gap-3">
        <button
         className="bg-zinc-800 text-white w-[48px] aspect-square">{index}</button>
        <button
         className="cursor-pointer bg-white border-1 border-gray-200 w-[48px] aspect-square transition duration-200 hover:bg-gray-300 hover:border-gray-300"
         onClick={() => changeObjectFit()}>
          <i className="bi bi-arrows-fullscreen"></i>
        </button>
        <button
         className="cursor-pointer bg-white border-1 border-gray-200 w-[48px] aspect-square transition duration-200 hover:bg-gray-300 hover:border-gray-300"
         onClick={() => changeObjectPosition('top')}>
          <i className="bi bi-arrow-bar-up"></i>
        </button>
        <button
         className="cursor-pointer bg-white border-1 border-gray-200 w-[48px] aspect-square transition duration-200 hover:bg-gray-300 hover:border-gray-300"
         onClick={() => changeObjectPosition('center')}>
          <i className="bi bi-align-center"></i>
        </button>
        <button
         className="cursor-pointer bg-white border-1 border-gray-200 w-[48px] aspect-square transition duration-200 hover:bg-gray-300 hover:border-gray-300"
         onClick={() => changeObjectPosition('bottom')}>
          <i className="bi bi-arrow-bar-down"></i>
        </button>
      </div>
      <button
        className="absolute top-0 left-0 -translate-y-[150%] cursor-pointer text-sm px-2 py-1 bg-white border-1 border-gray-200 rounded-sm transition duration-100 hover:border-red-500 hover:text-red-900 hover:bg-red-100"
        onClick={() => downloadSingleSlide(index)}>Download Slide <i className="bi bi-download"></i></button>
      <div id={`slide-${index}`}>
        <Template
          image={image_to_display}
          judul={judul}
          materi={materi}
          img_object_fit={style_object_fit}
          img_object_position={style_object_position}
          index={index}></Template>
      </div>
      <div className="flex flex-row pt-4 pb-2 gap-2 text-center">
        <small className="w-2/5 text-gray-500">Image Server: {target_server_bahasa}</small>
        <small className="w-3/5 text-gray-500">Image Keyword:</small>
      </div>
      <div className="flex flex-row pb-4 gap-2">
        <button
          className="cursor-pointer w-1/5 bg-gray-200 border-1 border-gray-300 py-2 rounded-sm transition duration-200 hover:bg-gray-100 hover:border-zinc-600"
          onClick={() => handleTargetServer('id')}>Use ID</button>
        <button
          className="cursor-pointer w-1/5 bg-gray-200 border-1 border-gray-300 py-2 rounded-sm transition duration-200 hover:bg-gray-100 hover:border-zinc-600"
          onClick={() => handleTargetServer('en')}>Use EN</button>
        <input
          className="cursor-text w-3/5 bg-white border-1 border-gray-200 rounded-sm p-2"
          type="text"
          id={`keyword-override-${index}`}
          placeholder="Keyword to replace"
          onChange={(event) => setInputKataKunci(event.target.value)}
          onKeyDown={handleKeywordInput} />
      </div>
      <input
        className="cursor-text w-full bg-white border-1 border-gray-200 rounded-sm p-2 mb-6"
        type="text"
        id={`keyword-override-${index}`}
        placeholder="Override image url"
        onKeyDown={handleImageOverride} />
      <div className="absolute top-0 right-0 translate-x-full w-[350px] pl-4">
        <p className="text-xs mb-2">Select Template:</p>
        {Object.keys(g_templates).map((templateKey) => {
          const isActive = selected_template === templateKey;
          return (
            <button
              key={templateKey}
              onClick={() => setSelectedTemplate(templateKey)}
              className={`cursor p-2 mr-2 mb-2 rounded text-xs font-medium transition-all inline-block truncate ${
                isActive
                  ? 'bg-red-500 text-white hover:bg-red-800'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}>
              {templateKey.replace(/_/g, ' ')}
            </button>
          );
        })}
      </div>
    </div>
  )
}
