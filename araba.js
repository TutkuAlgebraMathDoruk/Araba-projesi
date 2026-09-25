function carSimulator(marka,model,kilometre,fiyat) {
 const araba={};
  araba.marka=marka;
  araba.model=model;
  araba.kilometre=kilometre;
  araba.fiyat=fiyat;
  araba.depo=50;
  araba.getPrice=function(){
    return `Arabanın güncel piyasa değeri ${araba.fiyat} TL'dir.`;
  }
  araba.refuel=function(miktar){
    araba.depo=araba.depo+miktar;
    if(araba.depo>100){
      araba.depo=100;
    }
    return `Depo %${araba.depo} doludur.`
    
  }
  araba.drive=function(km){
    araba.kilometre=araba.kilometre+km;
    let hesap=km/100;
    araba.depo=Math.max(0,araba.depo-hesap*5);
    araba.fiyat=Math.max(0,araba.fiyat-hesap*50);
    return`Arabanin'nin guncel kilometresi:${araba.kilometre} dir.`;
    
  }
  return araba;
}


/* Bu satırdan sonraki satırları silmeyin! */
