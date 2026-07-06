import SlideArrow from "../component/SlideArrow";
import SlideNumber from "../component/SlideNumber";
import logo from "./../../assets/Brand Title (512).png";

export default function LunaClosingFoot({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top', index = 1 }) {

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
      <div className="absolute h-full w-full top-0 left-0 p-16 pt-32 bg-blue-900/90 flex flex-col justify-end">
        <p className="text-3xl mb-4 text-white font-bold drop-shadow max-w-[60%]">Follow untuk lebih banyak konten sejarah!</p>
        <h1 className="text-2xl mb-4 text-white font-bold drop-shadow">{judul}</h1>
        <div className="text-justify text-white text-sm drop-shadow">{materi}</div>
      </div>
      <img src={logo} className="absolute top-0 left-0 h-[10%] ml-8 mt-4" />
      <small className="absolute bottom-0 right-0 p-8 text-white">Foto: Wikimedia</small>
    </article>
  )
}