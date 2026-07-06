import * as htmlToImage from 'html-to-image';
import { useGlobalState } from '../AppProvider';

export async function downloadAllSlides(slide_count) {
  for (let index = 1; index <= slide_count; index++) {
    const slideElement = document.getElementById(`slide-${index}`);

    try {
      const dataUrl = await htmlToImage.toPng(slideElement, { pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `slide-${index}.png`;
      link.href = dataUrl;
      link.click();

      await new Promise((resolve) => setTimeout(resolve, 300));
    } catch (error) {
      console.error(`Gagal mendownload slide ke-${index + 1}:`, error);
    }
  }
}

export async function downloadSingleSlide(index) {
  const slideElement = document.getElementById(`slide-${index}`);
  try {
    const dataUrl = await htmlToImage.toPng(slideElement, { pixelRatio: 2 });
    const link = document.createElement('a');
    link.download = `slide-${index}.png`;
    link.href = dataUrl;
    link.click();

    await new Promise((resolve) => setTimeout(resolve, 300));
  } catch (error) {
    console.error(`Gagal mendownload slide ke-${index + 1}:`, error);
  }
}