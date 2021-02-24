import app from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyDD5IebfZA_w4SKq7TegViGxrJzJt_yRi8",
  authDomain: "agram-bfae8.firebaseapp.com",
  projectId: "agram-bfae8",
  storageBucket: "agram-bfae8.appspot.com",
  messagingSenderId: "826518520557",
  appId: "1:826518520557:web:b2dcf2084d6e75393982e4",
  measurementId: "G-4LQKFQYHW5"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}
   
export default Firebase;  