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
        input[2].innerHTML = `<span class="t-d"><i class="fas fa-arrow-circle-up"></i>${data.summary[0].deaths}<span>`;
        input[3].innerText = data.summary[0].cumulative_deaths;
        return input[0].innerHTML = `<span class="t-c"><i class="fas fa-arrow-circle-up"></i>${data.summary[0].cases}</span>`;
     
    } catch(e){
        const input = document.querySelectorAll(`${html}`);
        const res = await fetch(`https://api.opencovid.ca/summary?loc=${area}&date=${fulltimee}`)
        const data = await res.json();
        input[1].innerText = data.summary[0].cumulative_cases;
        input[2].innerHTML = `<span class="t-d"><i class="fas fa-arrow-circle-up"></i>${data.summary[0].deaths}<span>`;
        input[3].innerText = data.summary[0].cumulative_deaths;
        return input[0].innerHTML = `<span class="t-c"><i class="fas fa-arrow-circle-up"></i>${data.summary[0].cases}</span>`;
    }
}

const gett_confirmed = async (area,html) =>{
    try{
        const input = document.querySelectorAll(`${html}`);
        const time = document.querySelectorAll('.timer')
        const res = await fetch(`https://api.opencovid.ca/summary?loc=${area}&date=${fulltime}`)
        const data = await res.json();
        const a = data.summary[0].cases;
        const b = data.summary[0].deaths;
        const c = data.summary[0].recovered;
        const d = data.summary[0].active_cases_change;
        for(times of time){
            times.innerText = `Updated on:${data.summary[0].date}`;
        }

        input[1].innerHTML = `${data.summary[0].cumulative_deaths} <br> <span class="t-d"><i class="fas fa-arrow-circle-up"></i>${b}</span>`;
        input[2].innerHTML = `${data.summary[0].cumulative_recovered} <br> <span class="t-r"><i class="fas fa-arrow-circle-up"></i>${c}</span>`;
        input[3].innerHTML = `${data.summary[0].active_cases} <br> <span class="t-a"><i class="fas fa-arrow-circle-up"></i>${d}</span>`;
        input[4].innerHTML = data.summary[0].cumulative_avaccine;
        input[5].innerHTML = `<span class="t-v"><i class="fas fa-arrow-circle-up"></i>${data.summary[0].avaccine}<span>`;
        return input[0].innerHTML = `${data.summary[0].cumulative_cases} <br> <span class="t-c" ><i class="fas fa-arrow-circle-up"></i>${a}</span>`;
     
    } catch(e){
        const input = document.querySelectorAll(`${html}`);
        const time = document.querySelectorAll('.timer')
        const res = await fetch(`https://api.opencovid.ca/summary?loc=${area}&date=${fulltimee}`)
        const data = await res.json();
        const a = data.summary[0].cases;
        const b = data.summary[0].deaths;
        const c = data.summary[0].recovered;
        const d = data.summary[0].active_cases_change;
        for(times of time){
            times.innerText = `Updated on:${data.summary[0].date}`;
        }

        input[1].innerHTML = `${data.summary[0].cumulative_deaths} <br> <span class="t-d"><i class="fas fa-arrow-circle-up"></i>${b}</span>`;
        input[2].innerHTML = `${data.summary[0].cumulative_recovered} <br> <span <span class="t-r"><i class="fas fa-arrow-circle-up"></i>${c}</span>`;
        input[3].innerHTML = `${data.summary[0].active_cases} <br> <span class="t-a"><i class="fas fa-arrow-circle-up"></i>${d}</span>`;
        input[4].innerHTML = data.summary[0].cumulative_avaccine;
        input[5].innerHTML = `<span class="t-v"><i class="fas fa-arrow-circle-up"></i>${data.summary[0].avaccine}<span>`;
        return input[0].innerHTML = `${data.summary[0].cumulative_cases} <br> <span class="t-c"><i class="fas fa-arrow-circle-up"></i>${a}</span>`;
    }
}
gett_confirmed('canada','.CA');
gett_confirmed('ON','.ON');
gett_confirmed('BC','.BC');
gett_confirmed('QC','.QB');
gett_confirmed('AB','.AB');
gett_confirmed('MB','.MA');
gett_confirmed('NB','.NB');
gett_confirmed('SK','.SC');
gett_confirmed('PE','.PEI');
gett_confirmed('NL','.NL');
gett_confirmed('NS','.NS');
gett_confirmed('YT','.YK');
gett_confirmed('NT','.NT');
gett_confirmed('NU','.NN');


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










