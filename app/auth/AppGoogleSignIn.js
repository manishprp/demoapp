import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AuthConstants from './AuthConstants';
import ResponseObject from '../utility/ResponseObject';
import auth from '@react-native-firebase/auth';
import {StoreValue} from '../utility/LocalStorage';

const signin = async () => {
  let answer = ResponseObject();
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );

    auth().signInWithCredential(googleCredential);
    answer = await StoreValue('token', googleCredential?.token, true);
  } catch (error) {
    answer.success = false;
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      answer.message = 'user cancelled the login flow';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      answer.message = 'operation (e.g. sign in) is in progress already';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      answer.message = 'play services not available or outdated';
    } else {
      answer.message = 'some other error happened';
    }
  } finally {
    return answer;
  }
};

async function AppGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: AuthConstants.webClientId,
    offlineAccess: true,
  });

  return await signin();
}

export default AppGoogleSignIn;
