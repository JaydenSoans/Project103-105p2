Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    function snapit(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
        });
    }
    
    console.log('ml5 version : ', ml5.version, "yee haw");
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vncXDaTX3/model.json', modelLoaded);
    
     function modelLoaded(){
        console.log("Model has Loaded baby!");
    }