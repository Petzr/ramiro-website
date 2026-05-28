import './Gallery.scss';
import GalleryItem, { GalleryPhoto } from './GalleryItem';

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 1, label: 'Foto 1', src: null, alt: 'Galerij foto 1' },
  // Voorbeeld met echte afbeelding:
  // { id: 1, label: 'Foto 1', src: '/images/IMG_7710.JPG', alt: 'Ramiro op het podium' },
  { id: 2, label: 'Foto 2', src: null, alt: 'Galerij foto 2' },
  { id: 3, label: 'Foto 3', src: null, alt: 'Galerij foto 3' },
];

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
        <div className="gallery__more">
          <a className="gallery__more-link" href="/gallery">Kijk meer</a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
