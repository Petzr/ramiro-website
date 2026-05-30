import './GalleryGrid.scss';
import GalleryItem, { GalleryPhoto } from './GalleryItem';

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { label: 'buitenspel-poster', src: '/images/buitenspel-poster.jpg', alt: 'buitenspel-poster' },
  { label: 'black-pose', src: '/images/black-pose.jpg', alt: 'black-pose' },
  { label: 'ramiro', src: '/images/ramiro.jpeg', alt: 'ramiro' },
  { label: 'fotoshootstyle', src: '/images/fotoshootstyle.jpeg', alt: 'fotoshootstyle' },
  { label: 'stacked-ramiro', src: '/images/stacked-ramiro.jpeg', alt: 'stacked-ramiro' },
  { label: 'cat-fist', src: '/images/cat-fist.jpg', alt: 'cat-fist' },
  // { label: 'cat-sitting', src: '/images/cat-sitting.jpg', alt: 'cat-sitting' },
  { label: 'nude-in-woods', src: '/images/nude-in-woods.jpg', alt: 'nude-in-woods' },
  { label: 'half-naked-podium', src: '/images/half-naked-podium.jpg', alt: 'half-naked-podium' },
  { label: 'friends-in-field', src: '/images/friends-in-field.jpg', alt: 'friends-in-field' },
  { label: 'wij-zijn-bang-poster', src: '/images/wij-zijn-bang-poster.jpg', alt: 'wij-zijn-bang-poster' },
  { label: 'ramiro-closeup', src: '/images/ramiro-closeup.jpeg', alt: 'ramiro-closeup' },
  { label: 'ramiro-serious', src: '/images/ramiro-serious.jpg', alt: 'ramiro-serious' },
  { label: 'mirror-picture', src: '/images/mirror-picture.jpg', alt: 'mirror-picture' },
  { label: 'cat-piano', src: '/images/cat-piano.jpg', alt: 'cat-piano' },
  { label: 'dark-ramiro', src: '/images/dark-ramiro.jpeg', alt: 'dark-ramiro' },
];

function GalleryGrid() {
  const items = GALLERY_PHOTOS.map((photo: GalleryPhoto, index: number) => (
    <GalleryItem key={index} photo={photo} />
  ));

  return (
    <section className="gallery">
      <div className="gallery__inner">
        <div className="gallery__grid">
          {items}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;
