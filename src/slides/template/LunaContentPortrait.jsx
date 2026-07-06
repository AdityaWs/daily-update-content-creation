import logo from "./../../assets/Brand Title (512) invert.png";

export default function LunaContentPortrait({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top' }) {

  let image_to_display = null;
  if (image) {
    image_to_display = <img
      className="absolute top-[10%] h-[45%] w-full px-24"
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
      <div className="absolute top-[45%] p-8">
        <h1 className="text-3xl pb-4 text-blue-900 font-bold bg-white inline-block pt-4 pr-4 max-w-[60%]">{judul}</h1>
        <p className="text-justify text-sm">{materi}</p>
      </div>
      <small className="absolute bottom-0 left-0 p-8">Foto: Wikimedia</small>
      <p className="absolute bottom-0 right-0 pr-10 pb-7 text-4xl">→</p>
    </article>
  )
}