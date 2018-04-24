// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBNzBdIgVQtR-RfCrNveW8V9sEbR3JLqX8",
    authDomain: "vita-7a279.firebaseapp.com",
    databaseURL: "https://vita-7a279.firebaseio.com",
    projectId: "vita-7a279",
    storageBucket: "vita-7a279.appspot.com",
    messagingSenderId: "874638990060"};
  
  firebase.initializeApp(config);
  
  // Reference messages collection
  var firestore = firebase.firestore();
  const docRef = firestore.collection('registration');
  var downloadURL = 0;
  var downloadURL2 = 0;
  var downloadURL3 = 0;
  
  
  //Init photo uploads
  
  //Progress bars
  var up1 = document.getElementById("up1");
  var up2 = document.getElementById("up2");
  var up3 = document.getElementById("up3");
  
  //Upload button
  
  var btn1 = document.getElementById("vis1");
  var btn2 = document.getElementById("vis2");
  var btn3 = document.getElementById("vis3");
  
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  btn1.addEventListener("change",function(e){
  
      //Get File
      
      var file1 = e.target.files[0];
  
      //Get Reference
      var ref1 = firebase.storage().ref('photos/'+file1.name);
  
      //Upload the file
      var uploadTask = ref1.put(file1);
      //Update progress bar
      uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        up1.value=progress;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        downloadURL = uploadTask.snapshot.downloadURL;
        console.log(downloadURL);
      });
  
  
  
  });
  
  btn2.addEventListener("change",function(e){
  
    //Get File
    
    var file2 = e.target.files[0];
  
    //Get Reference
    var ref2 = firebase.storage().ref('photos/'+file2.name);
  
    //Upload the file
    var uploadTask1 = ref2.put(file2);
      //Update progress bar
      uploadTask1.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress1 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        up2.value=progress1;
        console.log('Upload is ' + progress1 + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        downloadURL2 = uploadTask1.snapshot.downloadURL;
        console.log(downloadURL);
      });
  });
  
  btn3.addEventListener("change",function(e){
  
    //Get File
    
    var file3 = e.target.files[0];
  
    //Get Reference
    var ref3 = firebase.storage().ref('photos/'+file3.name);
  
  
    //Upload the file
    var task2 = ref3.put(file3);
    //Update progress bar
    var uploadTask3 = ref3.put(file3);
      //Update progress bar
      uploadTask3.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress2 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        up3.value=progress2;
        console.log('Upload is ' + progress2 + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        downloadURL3 = uploadTask3.snapshot.downloadURL;
        console.log(downloadURL);
      });
  
  
  
  });
  // Submit form
  function submitForm(e){
    e.preventDefault();
    console.log("In button");
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message,downloadURL,downloadURL2,downloadURL3);
    downloadURL = "";
    downloadURL2 = "";
    downloadURL3 = "";


    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message,url1,url2,url3){
    docRef.add({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message,
      url1:url1,
      url2:url2,
      url3:url3,
    });
  }

//Radio Button Logic

  function show1()
{
  
}