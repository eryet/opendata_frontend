import { makeStyles } from "@material-ui/core/styles";
import NCNU from "../../static/images/ncnu.jpg";

const useStyles = makeStyles((theme) => ({
  loginimage: {
    backgroundImage: `url(${NCNU})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  },
  paper: {
    textAlign: "center",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
    boxSizing: "border-box",
    padding: "30px",
  },
  loginfont: {
    fontWeight: "bold",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: "bold",
  },
}));

export default useStyles;
