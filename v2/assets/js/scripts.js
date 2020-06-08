console.dir(document);


// $(document).ready(function(){

//     // Function for picking an ID for Background Picture
//     function getRandom(max){
//         return Math.floor(Math.random() * Math.floor(max));
//     }
//     let randomPic = getRandom(58);


//     // External Resources
//     const apiKey = 'yH5B0kaTtNUuPzRTtUKCdtBURNdZspAGgpFi80CK';
//     let urlPics = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos/?api_key=${apiKey}`;
//     let urlData = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

//     // Local Variables
//     let mainBackground = document.querySelector(".main");
//     let table = document.querySelector(".table");


//     // Async Requests
//     fetch(urlPics)
//         .then(handleErrorsP)
//         .then(parseJSONP)
//         .then(updateMain)
//         .catch(displayErrorsP)

//     fetch(urlData)
//         .then(handleErrorsD)
//         .then(parseJSOND)
//         .then(updateData)
//         .catch(displayErrorsD)

        
//     // Error Handling
//     function handleErrorsP(resp){
//         if (!resp.ok){
//         throw Error(resp.status);
//         }
//         return resp;
//     }

//     function handleErrorsD(resd){
//         if (!resd.ok){
//         throw Error(resd.status);
//         }
//         return resd;
//     }
    

//         // Convert Data to JSON
//     function parseJSONP(resp){
//         return resp.json().then(function(datap){
//         return datap;
//         });
//     }

//     function parseJSOND(resd){
//         return resd.json().then(function(datad){
//         return datad;
//         });
//     }
    

//     //   Manipulate data returned for use
//     function updateMain(datap){
//         let picRandom = datap['latest_photos'][`${randomPic}`]["img_src"];
//         mainBackground.style.backgroundImage = `url('${picRandom}')`;
//     }

//     function updateData(datad){

//         let days = datad['sol_keys'];
//         let tableData = datad[`${days}`];
        
//         for(let i = 0; i <= days; i++){
//             table.inser
//         }



//         console.log(datad);



//           // get number of days
//     // put in for loop
//     // display new row for each day






        
//     }
    

//     //   Display any Errors
//     function displayErrorsP(errp){
//         console.log(errp);
//     }
//     function displayErrorsD(errd){
//         console.log(errd);
//     }

// });