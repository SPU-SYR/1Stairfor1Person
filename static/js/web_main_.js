'use strict';

// Set up media stream constant and parameters.

// In this codelab, you will be streaming video only: "video: true".
// Audio will not be streamed because it is set to "audio: false" by default.
const mediaStreamConstraints = {
  video: true,
};

// Set up to exchange only video.
const offerOptions = {
  offerToReceiveVideo: 1,
};

// Define initial start time of the call (defined as connection between peers).
let startTime = null;

// Define peer connections, streams and video elements.
// document.getElementById:
// 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고
// 이를 나타내는 Element 객체 반환함.
const localVideo = document.getElementById('localVideo');


let localStream;
let localPeerConnection;


// Sets the MediaStream as the video element src.
// Element.srcObject: returns the obj which werves as the source of the media
// associated with the HTMLMediaElement
function gotLocalMediaStream(mediaStream) {
  localVideo.srcObject = mediaStream;
  localStream = mediaStream;
  trace('Received local stream.');
  stopButton.disabled = false;
}

// Handles error by logging a message to the console.
function handleLocalMediaStreamError(error) {
  trace(`navigator.getUserMedia error: ${error.toString()}.`);
}


// Add behavior for video streams.
// Logs a message with the id and size of a video element.
function logVideoLoaded(event) {
  const video = event.target;
  trace(`${video.id} videoWidth: ${video.videoWidth}px, ` +
        `videoHeight: ${video.videoHeight}px.`);
}

// // Logs a message with the id and size of a video element.
// // This event is fired when video begins streaming.
// function logResizedVideo(event) {
//   logVideoLoaded(event);

//   if (startTime) {
//     const elapsedTime = window.performance.now() - startTime;
//     startTime = null;
//     trace(`Setup time: ${elapsedTime.toFixed(3)}ms.`);
//   }
// }

// addEventListener(): 지정된 이벤트가 대상에 전달될 때 마다 호출.
// The loadedmetadata event is fired when the metadata has been loaded.
// 미디어의 메타 데이터가 로드되었을 때를 나타낸다, 미디어가 로드되기 전에, 먼저 메타 데이터를 뽑아와서 활용할
// localVideo.addEventListener('loadedmetadata', logVideoLoaded);


// Define action buttons.
const startButton = document.getElementById('startButton');
const startButton_2 = document.getElementById('startButton_2');
const startButton_3 = document.getElementById('startButton_3');
const startButton_4 = document.getElementById('startButton_4');
const stopButton = document.getElementById('stopButton');

// Set up initial action buttons status: disable call and hangup.
stopButton.disabled = true;


function stopAction() {
	startButton.disabled = false;
	stopButton.disabled = true;
	localStream.getTracks().forEach((track) => {
		track.stop();
	});
}

//--------------------------------------------------
// start button first
// Add click event handlers for buttons.

function startAction() {
  startButton.disabled = true;
  navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
  trace('Requesting local stream.');
}


startButton.addEventListener('click', startAction);
stopButton.addEventListener('click', stopAction);

//-------------------------------------------------------------
// start button_2
// Add click event handlers for buttons.

function startAction_2() {
  startButton_2.disabled = true;
  navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
  trace('Requesting local stream.');
}

// Add click event handlers for buttons.
startButton_2.addEventListener('click', startAction_2);
stopButton.addEventListener('click', stopAction);


//-------------------------------------------------------------
// start button_3
// Add click event handlers for buttons.

function startAction_3() {
  startButton_3.disabled = true;
  navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
  trace('Requesting local stream.');
}


// Add click event handlers for buttons.
startButton_3.addEventListener('click', startAction_3);
stopButton.addEventListener('click', stopAction);

//-------------------------------------------------------------
// start button_4
// Add click event handlers for buttons.

function startAction_4() {
  startButton_4.disabled = true;
  navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
  trace('Requesting local stream.');
}


// Add click event handlers for buttons.
startButton_4.addEventListener('click', startAction_4);
stopButton.addEventListener('click', stopAction);


//-------------------------------------------------------------


// Gets the name of a certain peer connection.
function getPeerName(peerConnection) {
  return 'localPeerConnection';
}

// Logs an action (text) and the time when it happened on the console.
function trace(text) {
  text = text.trim();
  const now = (window.performance.now() / 1000).toFixed(3);

  console.log(now, text);
}
