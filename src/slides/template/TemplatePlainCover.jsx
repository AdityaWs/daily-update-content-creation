export default function TemplatePlainCover({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top', index = 1 }) {

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
      <div className="absolute bottom-0 left-0 p-8 pb-16 bg-red-900/90">
        <h1 className="text-4xl mb-4 text-white font-bold drop-shadow">{judul}</h1>
        <p className="absolute top-0 left-0 -translate-y-full text-justify text-white font-bold bg-red-900 px-4 py-2">{materi}</p>
      </div>
      <small className="absolute top-0 right-0 p-8 text-white">Foto: Wikimedia</small>
    </article>
  )
}
