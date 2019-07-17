import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseBackEnd = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA_ZXK6cTXoZposHVkhTCcR7-Xs0YLwwUs",
        authDomain: "myproject-ea169.firebaseapp.com",
        databaseURL: "https://myproject-ea169.firebaseio.com",
        projectId: "myproject-ea169",
        storageBucket: "myproject-ea169.appspot.com",
        messagingSenderId: "395229971218",
        appId: "1:395229971218:web:eca7f961e18caebe"
      };

      if (!firebase.apps.length) {
        var myContact = firebase.initializeApp(firebaseConfig);
        return myContact;
    }
      
    return firebase.app();
}

export default firebaseBackEnd;