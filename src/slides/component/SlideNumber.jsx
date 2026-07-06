export default function SlideNumber({ index }) {
  return (
    <div className="absolute top-0 right-0 w-10 h-10 bg-blue-900 text-white text-xl flex justify-center items-center">{index}</div>
  );
}