import { SnackbarLike, SnackbarText } from "../styled/main";

const Snackbar = (props) => {
  return (
    <SnackbarLike>
      {props.props === "wishlist" ? (
        <SnackbarText>Successfully added to wishlist !</SnackbarText>
      ) : (
        <SnackbarText>Successfully added to cart !</SnackbarText>
      )}
    </SnackbarLike>
  );
};

export default Snackbar;
