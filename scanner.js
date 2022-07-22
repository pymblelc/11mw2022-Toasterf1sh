var image = document.getElementById("image");

// variable for image
let canvas = "";

// convert base64 to image
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

//Usage example:
var file = dataURLtoFile(
  "data:text/plain;base64,aGVsbG8gd29ybGQ=",
  "hello.txt"
);
console.log(file);

let storage = JSON.parse(localStorage.getItem("patients"));

async function loadModel() {
  const model = await tf.loadLayersModel("/model255/model.json");

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  var base64 = storage[storage.length - 1].imageInput2_base64.picture;
  var image3 = "data:image/jpeg;base64," + base64; // file type + base64

  document.getElementById("image2").src = image3;

  const img = document.getElementById("image2"); //IF EVERYTHING FAILS THEN COME BACK HERE

  img.addEventListener("load", function() {
    let width = img.naturalWidth;
    let height = img.naturalHeight;
    let scaleFactor;
    let newWidth;
    let newHeight;
    let excess;
  
    if (width > height) {
      scaleFactor = 64 / height;
      newWidth = scaleFactor * width;
      newHeight = 64;
      excess = (newWidth - 64) / 2;
    }
  
    if (width < height) {
      scaleFactor = 64 / width;
      newHeight = scaleFactor * height;
      newWidth = 64;
      excess = (newWidth - 64) / 2;
    }
  
    if ((width = height)) {
      newWidth = 64;
      newHeight = 64;
    }
  
    ctx.drawImage(img, -excess, 0, newWidth, newHeight); //IF EVERYTHING FAILS THEN CHANGE img TO img2
  
    let input = tf.browser.fromPixels(canvas);
    let tester = input.reshape([-1, 64, 64, 3]);
    
    // the number
  
    var infected = model.predict(tester).dataSync()[0]
    if (infected >= 0.5) {
      document.getElementById("confidence").innerText = "Pneumonia detected";
    } else {
      document.getElementById("confidence").innerText = "Pneumonia undetected";
    }

  });

}

loadModel();



// bring back the array from storage and make it an array from a string
let array = JSON.parse(localStorage.getItem("patients"));

//Patient information
document.getElementById("firstname1").innerText = array[array.length - 1].firstName
document.getElementById("lastname1").innerText = array[array.length - 1].lastName


document.getElementById("firstName").innerText = array[array.length - 1].firstName
document.getElementById("lastName").innerText = array[array.length - 1].lastName
document.getElementById("birthday").innerText = array[array.length - 1].birthday
document.getElementById("email").innerText = array[array.length - 1].email
document.getElementById("phoneNumber").innerText = array[array.length - 1].phoneNumber
document.getElementById("medicareNumber").innerText = array[array.length - 1].medicareNumber




// displaying patient's sex 
if (array[array.length - 1].male = true) {
  document.getElementById("sex").innerText = "male"

} else if (array[array.length - 1].female = true) {
  document.getElementById("sex").innerText = "female"

} else {
  document.getElementById("sex").innerText = "other"
  console.log(array[array.length - 1].female)
}









console.log(array[array.length - 1].appetite)


// Patient symptoms
if ((array[array.length - 1].appetite == true)) {
  document.getElementById("appetite").innerText = "Loss of appetite identified"
  document.getElementById("appetite").style.color = "orange"

} else if ((array[array.length - 1].appetite == false)) {
  document.getElementById("appetite").innerText =
    "Loss of appetite not identified";
}

if ((array[array.length - 1].breathing == true)) {
  document.getElementById("breathing").innerText =
    "Fast or shallow breathing identified";
    document.getElementById("breathing").style.color = "orange"

} else {
  document.getElementById("breathing").innerText =
    "Fast or shallow breathing not identified";
}

if ((array[array.length - 1].chestpains == true)) {
  document.getElementById("chestpains").innerText =
    "Chestpains when breathing or coughing identified";

  document.getElementById("chestpains").style.color = "orange"


} else {
  document.getElementById("chestpains").innerText =
    "Chestpains when breathing or coughing not identified";
}

if ((array[array.length - 1].confusion == true)) {
  document.getElementById("confusion").innerText =
    "Confusion or changes in mental awareness (in patients 65+ only) identified";

  document.getElementById("confusion").style.color = "orange"

  } else {
  document.getElementById("confusion").innerText =
    "Confusion or changes in mental awareness not identified";
}

if ((array[array.length - 1].cough == true)) {
  document.getElementById("cough").innerText =
    "Cough identified (phlegm may be produced)";
  
    document.getElementById("cough").style.color = "orange"

} else {
  document.getElementById("cough").innerText = "Cough not identified";
}

if ((array[array.length - 1].dehydration == true)) {
  document.getElementById("dehydration").innerText = "Dehydration identified";
  document.getElementById("dehydration").style.color = "orange"

} else {
  document.getElementById("dehydration").innerText = "Dehydration not identified";
}

if ((array[array.length - 1].fatigue == true)) {
  document.getElementById("fatigue").innerText = "Fatigue identified";
  document.getElementById("fatigue").style.color = "orange"

} else {
  document.getElementById("fatigue").innerText = "Fatigue not identified";
}

if ((array[array.length - 1].fever == true)) {
  document.getElementById("fever").innerText = "Fever identified";
  document.getElementById("fever").style.color = "orange"

} else {
  document.getElementById("fever").innerText = "Fever not identified";
}

if ((array[array.length - 1].heartrate == true)) {
  document.getElementById("heartrate").innerText = "Fast heart rate idenfitied";
  document.getElementById("heartrate").style.color = "orange"

} else {
  document.getElementById("heartrate").innerText =
    "Normal heart rate identified";
}

if ((array[array.length - 1].nausea == true)) {
  document.getElementById("nausea").innerText =
    "Nausea, vomiting or diarrhea identified";
  
    document.getElementById("nausea").style.color = "orange"


} else {
  document.getElementById("nausea").innerText =
    "Nausea, vomiting or diarrhea not identified";
}

if ((array[array.length - 1].shortbreath == true)) {
  document.getElementById("shortbreath").innerText =
    "Fast or shallow breathing identified";
  
    document.getElementById("shortbreath").style.color = "orange"

} else {
  document.getElementById("shortbreath").innerText =
    "Fast or shallow breathing not identified";
}

if ((array[array.length - 1].sweating == true)) {
  document.getElementById("sweating").innerText =
    "Sweating or chills (or clammy skin) identified";

  document.getElementById("sweating").style.color = "orange"

} else {
  document.getElementById("sweating").innerText =
    "Sweating or chills (or clammy skin) not identified";
}

// switch screens
document.getElementById("continue").addEventListener("click", function() {
   document.location.href = "home.html";

})
;