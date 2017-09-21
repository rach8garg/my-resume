'use-strict';

import styles from "./styles/styles.scss";

    let rotation            = 0;
    let downloadKeyCode		= 18;		//Used to save the screenshot of template
    let flipToBack	   	    = "flipToBack";
    let flipToFront	   	    = "flipToFront";

    let app = function(){};

    /*
		Responsible for saving PDF version of HTML file
	*/
	app.downloadPDF = (event) => {
        window.open("http://www.pixlboy.com.s3-website.ap-south-1.amazonaws.com/rach8garg.pdf", "_blank");
	};

    var dates = document.getElementsByClassName("date-time");
    for(let i = 0; i < dates.length; i++){
        dates[i].innerHTML = "20-09-2017";
    };

    document.addEventListener("click", (event) => {
        if(event.target.id === flipToBack){
            rotation = 180;
            document.querySelector(".flipper").style.transform = `rotateY(${rotation}deg)`;
            document.querySelector(".page-front").className += " hidden";
        }
        if(event.target.id === flipToFront){
            rotation = 0;
            document.querySelector(".flipper").style.transform = `rotateY(${rotation}deg)`;
            document.querySelector(".page-front").className = "page-front";
        }
    });

    document.addEventListener("keyup", (event) => {
        if ( event.which === downloadKeyCode) app.downloadPDF(event);
    });
