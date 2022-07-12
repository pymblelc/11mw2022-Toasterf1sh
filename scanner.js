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
  
    document.getElementById("confidence").innerText = model.predict(tester).dataSync()[0];
  });

}

loadModel();

// bring back the array from storage and make it an array from a string
let array = JSON.parse(localStorage.getItem("patients"));

if ((array[array.length - 1].appetite = true)) {
  document.getElementById("appetite").innerText = "Loss of appetite identified";
} else {
  document.getElementById("appetite").innerText =
    "Loss of appetite not identified";
}

if ((array[array.length - 1].breathing = true)) {
  document.getElementById("breathing").innerText =
    "Fast or shallow breathing identified";
} else {
  document.getElementById("breathing").innerText =
    "Fast or shallow breathing not identified";
}

if ((array[array.length - 1].chestpains = true)) {
  document.getElementById("chestpains").innerText =
    "Chestpains when breathing or coughing identified";
} else {
  document.getElementById("chestpains").innerText =
    "Chestpains when breathing or coughing not identified";
}

if ((array[array.length - 1].confusion = true)) {
  document.getElementById("confusion").innerText =
    "Confusion or changes in mental awareness (in patients 65+ only) identified";
} else {
  document.getElementById("confusion").innerText =
    "Confusion or changes in mental awareness not identified";
}

if ((array[array.length - 1].cough = true)) {
  document.getElementById("cough").innerText =
    "Cough identified (phlegm may be produced)";
} else {
  document.getElementById("cough").innerText = "Cough not identified";
}

if ((array[array.length - 1].dehydration = true)) {
  document.getElementById("dehydration").innerText = "Dehydration identified";
} else {
  document.getElementById("dehydration").innerText = "Dehydration identified";
}

if ((array[array.length - 1].fatigue = true)) {
  document.getElementById("fatigue").innerText = "Fatigue identified";
} else {
  document.getElementById("fatigue").innerText = "Fatigue identified";
}

if ((array[array.length - 1].fever = true)) {
  document.getElementById("fever").innerText = "Fever identified";
} else {
  document.getElementById("fever").innerText = "Fever not identified";
}

if ((array[array.length - 1].heartrate = true)) {
  document.getElementById("heartrate").innerText = "Fast heart rate idenfitied";
} else {
  document.getElementById("heartrate").innerText =
    "Normal heart rate identified";
}

if ((array[array.length - 1].nausea = true)) {
  document.getElementById("nausea").innerText =
    "Nausea, vomiting or diarrhea identified";
} else {
  document.getElementById("nausea").innerText =
    "Nausea, vomiting or diarrhea not identified";
}

if ((array[array.length - 1].shortbreath = true)) {
  document.getElementById("shortbreath").innerText =
    "Fast or shallow breathing identified";
} else {
  document.getElementById("shortbreath").innerText =
    "Fast or shallow breathing not identified";
}

if ((array[array.length - 1].sweating = true)) {
  document.getElementById("sweating").innerText =
    "Sweating or chills (or clammy skin) identified";
} else {
  document.getElementById("sweating").innerText =
    "Sweating or chills (or clammy skin) not identified";
}

// var ctx;
// createImageData(x, y);
// createImageData(imagedata);

// const canvas = document.getElementById('image');
// const ctx = canvas.getContext('2d');

// const imageData = ctx.createImageData(64, 64);
// console.log(imageData);

/* function getPixel(url, x, y) {
    var img = new Image();
    img.src = url;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(x, y, 1, 1).data; 
}

/* const image = new ImageData(1, 1);
image.data[0] = 5;
image.data[1] = 10;
image.data[2] = 15;
image.data[3] = 20;
tf.browser.fromPixels(image, 4).print(); 
*/
