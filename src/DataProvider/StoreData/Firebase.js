import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseBackEnd = () => {
    const firebaseConfig = {
        // firebase cinfiguration
      };

      if (!firebase.apps.length) {
        var myContact = firebase.initializeApp(firebaseConfig);
        return myContact;
    }
      
    return firebase.app();
}

export default firebaseBackEnd;
