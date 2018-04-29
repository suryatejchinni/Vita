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
  //const docRef = firestore.collection('registration').orderBy('company').limit(1);
  
  var downloadURL = 0;
  var downloadURL2 = 0;
  var downloadURL3 = 0;
  var items = [];
  var select = document.getElementById("selectNumber"); 
  var img1 = document.getElementById("visit");
  var img2 = document.getElementById("visit1");
  var img3 = document.getElementById("visit2");


  var name_s = document.getElementById('name');
  var company_s = document.getElementById('company');
  var email_s = document.getElementById('email');
  var phone_s = document.getElementById('phone');
  var message_s = document.getElementById('message');
  var alt_phone_s = document.getElementById('alt_phone');
  var crius_s = document.getElementById('crius');
  var chimak_s = document.getElementById('chimak');
  var chiros_s = document.getElementById('chiros');
  var emptyref;
  var url1_s,url2_s,url3_s;
   
  //document.getElementById('myForm').addEventListener('submit',viewForm);

  function viewForm(e)
  {
    
    var test = select.value;
    console.log("id : "+test);
    emptyref = citiesRef.doc(test);
    emptyref.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        url1_s =doc.data().url1;
        url2_s =doc.data().url2;
        url3_s =doc.data().url3;

        img1.src=""+url1_s;
        img2.src=""+url2_s;
        img3.src=""+url3_s;
        company_s.value=doc.data().company;
        email_s.value=doc.data().email;
        phone_s.value=doc.data().phone;
        message_s.value=doc.data().message;
        name_s.value=doc.data().name;
        alt_phone_s.value = doc.data().Alternate_phone;
        crius_s.value = doc.data().crius;
        chimak_s.value = doc.data().chimak;
        chiros_s.value = doc.data().chiros;
        country_s.value = doc.data().country;


       // img1.setAttribute
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  }
 
  var selectedValue;// = element.options[element.selectedIndex].value;

  var citiesRef = firestore.collection('registration');
  var allCities = citiesRef.get()
      .then(snapshot => {
          snapshot.forEach(doc => {
              items.push(doc.id);
              //console.log(items);
              var el = document.createElement("option");
              el.textContent = doc.data().name + ", "+doc.data().company;
              el.value = doc.id;
              select.appendChild(el);
              //visit.setAttribute("src",""+doc.data().url1);
          });
      })
      .catch(err => {
          console.log('Error getting documents', err);
      }); 
  
      

    
   
  

  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', updateForm);
  
  // Submit form
  function updateForm(e){
    e.preventDefault();
    console.log("In button");
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var alt_phone = getInputVal('Alternate_phone')
    var message = getInputVal('message');
    var chiros = getInputVal('chiros');
    var chimak = getInputVal('chimak');
    var crius = getInputVal('crius');
    var country = getInputVal('country');
  
    // Save message
    saveMessage(name, company, email, phone,alt_phone, message,url1,url2,url3,value1,value2,value3,country);
  
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
  function saveMessage(name, company, email, phone,alt_phone, message,url1,url2,url3,value1,value2,value3,country){
    emptyref.set({
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
  }


  function openImg(imgs) {
    console.log("In EXPAND");
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }