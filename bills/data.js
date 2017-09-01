var val = [];
var prat = 0;
var vina = 0;
var shre = 0;
var vive = 0;

var itemarr = [];
var pratarr = [];
var vinarr = [];
var shrarr = [];
var vivarr = [];

export function addValue(item,pra,shr,vin,viv){
console.log("Item is "+ item);

var value=parseFloat(item)/(parseFloat(pra)+parseFloat(shr)+parseFloat(vin)+parseFloat(viv));
 if (pra==1)
{
  prat+=value;
}
if (shr == 1){
  shre+=value;
}
if (vin==1){
  vina+=value;
}
if (viv==1)
{
  vive+=value;
}

itemarr.push(parseFloat(item));
pratarr.push(parseFloat(pra));
shrarr.push(parseFloat(shr));
vinarr.push(parseFloat(vin));
vivarr.push(parseFloat(viv));

}

export function getPratheekValue(){
  return prat;
}

export function getShreyasValue(){
  return shre;
}

export function getVinayValue(){
  return vina;
}

export function getVivekValue(){
  return vive;
}

export function getitemArray(){
  return itemarr;
}

export function getPraArray(){
  return pratarr;
}

export function getShrArray(){
  return shrarr;
}

export function getVinArray(){
  return vinarr;
}

export function getVivArray(){
  return vivarr;
}

export function removeItem(){


  var removingValue = itemarr[itemarr.length-1] / (pratarr[itemarr.length-1]+vivarr[itemarr.length-1]+vinarr[itemarr.length-1]+shrarr[itemarr.length-1])
  if (pratarr[itemarr.length-1]==1)
 {
   prat-=removingValue;
 }
 if (shrarr[itemarr.length-1] == 1){
   shre-=removingValue;
 }
 if (vinarr[itemarr.length-1]==1){
   vina-=removingValue;
 }
 if (vivarr[itemarr.length-1]==1)
 {
   vive-=removingValue;
 }

 itemarr.pop();
 pratarr.pop();
 shrarr.pop();
 vinarr.pop();
 vivarr.pop();

}
