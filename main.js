function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1y80_o5Sy/model.json",modelready);
    }
    
    function modelready(){
    classifier.classify(gotResults);
    
    }

    function gotResults(error,results){
        if(error){
        console.log(error);
        
        }
        else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        
        document.getElementById("result_label").innerHTML="I can Hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        
        img=document.getElementById("animal1");
        img1=document.getElementById("animal2");
        img2=document.getElementById("animal3");
        img3=document.getElementById("animal4");
        
        if(results[0].label=="roaring"){
        img.src="cat.jpg";
        img1.src="dog.jpeg";
        img2.src="cow.jpeg";
        img3.src="lion gif.gif";
        }
        
        else if(results[0].label=="barking"){
            img.src ="cat.jpg";
            img1.src ="dog gif.gif";
            img2.src ="cow.jpeg";
            img3.src ="lion.jpg";
        }

        else if(results[0].label=="meowing"){
            img.src ="cat-moving.gif";
            img1.src ="dog.jpeg";
            img2.src ="cow.jpeg";
            img3.src ="lion.jpg";
        }

        else if(results[0].label=="mooing"){
            img.src ="cat.jpg";
            img1.src ="dog.jpeg";
            img2.src ="cow gif.gif";
            img3.src ="lion.jpg";
        }
        
        }
        }