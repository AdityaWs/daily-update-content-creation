import { useGlobalState } from "../../AppProvider"

export default function SlideArrow({ index }) {
  const { g_content } = useGlobalState();

  if (!Object.hasOwn(g_content, 'slides')) {
    return <span>→</span>
  }

  const slide_count = g_content.slides.length;

  if (index == 1) {
    return <span className="flex flex-row items-center gap-2"><i className="text-xs pt-1">yuk di scroll</i> →</span>;
  }

  if (index == Math.round(slide_count / 2)) {
    return <span className="flex flex-row items-center gap-2"><i className="text-xs pt-1">ayo scroll lagi, udah di pertengahan</i> →</span>;
  }

  if (index == slide_count - 1) {
    return <span className="flex flex-row items-center gap-2"><i className="text-xs pt-1">dikit lagi</i> →</span>;
  }

  if (index == slide_count + 1) {
    return <span className="flex flex-row items-center gap-2"><i className="text-xs pt-1">terakhir</i> →</span>;
  }

  return <span>→</span>;
}