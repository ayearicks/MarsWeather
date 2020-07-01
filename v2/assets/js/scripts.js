// DOM Variables
let mainBackground  = document.querySelector(".main");
let tRow            = document.getElementsByTagName("tr");
let sol_day         = document.getElementsByClassName(".sol_day");
let temp            = document.getElementsByClassName(".temp");
let wind_dir        = document.getElementsByClassName(".wind_dir");
let wind_speed      = document.getElementsByClassName(".wind_speed");


// Local Variables
let sol = []; //Current Day
let AT  = []; //Atmospheric Temperature
let WD  = []; //Wind Direction
let HWS = []; //Horizontal Wind Speed
 

// External Resources
const apiKey    = 'yH5B0kaTtNUuPzRTtUKCdtBURNdZspAGgpFi80CK';

let urlPics     = 
`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos/?api_key=${apiKey}`;

let urlData     = 
`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;


// Re-useable Functions


// Pick a random ID for Background
function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}
let randomPic = getRandom(16);

// Convert Celsius to Fairehnheit
function cToF(celsius){
    let fair = celsius * 9 / 5 + 32;
    return fair;
}


// Async Requests
fetch(urlPics)
    .then(handleErrorsP)
    .then(parseJSONP)
    .then(updateMain)
    .catch(displayErrorsP)

fetch(urlData)
    .then(handleErrorsD)
    .then(parseJSOND)
    .then(updateData)
    .catch(displayErrorsD)


// Fetch Functions
    

// Error Handling
function handleErrorsP(resp){
    if (!resp.ok){
    throw Error(resp.status);
    }
    return resp;
}

function handleErrorsD(resd){
    if (!resd.ok){
    throw Error(resd.status);
    }
    return resd;
}


// Convert Data to JSON
function parseJSONP(resp){
    return resp.json().then(function(datap){
    return datap;
    });
}

function parseJSOND(resd){
    return resd.json().then(function(datad){
    return datad;
    });
}


// Manipulate data returned for use
function updateMain(datap){
    // let picRandom = datap['latest_photos'][`${randomPic}`]["img_src"];
    // mainBackground.style.backgroundImage = `url('${picRandom}')`;
}

function updateData(datad){
    sol = datad['sol_keys'];

    for(let i in datad) {
        AT = datad[i]['AT']['av'];
        WD = datad[i]['WD']['most_common']['compass_point'];
        HWS = datad[i]['HWS']['av'];
        
        for(let x = 0; len = tRow.length; x < len; x++) {
            sol_day[x].innerHTML = sol;
        }
    }




    // for (let i = 0; i < datad.length; i++) {

    //     for (let key in datad[i]) {

    //         sol = datad['sol_keys'];
    //         AT = datad[key]['AT']['av'];
    //         WD = datad[key]['WD']['most_common']['compass_point'];
    //         HWS = datad[key]['HWS']['av'];

    //         for (let x = 0; x <= 6; x++) {
    //             sol_day.innerHTML = sol;
    //             temp.innerHTML = AT;
    //             wind_dir.innerHTML = WD;
    //             wind_speed.innerHTML = HWS;
    //         }
            
    //     }


    



    // for(let i = 0; i < datad.length; i++){
    //     for(let key in datad[i]) {
    //         for (let x = 0; x <= datad[i][key].length; x++) {
    //             WD[x] = datad[i]
    //         }
    //     }
    // }

    // for (let key in datad){
       
    //         console.log(datad[key]);
       
    // }
    

    // for(let i = 0; i <= datad.length; i++){
    //     WD = datad[i].WD;
    //     console.log(WD);
    // }

    // for(let i = 0; i <= datad[i]; i++){
    //     HWS[i] = datad[i]["HWS"]["av"];
    //     console.log(HWS[i]);
    // } 
    
}


//   Display any Errors
function displayErrorsP(errp){
    console.log(errp);
}
function displayErrorsD(errd){
    console.log(errd);
}
