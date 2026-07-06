import logo from "./../../assets/Brand Title (512) background.png";
import SlideArrow from "../component/SlideArrow";
import SlideNumber from "../component/SlideNumber";

export default function LunaReflectionPhoto({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top', index = 1 }) {

  let image_to_display = null;
  if (image) {
    image_to_display = <img
      className="absolute h-full w-full"
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
      <div className="absolute bottom-0 left-0 h-[25%] w-full bg-linear-to-t from-blue-900 to-blue-950/0"></div>
      <div className="absolute top-0 left-0 h-[25%] w-full bg-linear-to-b from-zinc-950/80 to-zinc-950/0 opacity-20"></div>
      <img src={logo} className="absolute top-0 left-0 h-[10%] pl-3" />
      <div className="absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[80px] w-[80%] p-4 bg-white shadow-blue-950 shadow-[8px_8px]">
        <h1 className="text-3xl mb-4 text-blue-900 font-bold">{judul}</h1>
        <p className="text-justify text-sm">{materi}</p>
      </div>
      <small className="absolute bottom-0 left-0 p-8 text-white">Foto: Wikimedia</small>
      <p className="absolute bottom-0 right-0 pr-10 pb-7 text-4xl text-white"><SlideArrow index={index} /></p>
      <SlideNumber index={index}/>
    </article>
  )
}