const constraints = {
    audio: false,
    video: true
};

navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        const video = document.getElementById('camera');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
    })
    .catch(function(err) {
        console.log(err);
    });
