var now = new Date();

var year = now.getFullYear()
var month = now.getMonth()+1;
var date = now.getDate();
var err = now.getDate()-1;


const fulltime = `${date}-${month}-${year}`
const fulltimee = `${err}-${month}-${year}`

const getd_confirmed = async (area,html) =>{
    try{
        const input = document.querySelectorAll(`${html}`);
        const res = await fetch(`https://api.opencovid.ca/summary?loc=${area}&date=${fulltime}`)
        const data = await res.json();
        input[1].innerText = data.summary[0].cumulative_cases;
        input[2].innerText = data.summary[0].deaths;
        input[3].innerText = data.summary[0].cumulative_deaths;
        return input[0].innerText = data.summary[0].cases;
     
    } catch(e){
        const input = document.querySelectorAll(`${html}`);
        const res = await fetch(`https://api.opencovid.ca/summary?loc=${area}&date=${fulltimee}`)
        const data = await res.json();
        input[1].innerText = data.summary[0].cumulative_cases;
        input[2].innerText = data.summary[0].deaths;
        input[3].innerText = data.summary[0].cumulative_deaths;
        return input[0].innerText = data.summary[0].cases;
    }
}

getd_confirmed(3595,'.toronto');
getd_confirmed(3551,'.ottawa');
getd_confirmed(3553,'.peel');
getd_confirmed(3570,'.york');
getd_confirmed(3530,'.durham');
getd_confirmed(3537,'.hamilton');
getd_confirmed(3546,'.niagara');
getd_confirmed(3555,'.peterborugh');
getd_confirmed(3561,'.Sudbury');
getd_confirmed(3562,'.thunderbay');
getd_confirmed(3565,'.Waterloo');
getd_confirmed(3566,'.wellington');
getd_confirmed(3557,'.renfrew');
getd_confirmed(3544,'.middlesex');
getd_confirmed(3538,'.hastings');








