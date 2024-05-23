import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import AuthConstants from './AuthConstants';

const signin = async () => {
  try {
    console.log('GoogleSignin', GoogleSignin);

    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.signIn();
    console.log('userInfo', userInfo);
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    console.log('googleCredential', googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);

    //setState({userInfo});
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('user cancelled the login flow');
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('operation (e.g. sign in) is in progress already');
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log(' play services not available or outdated');
      // play services not available or outdated
    } else {
      // some other error happened
      console.log('some other error happened', error);
    }
  }
};

async function AppGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: AuthConstants.webClientId,
    offlineAccess: true,
  });

  const data = await signin();
}

export default AppGoogleSignIn;
