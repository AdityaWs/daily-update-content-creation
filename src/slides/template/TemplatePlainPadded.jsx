export default function TemplatePlainPadded({ image, judul, materi, img_object_fit = 'cover', img_object_position = 'top', index = 1 }) {

  let image_to_display = null;
  if (image) {
    image_to_display =
    <div className="grid place-items-center pt-20">
      <img
        className="max-h-60 w-[75%]"
        style={{
          objectPosition: img_object_position,
          objectFit: img_object_fit,
        }}
        id="slide-image"
        src={image}/>
    </div>
  }

  return (
    <article className="relative h-[720px] w-[540px] bg-white">
      {image_to_display}
      <div className="py-4 px-16">
        <h1 className="text-3xl mb-4 text-red-900 font-bold">{judul}</h1>
        <p className="text-justify text-sm">{materi}</p>
      </div>
      <small className="absolute bottom-0 left-0 p-8">Foto: Wikimedia</small>
      <p className="absolute bottom-0 right-0 pr-10 pb-7 text-4xl text-red-900">→</p>
    </article>
  )
}
