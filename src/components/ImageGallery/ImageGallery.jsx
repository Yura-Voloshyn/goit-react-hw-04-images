import GalleryList from './ImageGallery.styled';
import GalleyItem from '../ImageGalleryItem/ImageGalleryItem';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  return (
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
