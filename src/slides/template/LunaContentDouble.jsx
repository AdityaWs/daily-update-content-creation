import logo from "./../../assets/Brand Title (512) invert.png";

export default function LunaContentDouble({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top' }) {

  let image_to_display = null;
  if (image) {
    image_to_display = <img
      className="h-full w-1/2"
      style={{
        objectPosition: img_object_position,
        objectFit: img_object_fit,
      }}
      id="slide-image"
      src={image}/>
  }

  return (
    <article className="relative h-[720px] w-[540px] bg-white">
      <img src={logo} className="absolute top-0 left-0 h-[10%] pl-3" />
      <div className="flex flex-col gap-8 p-8 justify-center h-full pt-24">
        <div>
          <h1 className="text-3xl text-center text-blue-900 font-bold">{judul}</h1>
        </div>
        <div className="gap-8 flex flex-row">
          <p className="text-justify text-sm w-1/2">{materi}</p>
          {image_to_display}
        </div>
      </div>
      <small className="absolute bottom-0 left-0 p-8">Foto: Wikimedia</small>
      <p className="absolute bottom-0 right-0 pr-10 pb-7 text-4xl">→</p>
    </article>
  )
}