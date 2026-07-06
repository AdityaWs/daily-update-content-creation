export default function TemplatePlainClosing({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top' }) {

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
      <div className="absolute h-full w-full top-0 left-0 p-16 bg-blue-900/85">
        <h1 className="text-2xl mb-4 text-white font-bold drop-shadow">{judul}</h1>
        <div className="text-justify text-white text-sm drop-shadow">{materi}</div>
      </div>
      <small className="absolute bottom-0 left-0 p-8 text-white">Foto: Wikimedia</small>
    </article>
  )
}