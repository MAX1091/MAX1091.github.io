"use strict"

let total = 0;
let terms = 0;

let TYPE_OF_SITE = [100, 200, 150];
let  DESIGN = [230, 390, 500];
let  ADAPTABILITY = [100,100, 200];

let termType = [1, 3, 2];
let termDesign = [1, 4, 7];
let termAdapt = [1, 2, 3];

function Transform (type, des, adapt){
      this.TYPE_OF_SITE = type;
      this.DESIGN = des;
      this.ADAPTABILITY = adapt;
}

let usersTYPE_OF_SITE = prompt(" \t what type of site do you prefer? write a word from the suggested answers: \npublic: 100$   +one week \nprivate: 200$   +one month \nprotected: 150$   +two weeks");
let usersDESIGN = prompt(" \t what design do you prefer? write a word from the suggested answers: \nbusiness card site: +230$   +one week \nshowcase site: +390$   +four weeks \nonline store: +500$   +seven weeks");
let usersADAPTABILITY = prompt(" \t what adaptability do you prefer? write a word from the suggested answers: \nmobile phones: +100$   +one week \ntablets: +100$  +two weeks \ncomputers: +200$  + one month");

let circle = new Transform (usersTYPE_OF_SITE,usersDESIGN,usersADAPTABILITY);
console.log(circle);

function Calc (count, term){
    if (circle.TYPE_OF_SITE =="public"){   
    count+=TYPE_OF_SITE[0];
    term+=termType[0];
    };
    if (circle.TYPE_OF_SITE =="private"){
    count+=TYPE_OF_SITE[1];
    term+=termType[1];
    };
    if (circle.TYPE_OF_SITE =="protected"){
    count+=TYPE_OF_SITE[2];
    term+=termType[2];
    };
    if (circle.DESIGN =="business card site"){
    count+=DESIGN[0];
    term+=termDesign[0];
    };
    if (circle.DESIGN =="showcase site") {
    count+=DESIGN[1];
    term+=termDesign[1];
    };
    if (circle.DESIGN =="online store") {
    count+=DESIGN[2];
    term+=termDesign[2];
    };
    if (circle.ADAPTABILITY =="mobile phones"){
    count+=ADAPTABILITY[0];
    term+=termAdapt[0];
    };
    if (circle.ADAPTABILITY =="tablets") {
    count+=ADAPTABILITY[1];
    term+=termAdapt[1];
    };
    if (circle.ADAPTABILITY =="computers") {
    count+=ADAPTABILITY[2];
    term+=termAdapt[2];
    };
    terms = term;
    return count;
}
total = Calc(0, 0);
console.log("total: " + total + ", terms: " + terms);
alert ("your site is cost "+ total + "$\n" + "your site will be created no earlier than "+ terms + " weeks after applying");
