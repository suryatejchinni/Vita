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

  //Choices display button

  var btn_chiros = document.getElementById("chiros_btn");
  var btn_chimak = document.getElementById("chimak_btn");
  var btn_crius = document.getElementById("crius_btn");

  var x1 = document.getElementById("Chiros_options");
  var x2 = document.getElementById("Crius_options");
  var x3 = document.getElementById("Chimak_options");
  
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  btn1.addEventListener("change",function(e){
  
      //Get File
      
      var file1 = e.target.files[0];
  
      //Get Reference
      var ref1 = firebase.storage().ref('photos/1'+file1.name);
  
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
    var ref2 = firebase.storage().ref('photos/2'+file2.name);
  
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
    var ref3 = firebase.storage().ref('photos/3'+file3.name);
  
  
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
    var alt_phone = getInputVal('alt_phone');

    var value1 = getCheckedCheckboxesFor("prod");
    var value2 = getCheckedCheckboxesFor("prod1");
    var value3 = getCheckedCheckboxesFor("prod2");
    var country = document.getElementById("country_picker").value;
  
    // Save message
    saveMessage(name, company, email, phone,alt_phone, message,downloadURL,downloadURL2,downloadURL3,value1,value2,value3,country);
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
    up1.value=0;
    up2.value=0;
    up3.value=0;
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone,alt_phone, message,url1,url2,url3,value1,value2,value3,country){
    docRef.add({
      name: name,
      company:company,
      email:email,
      phone:phone,
      Alternate_phone:alt_phone,
      message:message,
      url1:url1,
      url2:url2,
      url3:url3,
      chiros:value1,
      crius:value3,
      chimak:value2,
      country:country
    });
    up1.value=0;
    up2.value=0;
    up3.value=0;
  }

  function getCheckedCheckboxesFor(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [], valuess=" ";
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
        valuess= valuess+", "+el.value;
    });
    return valuess;
}
//Radio Button Logic

  function show1()
{
  var x = document.getElementById("Chiros_options");
    if (x1.style.display === "none") {
        x1.style.display = "flex";
        x2.style.display = "none";
        x3.style.display = "none";
    } else {
        x1.style.display = "none";
    }
}

function show2()
{
  
    if (x2.style.display === "none") {
      x1.style.display = "none";
      x2.style.display = "flex";
      x3.style.display = "none";
    } else {
        x2.style.display = "none";
    }
}
function show3()
{
  
    if (x3.style.display === "none") {
      x1.style.display = "none";
      x2.style.display = "none";
      x3.style.display = "flex";
    } else {
        x3.style.display = "none";
    }
   
}

