// SET VARIABLES
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

const button1 = document.getElementById('startButton');
const button2 = document.getElementById('startButton_2');
const button3 = document.getElementById('startButton_3');
const button4 = document.getElementById('startButton_4');
const stop1 = document.getElementById('stop');

stop1.disabled = true;

// Initialize VARIABLES FOR CONTROLLING BUTTONS
let isFirstButtonClicked = false;
let isSecondButtonClicked = false;
let isThirdButtonClicked = false;
let isFourthButtonClicked = false;

const pose = new Pose(
{locateFile: (file) => {
return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
}});

pose.setOptions({
modelComplexity: 1,
smoothLandmarks: true,
minDetectionConfidence: 0.5,
minTrackingConfidence: 0.5
});

const camera = new Camera(videoElement, {
onFrame: async () => {
await pose.send({image: videoElement});
},
width: 720,
height: 480
});

//------------------------------------------------------

function startAction1() {
button1.style.color = "red";

button1.disabled = true;
button2.disabled = true;
button3.disabled = true;
button4.disabled = true;

isFirstButtonClicked = true;
stop1.disabled = false;
camera.start();
console.log("PRINT")
//Start connection
$.ajax({
    url: '/api',
    type: "POST",
    async: true,
    data: {
        test: "start"
    },
    success: function(result){
        console.log("start button1: " + result);
    },
    error: function(request, status, error){
        console.log("start button1 ajax connection fail\n" + error);
    }
})
}

function startAction2() {
button2.style.color = "red";

button1.disabled = true;
button2.disabled = true;
button3.disabled = true;
button4.disabled = true;

stop1.disabled = false;

isSecondButtonClicked = true;
camera.start();

//Start connection
$.ajax({
    url: '/api',
    type: "POST",
    async: true,
    data: {
        test: "start"
    },
    success: function(result){
        console.log("start button2: " + result);
    },
    error: function(request, status, error){
        console.log("start button2 ajax connection fail\n" + error);
    }
})
}

function startAction3() {
button3.style.color = "red";

button1.disabled = true;
button2.disabled = true;
button3.disabled = true;
button4.disabled = true;

stop1.disabled = false;

isThirdButtonClicked = true;

camera.start();

//Start connection
$.ajax({
    url: '/api',
    type: "POST",
    async: true,
    data: {
        test: "start"
    },
    success: function(result){
        console.log("start button3: " + result);
    },
    error: function(request, status, error){
        console.log("start button3 ajax connection fail\n" + error);
    }
})
}

function startAction4() {
button4.style.color = "red";

button1.disabled = true;
button2.disabled = true;
button3.disabled = true;
button4.disabled = true;

stop1.disabled = false;
isFourthButtonClicked = true;
camera.start();

//Start connection
$.ajax({
    url: '/api',
    type: "POST",
    async: true,
    data: {
        test: "start"
    },
    success: function(result){
        console.log("start button4: " + result);
    },
    error: function(request, status, error){
        console.log("start button4 ajax connection fail\n" + error);
    }
})
}

function stopaction() {
// return MediaStream Object
let mStream = videoElement.captureStream();

// return MediaStreamTrack Object
let mTrack = mStream.getTracks();
mTrack.forEach(function(mTrack){
    mTrack.stop();
})
videoElement.srcObject = null;
canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

$.ajax({
    url: '/api',
    type: "POST",
    data: {
      test: 'stop'
    },
    success: function(result){
      console.log("STOP: " + result);
      alert("count is: " + result);
      
    },
    error: function(request, status, error){
      console.log('STOP ajax connection fail\n' + error);
    }
});

button1.style.color = "white";
button2.style.color = "white";
button3.style.color = "white";
button4.style.color = "white";

button1.disabled = false;
button2.disabled = false;
button3.disabled = false;
button4.disabled = false;

let isFirstButtonClicked = false;
let isSecondButtonClicked = false;
let isThirdButtonClicked = false;
let isFourthButtonClicked = false;
stop1.disabled = true;
}

button1.addEventListener('click', startAction1);
button2.addEventListener('click', startAction2);
button3.addEventListener('click', startAction3);
button4.addEventListener('click', startAction4);
stop1.addEventListener('click', stopaction);

//-------------------------------------------------------


function onResults(results) {
canvasCtx.save();
canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,{color: '#00FF00', lineWidth: 4});
drawLandmarks(canvasCtx, results.poseLandmarks, {color: '#FF0000', lineWidth: 2});
if(results.poseLandmarks != null){

if (isFirstButtonClicked == true){
frontStepUp(results.poseLandmarks, 1);
}

if (isSecondButtonClicked== true){
lateralStepUp(results.poseLandmarks, 2);
}

if (isThirdButtonClicked == true){
hipExercise(results.poseLandmarks, 3);
}

if (isFourthButtonClicked == true){
hipExercise(results.poseLandmarks, 4);
}
}
}

pose.onResults(onResults);

videoElement.style.display = "none";
canvasElement.style["margin-left"] = '-600px';




    canvasElement.style["margin-bottom"] = '-450px';