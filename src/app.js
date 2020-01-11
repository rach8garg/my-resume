'use-strict';

    let rotation            = 0;
    const downloadKeyCode	= 18; //alt Key
    const PDF_LINK          = 'http://www.pixlboy.com./docs/rachit-garg-ui.pdf';

    class App {

        /*
    		Responsible for saving PDF version of HTML file
    	*/
        downloadPDF(event){
            window.open(PDF_LINK, "_blank");
    	};

        setDates(date){
            let dates = document.getElementsByClassName("date-time");
            for(let item of dates){
                item.innerHTML = date || 'n/a';
            };
        }
    }

    // document.addEventListener("click", (event) => {
    //     if(event.target.className.includes('flip-back')){
    //         rotation = -180;
    //         document.querySelector(".page-front").className += " hidden";
    //     }
    //     if(event.target.className.includes('flip-front')){
    //         rotation = 0;
    //         document.querySelector(".page-front").className = "page-front";
    //     }
    //     document.querySelector(".flipper").style.transform = `rotateY(${rotation}deg)`;
    // });
    let app = new App();

    document.addEventListener("keyup", (event) => {
        if ( event.which === downloadKeyCode) app.downloadPDF(event);
    });

