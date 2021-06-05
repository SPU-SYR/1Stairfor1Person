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

let isStop = true;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


// initialize
//const myImage = document.getElementById("myImage");
//let content = canvas.toDataURL("image/png");
//let sub_content = content.substring(22);
//let image_source = content;
//myImage.src = image_source;

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
localVideo.addEventListener('loadedmetadata', logVideoLoaded);


// Define action buttons.
const startButton = document.getElementById('startButton_');
const stopButton = document.getElementById('stopButton');

// Set up initial action buttons status: disable call and hangup.
stopButton.disabled = true;


// Handles start button action: creates local MediaStream.
function startAction() {
    startButton.disabled = true;
    isStop = false;
    navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
    trace('Requesting local stream.');

  $.ajax({
      url: '/api',
      type: "POST",
      async: true,
      data: {
          test: 'start'
      },
      success: function(result){
          console.log("START: " + result);
      },
      error: function(request, status, error){
          console.log('START ajax 통신 실패\n' + error);
      }
  });
}


function stopAction() {
    startButton.disabled = false;
    stopButton.disabled = true;
    isStop = true;

    localStream.getTracks().forEach((track) => {
    track.stop();
    });

  $.ajax({
      url: '/api',
      type: "POST",
      data: {
          test: 'stop'
      },
      success: function(result){
	const count = document.getElementById('count');
	count.src = result;
	console.log("STOP: " + result);
      },

      error: function(request, status, error){
          console.log('STOP ajax 통신 실패\n' + error);
      }
  });
}

// Add click event handlers for buttons.
startButton.addEventListener('click', startAction);
stopButton.addEventListener('click', stopAction);


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
