import * as firebase from "firebase"
import { Alert } from "react-native"

const config = {
  apiKey: "AIzaSyBZM6Jk7QWZ6W5Z2bIstBgBf7kn6FMmX-w",
  authDomain: "kanca-app.firebaseapp.com",
  databaseURL: "https://kanca-app.firebaseio.com",
  projectId: "kanca-app",
  storageBucket: "kanca-app.appspot.com",
  messagingSenderId: "524884110564",
}

export const init = () => {
  firebase.initializeApp(config)
}

export const login = async (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    return userCredential
  } catch (err) {
    Alert.alert("Error", err.message)
  }
  return null
}
