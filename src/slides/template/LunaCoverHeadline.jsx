import logo from "./../../assets/Brand Title (512).png";
import SlideArrow from "../component/SlideArrow";
import SlideNumber from "../component/SlideNumber";

export default function LunaCoverHeadline({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top', index = 1 }) {

  let image_to_display = null;
  if (image) {
    image_to_display = <img
      className="absolute top-[40%] left-0 h-[60%] w-full"
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
      <div className="absolute bottom-0 left-0 h-[80%] w-full bg-linear-to-t from-blue-950/50 to-blue-900/0 opacity-50"></div>
      <div className="absolute top-[40%] left-0 h-[30%] w-full bg-linear-to-b from-zinc-950/20 to-zinc-950/0"></div>
      <div className="absolute top-0 left-0 h-[10%] w-full bg-blue-900"></div>
      <img src={logo} className="absolute top-0 left-0 h-[10%] pl-3" />
      <div className="absolute top-[10%] left-0 h-[30%] p-8 pt-0 bg-blue-900">
        <h1 className="text-4xl mb-4 text-white font-bold drop-shadow">{judul}</h1>
        <p className="absolute bottom-0 left-0 translate-y-full text-justify text-white font-bold bg-blue-950 px-4 py-2">{materi}</p>
      </div>
      <small className="absolute top-0 right-0 h-[10%] pr-6 flex items-center text-white text-xs">Foto: Wikimedia</small>
      <div className="absolute bottom-0 right-0 text-4xl p-6 pr-8 text-white"><SlideArrow index={index} /></div>
    </article>
  )
}