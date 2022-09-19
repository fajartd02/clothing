import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>This is Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </>
  );
};

export default SignIn;
