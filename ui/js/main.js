//INTERPRETATION OF QUESTIONS ARE BEING STORED AND SENT TO THE CHIP

// function to calculate the result of the survey
let interpretation1 = "no interpretation";
let interpretation2 = "no interpretation";
let interpretation3 = "no interpretation";

var showing = [1, 0, 0, 0, 0, 0, 0, 0, 0];
var questions = ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];
function next() {
    var qElems = [];
    for (var i = 0; i < questions.length; i++) {
        qElems.push(document.getElementById(questions[i]));   
    }
    for (var i = 0; i < showing.length; i++) {
        if (showing[i] == 1) {
            qElems[i].style.display = 'none';
            showing[i] = 0;
            if (i == showing.length - 1) {
                qElems[0].style.display = 'block';
                showing[0] = 1;
            } else {
                qElems[i + 1].style.display = 'block';
                showing[i + 1] = 1;
            }
            break;
        }
    }      
}

function storeVar(el) {
	var value = el.getAttribute('value'); 
	console.log(value);

	const formData = new FormData();
	formData.append('text', value);

	fetch('http://192.168.50.201:5000/submit_text', { 
		method: 'POST',
		body: formData
	}).then(
		success => console.log(success)
	).catch(
		error => console.log(error) 
	);	
}

//WEBCAM TURNS ON + SNAPSHOT IS BEING SENT TO CHIP

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

webcam.start()
	.then(() => {
		console.log("webcam started");
	})
	.catch(err => {
		console.log(err);
	});

var picture = webcam.snap();
//document.querySelector('#download-photo').href = picture;
//console.log(picture);

webcam.stop();

// Select your input type file and store it in a variable
const input = document.getElementById('fileinput');

// This will upload the file after having read it
function upload() {
	canvasElement.toBlob(function (blob) {
		const imgFile = new File([blob], 'test.png', {
			type: 'image/png'
		});
		const formData = new FormData();
		formData.append('file', imgFile);

		fetch('http://192.168.50.201:5000/submit', { // Your POST endpoint
			method: 'POST',
			body: formData
		}).then(
			response => response.json() // if the response is a JSON object
		).then(
			success => console.log(success) // Handle the success response object
		).catch(
			error => console.log(error) // Handle the error response object
		);
	});
}

// Event handler executed when a file is selected
const onSelectFile = () => upload(input.files[0]);

// Add a listener on your input
// It will be triggered when a file will be selected
//input.addEventListener('change', onSelectFile, false);


