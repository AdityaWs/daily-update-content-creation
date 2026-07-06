import logo from "./../../assets/Brand Title (512) invert.png";

export default function LunaReflectionPadded({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top' }) {

  let image_to_display = null;
  if (image) {
    image_to_display = <img
      className="h-[45%] w-full px-15 pt-20"
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
      <img src={logo} className="absolute top-0 left-0 h-[10%] pl-3" />
      <div className="px-15 pt-5">
        <h1 className="text-3xl mb-4 text-blue-900 font-bold">{judul}</h1>
        <p className="text-justify text-sm">{materi}</p>
      </div>
      <small className="absolute bottom-0 left-0 p-8">Foto: Wikimedia</small>
      <p className="absolute bottom-0 right-0 pr-10 pb-7 text-4xl">→</p>
    </article>
  )
}