import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  return (
    <>
      <h1>This is Sign In Page</h1>
      <SignIn />
      <SignUp />
    </>
  );
};

export default Authentication;
