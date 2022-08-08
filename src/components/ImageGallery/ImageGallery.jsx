import { Component } from 'react';
import GalleryList from './ImageGallery.styled';
import GalleyItem from '../ImageGalleryItem/ImageGalleryItem';

class Gallery extends Component {
  render() {
    return (
      <GalleryList>
        <GalleyItem />
      </GalleryList>
    );
  }
}

export default Gallery;
