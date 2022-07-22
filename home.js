//random variables
var scrData = "";
const form = document.getElementById("form");


// Patient information
var firstName = document.getElementById("firstName"); // string
var lastName = document.getElementById("lastName"); // string
var birthday = document.getElementById("birthday"); // date
var medicareNumber = document.getElementById("medicareNumber"); // integer
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phoneNumber");

var sex = "";
if ((male = "male")) {
  sex = "male";
}

if ((female = "female")) {
  sex = "female";
}

if ((other = "other")) {
  sex = "other";
}


// get checkbox value =
var confusion = document.getElementById("confusion");
var cough = document.getElementById("cough");
var fever = document.getElementById("fever");
var sweating = document.getElementById("sweating");
var heartrate = document.getElementById("heartrate");
var nausea = document.getElementById("nausea");
var shortbreath = document.getElementById("shortbreath");
var breathing = document.getElementById("breathing");
var fatigue = document.getElementById("fatigue");
var dehydration = document.getElementById("dehydration");
var appetite = document.getElementById("appetite");


// main array with all patient data
var patients = JSON.parse(localStorage.getItem("patients") || "[]");

// array for patients 
var patient = [{
  "First Name": firstName,
  "Last Name": lastName,
  "Date of birth": birthday,
  "Medicare No.": medicareNumber,
  "Email address": email,
  "Phone no.": phoneNumber,
},
{
    "Confusion": confusion.checked,
    "Cough": cough.checked,
    "Fever": fever.checked,
    "Sweating": sweating.checked,
    "Heartrate": heartrate.checked,
    "Nausea": nausea.checked,
    "Shortbreath": shortbreath.checked,
    "Breathing": breathing.checked,
    "Fatigue": fatigue.checked,
    "Dehydration": dehydration.checked,
    "Appetite": appetite.checked
}
]


var confusion1 = "";
var cough1 = "";
var fever1 = "";
var sweating1 = "";
var heartrate1 = "";
var nausea1 = "";
var shortbreath1 = "";
var breathing1 = "";
var fatigue1 = "";
var dehydration1 = "";
var appetite1 = "";



// I THINK THIS BE THE ONE AFTER 30 ATTEMPTS
var imageInput2 = document.getElementById("imageInput");
var imageInput = document.getElementById("imageInput2");
 
 // if you expect files by default, make this disabled
  // we will wait until the last file being processed
  
  let isFilesReady = true

  // This is for storing the base64 strings
    let myFiles = {}

  const fileInput = imageInput


// THE ACTUAL EVENT CHANGE THING PLEASE WORK PLEASE WORK
  fileInput.addEventListener('change', async (event) => {
    
    // clean up files
    myFiles = {}
    
    // set state of files to false until each of them is processed
    isFilesReady = false
  
    const files = event.srcElement.files;
  
    const filePromises = Object.entries(files).map(item => {
      return new Promise((resolve, reject) => {
        const [index, file] = item
        const reader = new FileReader();
        reader.readAsBinaryString(file);
  
        reader.onload = function(event) {
          // Convert file to Base64 string
      // btoa is built int javascript function for base64 encoding
          myFiles['picture'] = btoa(event.target.result)
  
          resolve()
        };
        reader.onerror = function() {
          console.log("can't read the file");
          reject()
        };
      })
    })
  
    Promise.all(filePromises)
      .then(() => {
        console.log('ready to submit')
        alert("Image has been uploaded")
        isFilesReady = true
        console.log(myFiles)
      })
      .catch((error) => {
        console.log(error)
        console.log('something wrong happened')
        alert("Something wrong has happened")
      })
  })

  const formElement = document.getElementById('form')

const handleForm = async (event) => {
  event.preventDefault();

  if(!isFilesReady){
    console.log('files still getting processed')
	return
  }
}

formElement.addEventListener('submit', handleForm)
// END

// make a function that gives all values of inputs
function getValues() {
  
  let values = ""
  values = Array.from(document.querySelectorAll("#form input")).reduce(
    (acc, input) => {
      // TODO: if input type is a checkbox, use input.checked instead
      if (input.type == "checkbox") {
        return {
          ...acc,
          [input.id]: input.checked,
        }
      } else if (input.type == "file") {
        return {
          ...acc,
          [input.id]: input.files,
          [input.id + "_base64"]: myFiles,
        }
      } else if (input.type == "radio") {
        var radios = document.querySelectorAll('input[name="sex"]')
        for (const f of sex) {
          if(f.checked) {
            console.log(f.value)
            console.log("hello")
          }
        }

        return {
          ...acc,
          [input.id]: input.checked
        }

      } else {
        return {
          ...acc,
          [input.id]: input.value,
        }
      } 
    },
    {}
  );

  console.log(values);
  return values;
};




// when image is uploaded, alert





document.getElementById("submitBtn").addEventListener("click", function() {
  patients.push(getValues());
  console.log(patients);
  
  var string = JSON.stringify(patients)
  console.log(string);
  localStorage.setItem("patients", string)

  document.location.href = "scanner.html";

})
;

// things to figure out
// string to array
// array to canvas
// position the canvas