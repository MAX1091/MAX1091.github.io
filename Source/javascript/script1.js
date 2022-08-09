"use strict"

let total = 0;

let TYPE_OF_SITE = [100, 200, 150];
let  DESIGN = [230, 390, 500];
let  ADAPTABILITY = [100,100, 200];

let calculator = {
  TYPE_OF_SITE : ["public: 100$", "private: 200$", "protected: 150$"],
  DESIGN : ["business card site: +230$", "showcase site: +390$", "online store: +500$"], 
  ADAPTABILITY: ["mobile phones: +100$", "tablets: +100$", "computers: +200$"],
};

function Transform (type, des, adapt){
      this.TYPE_OF_SITE = type;
      this.DESIGN = des;
      this.ADAPTABILITY = adapt;
}

let usersTYPE_OF_SITE = prompt(" \t what type of site do you prefer? write a word from the suggested answers: \npublic: 100$ \nprivate: 200$ \nprotected: 150$");
let usersDESIGN = prompt(" \t what design do you prefer? write a word from the suggested answers: \nbusiness card site: +230$ \nshowcase site: +390$ \nonline store: +500$");
let usersADAPTABILITY = prompt(" \t what adaptability do you prefer? write a word from the suggested answers: \nmobile phones: +100$ \ntablets: +100$ \ncomputers: +200$");

let circle = new Transform (usersTYPE_OF_SITE,usersDESIGN,usersADAPTABILITY);
console.log(circle);

function Calc (count){
    if (circle.TYPE_OF_SITE =="public"){   
    count+=TYPE_OF_SITE[0];
    };
    if (circle.TYPE_OF_SITE =="private"){
    count+=TYPE_OF_SITE[1];
    };
    if (circle.TYPE_OF_SITE =="protected"){
    count+=TYPE_OF_SITE[2];
    };
    if (circle.DESIGN =="business card site"){
    count+=DESIGN[0];
    };
    if (circle.DESIGN =="showcase site") {
    count+=DESIGN[1];
    };
    if (circle.DESIGN =="online store") {
    count+=DESIGN[2];
    };
    if (circle.ADAPTABILITY =="mobile phones"){
    count+=ADAPTABILITY[0];
    };
    if (circle.ADAPTABILITY =="tablets") {
    count+=ADAPTABILITY[1];
    };
    if (circle.ADAPTABILITY =="computers") {
    count+=ADAPTABILITY[2];
    };
    return count;
}
total = Calc(0);
console.log("total: " + total);
alert ("your site is cost "+ total + "$");