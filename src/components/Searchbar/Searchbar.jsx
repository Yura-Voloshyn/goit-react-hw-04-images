import {
  StyledHeader,
  StyledForm,
  StyledSearchFormBtn,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';

import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = () => {
  return (
    <StyledHeader>
      <StyledForm>
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
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

export default Searchbar;
