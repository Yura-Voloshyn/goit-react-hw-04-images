import {
  StyledHeader,
  StyledForm,
  StyledSearchFormBtn,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputValue = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast('can`t be empty');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSearchFormBtn type="submit">
          <AiOutlineSearch
            style={{
              width: '20',
              height: '20',
              verticalAlign: 'middle',
            }}
          />
          <StyledSpan>Search</StyledSpan>
        </StyledSearchFormBtn>

        <StyledInput
          onChange={handleInputValue}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
// class Searchbar1 extends Component {
//   state = {
//     searchQuery: '',
//   };
//   handleImputValue = e => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
// if (this.state.searchQuery.trim() === '') {
//   toast('can`t be empty');
//   return;
// }
//
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };
//   render() {
//     return (
//       <StyledHeader>
//         <StyledForm onSubmit={this.handleSubmit}>
//           <StyledSearchFormBtn type="submit">
//             <AiOutlineSearch
//               style={{
//                 width: '20',
//                 height: '20',
//                 verticalAlign: 'middle',
//               }}
//             />
//             <StyledSpan>Search</StyledSpan>
//           </StyledSearchFormBtn>

//           <StyledInput
//             onChange={this.handleImputValue}
//             value={this.state.searchQuery}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </StyledForm>
//       </StyledHeader>
//     );
//   }
// }

export default Searchbar;
