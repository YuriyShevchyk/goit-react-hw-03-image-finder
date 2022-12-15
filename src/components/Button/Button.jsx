import { ButtonLoadMore } from './Button.styled';

export default function Button({ onLoadMore }) {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMore}>
      load more
    </ButtonLoadMore>
  );
}