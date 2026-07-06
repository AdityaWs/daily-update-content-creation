export default function TemplatePlainPhoto({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top', index = 1 }) {

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
      <div className="absolute h-[55%] top-[45%] left-0 p-8 bg-zinc-900/60 backdrop-blur-lg">
        <h1 className="text-3xl mb-4 text-blue-400 font-bold drop-shadow">{judul}</h1>
        <p className="text-justify text-white text-sm drop-shadow">{materi}</p>
      </div>
      <small className="absolute bottom-0 left-0 p-8 text-white">Foto: Wikimedia</small>
      <p className="absolute bottom-0 right-0 pr-10 pb-7 text-4xl text-white">→</p>
    </article>
  )
}