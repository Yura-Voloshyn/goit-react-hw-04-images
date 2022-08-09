import StyledButton from './Button.styled';
const Button = ({ loadMore }) => {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        loadMore();
      }}
    >
      Load more
    </StyledButton>
  );
};

export default Button;
