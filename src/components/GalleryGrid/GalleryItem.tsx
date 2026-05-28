interface GalleryPhoto {
  id: number;
  label: string;
  src: string | null;
  alt: string;
}

function GalleryItem({ photo }: { photo: GalleryPhoto }) {
  const content = photo.src
    ? <img className="gallery__image" src={photo.src} alt={photo.alt} />
    : <span className="gallery__placeholder-label">{photo.label}</span>;

  const item = <div className="gallery__item">{content}</div>;

  return item;
}

export type { GalleryPhoto };
export default GalleryItem;
