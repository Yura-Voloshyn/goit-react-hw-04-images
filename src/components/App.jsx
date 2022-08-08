import React, { Component } from 'react';
import Container from './App.styled';
import Modal from './Modal';
import Searchbar from './Searchbar';
import Gallery from './ImageGallery';
import LoaderWrapper from './Loader/Loader';
import Button from './Button';

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <Searchbar />
        <LoaderWrapper />
        <Gallery />
        <button
          style={{ width: '90px', marginLeft: 'auto', marginRight: 'auto' }}
          type="button"
          onClick={this.toggleModal}
        >
          open modal
        </button>
        <Button />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Hello</p>
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
