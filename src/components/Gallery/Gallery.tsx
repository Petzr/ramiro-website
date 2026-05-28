import './Gallery.scss';

interface GalleryPhoto {
  id: number;
  label: string;
  src: string | null;
  alt: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 1, label: 'Foto 1', src: null, alt: 'Galerij foto 1' },
  { id: 2, label: 'Foto 2', src: null, alt: 'Galerij foto 2' },
  { id: 3, label: 'Foto 3', src: null, alt: 'Galerij foto 3' },
  { id: 4, label: 'Foto 4', src: null, alt: 'Galerij foto 4' },
  { id: 5, label: 'Foto 5', src: null, alt: 'Galerij foto 5' },
  { id: 6, label: 'Foto 6', src: null, alt: 'Galerij foto 6' },
];

function GalleryItem({ photo }: { photo: GalleryPhoto }) {
  const content = photo.src
    ? <img className="gallery__image" src={photo.src} alt={photo.alt} />
    : <span className="gallery__placeholder-label">{photo.label}</span>;

  return (
    <div className="gallery__item">
      {content}
    </div>
  );
}

function Gallery() {
  const items = GALLERY_PHOTOS.map((photo: GalleryPhoto) => (
    <GalleryItem key={photo.id} photo={photo} />
  ));

  return (
    <section className="gallery">
      <div className="gallery__inner">
        <div className="gallery__heading">
          <span className="gallery__accent" />
          <h2 className="gallery__title">Galerij</h2>
        </div>
        <div className="gallery__grid">
          {items}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
