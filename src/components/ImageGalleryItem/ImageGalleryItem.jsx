import { Component, useState } from 'react';
import { StyledLi, StyledItemImage } from './ImageGalleryItem.styled';
import Modal from '../Modal';
import PropTypes from 'prop-types';

const GalleyItem = ({ tags, webformatURL, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(showModal => ({ showModal: !showModal }));
  };
  return (
    <StyledLi>
      <StyledItemImage onClick={toggleModal} src={webformatURL} alt={tags} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </StyledLi>
  );
};

// class GalleyItem1 extends Component {
//   state = {
//     showModal: false,
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };
//   render() {
//     const { tags, webformatURL, largeImageURL } = this.props;
//     const { showModal } = this.state;
//     return (
//       <StyledLi>
//         <StyledItemImage
//           onClick={this.toggleModal}
//           src={webformatURL}
//           alt={tags}
//         />
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </StyledLi>
//     );
//   }
// }
GalleyItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default GalleyItem;
