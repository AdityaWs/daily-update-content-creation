import logo from "./../../assets/DailyUpdate.png";
import SlideArrow from "../component/SlideArrow";
import SlideNumber from "../component/SlideNumber";

export default function DailyUpdateCoverFloatingSide({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top', index = 1 }) {

  let image_to_display = null;
  if (image) {
    image_to_display = <img
      className="absolute top-0 left-0 h-full w-full"
      style={{
        objectPosition: img_object_position,
        objectFit: img_object_fit,
      }}
      id="slide-image"
      src={image}/>
  }

  return (
    <article className="relative h-[720px] w-[540px] bg-white">
      {image_to_display}
      <div className="absolute bottom-0 left-0 h-[80%] w-full bg-linear-to-t from-red-950 to-red-900/0"></div>
      <div className="absolute top-0 left-0 h-[30%] w-full bg-linear-to-b from-zinc-950/80 to-zinc-950/0"></div>
      <img src={logo} className="absolute top-0 left-0 h-[10%] ml-4 mt-4" />
      <div className="absolute bottom-[10%] w-[90%] left-0 p-4 pb-8 bg-red-900 shadow-red-950 shadow-[8px_8px]">
        <h1 className="text-4xl mb-4 text-white font-bold drop-shadow">{judul}</h1>
        <p className="absolute top-0 left-0 -translate-y-full text-justify text-white font-bold bg-red-950 px-4 py-2">{materi}</p>
      </div>
      <small className="absolute top-0 right-0 h-[10%] pr-6 flex items-center text-white text-xs">Foto: Wikimedia</small>
      <div className="absolute bottom-0 right-0 text-4xl p-6 pr-8 text-white"><SlideArrow index={index} /></div>
    </article>
  )
}

