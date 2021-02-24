import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 260,
    backgroundSize: "contain",
    margin: "16px"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  cartActions: {
    justifyContent: "space-between"
  },
  buttons: {
    display: "flex",
    alignItems: "center"
  },
  aline: {
    clear: "both",
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginRight: "20px",
    textOverflow: "ellipsis"
  }
}));
