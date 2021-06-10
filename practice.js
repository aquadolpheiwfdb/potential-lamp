
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZIm2_q4gpi5Iegp9MRqgymAvC2CBNBNY",
    authDomain: "practice-project-b3c49.firebaseapp.com",
    databaseURL: "https://practice-project-b3c49-default-rtdb.firebaseio.com",
    projectId: "practice-project-b3c49",
    storageBucket: "practice-project-b3c49.appspot.com",
    messagingSenderId: "654321843707",
    appId: "1:654321843707:web:fcf48091a48f2710cadf5e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser(){
      user_name=document.getElementById("user_name").value;
      age=document.getElementById("age").value;
      favorite_color=document.getElementById("favorite_color").value;
      favorite_animal=document.getElementById("favorite_animal").value;
      school_grade=document.getElementById("school_grade").value;
      sibling_count=document.getElementById("sibling_count").value
      firebase.database().ref("/").child(user_name).update({
          name: user_name,
          age: age,
          favorite_color: favorite_color,
          favorite_animal: favorite_animal,
          school_grade: school_grade,
          sibling_count: sibling_count
      });
  };




  

