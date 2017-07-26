'use-strict';

import styles from "./styles/styles.scss";

    let rotation            = 0;
    let downloadKeyCode		= 18;		//Used to save the screenshot of template
    let downloadId 			= "download";
    let flipToBack	   	    = "flipToBack";
    let flipToFront	   	    = "flipToFront";
    let fileName 			= "resume.pdf";

    let app = function(){};

    /*
		Responsible for saving PDF version of HTML file
	*/
	app.downloadPDF = (event) => {
        window.open("http://www.pixlboy.com/resume.pdf", "_blank");
	};

    var dates = document.getElementsByClassName("date-time");
    dates[1].innerHTML = dates[0].innerHTML = "26-07-2017";

    document.addEventListener("click", (event) => {
        if(event.target.id === flipToBack){
            rotation = 180;
            document.querySelector(".flipper").style.transform = `rotateY(${rotation}deg)`;
        }
        if(event.target.id === flipToFront){
            rotation = 0;
            document.querySelector(".flipper").style.transform = `rotateY(${rotation}deg)`;
        }
    });

    document.addEventListener("keyup", (event) => {
        if ( event.which === downloadKeyCode) app.downloadPDF(event);
    });
