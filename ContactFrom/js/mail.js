document.addEventListener("DOMContentLoaded", function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDqiTLXtvGPu3RdIEzMyOLEAMc7e-L5B04",
    authDomain: "sa-portal-4b5b2.firebaseapp.com",
    projectId: "sa-portal-4b5b2",
    storageBucket: "sa-portal-4b5b2.appspot.com",
    messagingSenderId: "210819993512",
    appId: "1:210819993512:web:f78fe5667856ec42f2d79d",
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  function saveFormData() {
    const form = document.getElementById("Suggestions_form");

    const name = form.name.value;
    const email = form.email.value;
    const CINECID = form.CINECID.value;
    const message = form.message.value;

    db.collection("Suggestions")
      .add({
        name: name,
        email: email,
        CINECID: CINECID,
        message: message,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        // Clear form after successful submission
        form.reset();
        // Redirect to success.html after successful submission
        window.location.href = "../landing.html";
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  const form = document.getElementById("Suggestions_form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    saveFormData();
  });
});
