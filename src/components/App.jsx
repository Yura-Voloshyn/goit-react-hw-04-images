import React from 'react';

import Container from './App.styled';
// import Modal from './Modal';
import Searchbar from './Searchbar';
import Gallery from './ImageGallery';
// import LoaderWrapper from './Loader/Loader';
// import Button from './Button';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <Searchbar onSubmit={setSearchQuery} />
      <ToastContainer autoClose={3000} />
      <Gallery searchQuery={searchQuery} />
    </Container>
  );
};

// class App extends Component {
//   state = {
//     searchQuery: '',
//   };
//   handleFormSubmit = searchQuery => {
//     this.setState({ searchQuery });
//   };

//   render() {
//     return (
//       <Container>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ToastContainer autoClose={3000} />
//         <Gallery searchQuery={this.state.searchQuery} />
//       </Container>
//     );
//   }
// }

export default App;
