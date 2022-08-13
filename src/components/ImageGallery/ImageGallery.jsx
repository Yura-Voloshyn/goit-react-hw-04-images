// import { Component } from 'react';
import { useState, useEffect } from 'react';
import GalleryList from './ImageGallery.styled';
import GalleyItem from '../ImageGalleryItem/ImageGalleryItem';
import getApiResult from '../../services/apiImageService';
import Button from '../Button';
import LoaderWrapper from '../Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Gallery = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    // const updatePage = searchQuery !== query ? 1 : page;
    // if (prevProps.searchQuery !== searchQuery || prevState.page !== page) {
    // }
    async function getFetch() {
      try {
        setLoading(true);
        const updatedImages = await getApiResult(searchQuery, page);
        if (updatedImages.length === 0) {
          toast('No results');
          setLoading(false);
          return;
        }

        // setImages(updatedImages);
        // setPage(1);

        setImages(prevImages => [...prevImages, ...updatedImages]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getFetch();
    // if (searchQuery !== searchQuery) {
    //   setImages(updatedImages);
    //   setPage(1);
    // }
  }, [page, searchQuery]);
  // const onLoadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  return (
    <>
      <GalleryList>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <GalleyItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </GalleryList>
      {images.length !== 0 && !loading && (
        <Button loadMore={() => setPage(prevPage => prevPage + 1)} />
      )}
      {loading && <LoaderWrapper />}
    </>
  );
};

// class Gallery1 extends Component {
//   state = {
//     images: [],
//     loading: false,
//     page: 1,
//   };
//   componentDidUpdate = async (prevProps, prevState) => {
//     const { searchQuery } = this.props;
//     const { page } = this.state;
//     const updatePage = prevProps.searchQuery !== searchQuery ? 1 : page;
//     if (prevProps.searchQuery !== searchQuery || prevState.page !== page) {
//       try {
//         this.setState({ loading: true });
//         const updatedImages = await getApiResult(searchQuery, updatePage);
//         if (updatedImages.length === 0) {
//           toast('No results');
//           this.setState({ loading: false });
//         }
// if (prevProps.searchQuery !== searchQuery) {
//   this.setState({ images: updatedImages, page: 1 });
// }
// if (prevState.page !== page && page !== 1) {
//   this.setState({
//     images: [...this.state.images, ...updatedImages],
//   });
// }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
// if (prevProps.searchQuery !== searchQuery) {
//   this.setState({ images: updatedImages, page: 1 });
// }
//   };
//   onLoadMore = () => {
//     this.setState({ page: this.state.page + 1 });
//   };
//   render() {
//     const { images, loading } = this.state;
//     return (
//       <>
//         <GalleryList>
//           {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//             <GalleyItem
//               key={id}
//               webformatURL={webformatURL}
//               tags={tags}
//               largeImageURL={largeImageURL}
//             />
//           ))}
//         </GalleryList>
//         {images.length !== 0 && !loading && (
//           <Button loadMore={this.onLoadMore} />
//         )}
//         {this.state.loading && <LoaderWrapper />}
//       </>
//     );
//   }
// }
Gallery.propTypes = {
  searchQuery: PropTypes.string,
};

export default Gallery;

// largeImageURL
