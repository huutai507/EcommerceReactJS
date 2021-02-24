import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "contain",
    margin: "16px"
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between"
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
