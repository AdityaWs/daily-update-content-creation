export default function FormatMateri({ teks }) {
  if (!teks) return null;

  const regex = /\*([^*]+)\*|\(([^)]+)\)/g;
  const bagian = teks.split(regex);
  const matches = [...teks.matchAll(regex)];

  let matchIndex = 0;

  return (
    <span>
      {bagian.map((item, index) => {
        if (item === undefined) {
          return null;
        }

        const currentMatch = matches[matchIndex];

        if (currentMatch) {
          if (item === currentMatch[1]) {
            matchIndex++;
            return <strong key={index} className="font-bold">{item}</strong>;
          }
          if (item === currentMatch[2]) {
            matchIndex++;
            return <em key={index} className="italic">{item}</em>;
          }
        }
        return item;
      })}
    </span>
  );
}