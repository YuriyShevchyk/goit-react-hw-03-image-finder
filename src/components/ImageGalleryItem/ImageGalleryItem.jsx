import {
    ImageGalleryItemLi,
    ImageGalleryItemImage,
  } from './ImageGalleryItem.styled';
  
  export default function ImageGalleryItem({
    webformatURL,
    largeImageURL,
    tags,
    onClick,
  }) {
    return (
      <ImageGalleryItemLi>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)}
        />
      </ImageGalleryItemLi>
    );
  }