import { useEffect, useState } from "react";
import { useGlobalState } from "../AppProvider"
import Slide from "./Slide";
import { downloadAllSlides } from "../utility/DownloadAllSlides";

export default function SlideViewer() {
  const { g_target_server_bahasa, setGTargetServerBahasa, g_content } = useGlobalState();

  const handleTargetBahasa = (bahasa) => {
    setGTargetServerBahasa(bahasa);
  }

  const [content, setContent] = useState(g_content);
  const [slide_count, setSlideCount] = useState(0);

  /**
   * update content jika ada content baru yang di import atau ubah
   */
  useEffect(() => {
    setContent(g_content)
    if (Object.hasOwn(g_content, 'slides')) {
      setSlideCount(g_content.slides.length + 2);
    }
  }, [g_content]);

  if (Object.keys(content).length === 0) {
    return (
      <>
        <div className="absolute z-9 top-0 left-0 w-full flex flex-row justify-center gap-3 p-3 bg-white border-b-1 border-gray-200">
          <button
            className="cursor-pointer bg-gray-200 border-1 border-gray-300 py-2 px-5 rounded-sm"
          >Import a content to start creating slide</button>
        </div>
        <main className="h-screen pt-[90px] w-full overflow-auto flex flex-col items-center">
          <div className="w-[540px] bg-white text-2xl p-8">
            <p>To start creating slides, please import a content in first</p>
          </div>
        </main>
      </>
    )
  }

  const controlNavbar =
    <div className="absolute z-9 top-0 left-0 w-full flex flex-row justify-center gap-3 p-3 bg-white border-b-1 border-gray-200">
      <button
        className="cursor-pointer bg-gray-200 border-1 border-gray-300 py-2 px-5 rounded-sm transition duration-100 hover:bg-gray-100 hover:border-zinc-600"
        onClick={() => handleTargetBahasa('id')}>Use ID</button>
      <button
        className="cursor-pointer bg-gray-200 border-1 border-gray-300 py-2 px-5 rounded-sm transition duration-100 hover:bg-gray-100 hover:border-zinc-600"
        onClick={() => handleTargetBahasa('en')}>Use EN</button>
      <button
        className="cursor-pointer bg-blue-500 text-white border-1 border-blue-600 py-2 px-5 rounded-sm transition duration-100 hover:bg-blue-800 hover:border-blue-800"
        onClick={() => downloadAllSlides(slide_count)}>Download All Slide ({slide_count})</button>
    </div>;

  /**
   * first step error checking
   */
  let errors = [];
  if (!Object.hasOwn(content, 'tanggal')) {
    errors.push(<span>missing key <b>tanggal</b></span>);
  }
  if (!Object.hasOwn(content, 'kata-kunci-gambar')) {
    errors.push(<span>missing key <b>kata-kunci-gambar</b></span>);
  }
  if (!Object.hasOwn(content, 'judul-hook')) {
    errors.push(<span>missing key <b>judul-hook</b></span>);
  }
  if (!Object.hasOwn(content, 'slides')) {
    errors.push(<span>missing key <b>slides</b></span>);
  }
  if (!Object.hasOwn(content, 'kalimat-penutup')) {
    errors.push(<span>missing key <b>kalimat-penutup</b></span>);
  }
  if (!Object.hasOwn(content, 'caption')) {
    errors.push(<span>missing key <b>caption</b></span>);
  }
  if (!Object.hasOwn(content, 'hashtags')) {
    errors.push(<span>missing key <b>hashtags</b></span>);
  }
  if (!Object.hasOwn(content, 'referensi')) {
    errors.push(<span>missing key <b>referensi</b></span>);
  }

  if (errors.length !== 0) {
    return (
      <>
        {controlNavbar}
        <main className="h-screen pt-[90px] w-full overflow-auto flex flex-col items-center">
          <div className="w-[540px] bg-white text-2xl p-8">
            <b className="w-100">ERROR:</b>
            {errors.map((message, index) => (
              <p key={index} className="w-100">{message}</p>
            ))}
          </div>
        </main>
      </>
    )
  }

  const coverSlide = <Slide
    kata_kunci_gambar={content['kata-kunci-gambar']}
    judul={content['judul-hook']}
    materi={content['tanggal']}
    template_to_use="cover_floating"/>

  const references = content.referensi.map((referensi, index) => {
    return <p key={index} className="w-[70%] mb-4">{referensi}</p>
  })

  const closingSlide = <Slide
    kata_kunci_gambar={content['kata-kunci-gambar']}
    judul={'Referensi:'}
    materi={references}
    template_to_use="closing_foot"
    index={content.slides.length + 2}/>;


  /**
   * generate slide for each slides in content dictionary
   */
  const slides_element = content.slides.map((slide_content, index) => {
    let slide_errors = [];
    if (!Object.hasOwn(slide_content, 'kata-kunci-gambar')) {
      slide_errors.push(<span>missing key <b>kata-kunci-gambar</b></span>)
    }
    if (!Object.hasOwn(slide_content, 'judul')) {
      slide_errors.push(<span>missing key <b>judul</b></span>)
    }
    if (!Object.hasOwn(slide_content, 'materi')) {
      slide_errors.push(<span>missing key <b>materi</b></span>)
    }

    if (slide_errors.length !== 0) {
      console.log('wtf');
      return (
        <div key={index + 2} className="relative w-[540px] h-[720px] bg-white text-2xl p-8 mb-8">
          <b className="w-100">ERROR:</b>
          {slide_errors.map((message, error_index) => (
            <p key={error_index} className="w-100">{message}</p>
          ))}
        </div>
      )
    }

    return <Slide
      key={index + 2}
      kata_kunci_gambar={slide_content['kata-kunci-gambar']}
      judul={slide_content.judul}
      materi={slide_content.materi}
      template_to_use="content_basic"
      index={index + 2}/>
  })

  return (
    <>
      {controlNavbar}
      <main className="h-screen pt-[90px] w-full overflow-auto flex flex-col items-center">
        {coverSlide}
        <div className="w-full h-[200px]"></div>
        {slides_element}
        {closingSlide}
      </main>
    </>
  )
}