import './Gallery.scss';
import GalleryItem, { GalleryPhoto } from './GalleryItem';

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { label: 'black-pose', src: '/images/black-pose.jpg', alt: 'black-pose' },
  { label: 'wij-zijn-bang-poster', src: '/images/wij-zijn-bang-poster.jpg', alt: 'wij-zijn-bang-poster' },
  { label: 'mirror-picture', src: '/images/mirror-picture.jpg', alt: 'mirror-picture' },
];

function Gallery() {
  const items = GALLERY_PHOTOS.map((photo: GalleryPhoto, index: number) => (
    <GalleryItem key={index} photo={photo} />
  ));

  return (
    <section className="gallery">
      <div className="gallery__inner">
        <div className="gallery__grid">
          {items}
        </div>
        <div className="gallery__more">
          <a className="gallery__more-link" href="/gallery">Beijk meer</a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
