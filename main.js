Webcam.set({
    width:370,
    height:350,
    image_format:"png",
    png_quality:90
})

camera = document.getElementById("camera");
Webcam.attach(camera);

function captureImage() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captureImage' src=" + data_uri + ">"
    });
};

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pEaqeSq7P/model.json", modelLoaded);

function modelLoaded() {
    alert("Model Is Loaded");
}

console.log(ml5.version);

function identify() {
    img = document.getElementById("captureImage");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
};