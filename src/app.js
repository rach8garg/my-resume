'use-strict';

import html2canvas from 'html2canvas';
import $ from 'jquery';
import styles from "./styles/styles.scss";

    let altKey 				= 18;		//Used to save the screenshot of template
    let captureId 			= "capture";
    let downloadId 			= "download";
    let canvasId 			= "resumeTemplate";
    let fileName 			= "Rachit_Garg_Web_Developer.png";
    let downloadElm 		= document.getElementById(downloadId);
    let captureElm 			= document.getElementById(captureId);

    $(document).on("keyup", (event) => {
        if ( event.which === altKey) _convertToCanvas(event);
    });

    /*
		Responsible for saving screenshot of current browser tab
	*/
	// convertToCanvas = (event) => {
	// 	html2canvas(captureElm, {
	// 		onrendered: (canvas) => {
	// 			canvas.setAttribute("id", canvasId);
	// 			document.body.appendChild(canvas);
	// 			downloadElm.setAttribute("href",document.getElementById(canvasId).toDataURL());
	// 			downloadElm.setAttribute("download", fileName);
	// 			downloadElm.click();
	// 			document.getElementById(canvasId).outerHTML = "";
	// 			delete document.getElementById(canvasId);
	// 		}
	// 	});
	// }

    document.querySelector("#dateTime").innerHTML = "2017-07-09";
