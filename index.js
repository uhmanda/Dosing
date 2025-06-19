 function call() {
    //Benadryl
  var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    /*if (isNaN(dogWeight)) {
      document.getElementById("inputBenadryl").value = "Invalid input";
      return;
    }*/
    var dose = dogWeight / 50;
    var round = Math.round(dose * 100) / 100;

    document.getElementById("inputBenadryl").value = round + " mls";
  });
 
//Canine bolus
   var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
     var weight = Math.round((dogWeight/2.2)*90);
    var round = Math.round(weight *100) / 100;
    document.getElementById("cBolus").value = round + " mls";
  });

  //Feline bolus
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
     var weight = Math.round((dogWeight/2.2)*60);
    var round = Math.round(weight *100) / 100;
    document.getElementById("fBolus").value = round + " mls";
  });
  //Buprenorphine
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
var weight = ((dogWeight/2.2)*0.01/0.3);
    var round = Math.round(weight *100) / 100;
     var weight2 = (dogWeight/2.2)*0.02/0.3
    var round2 = Math.round(weight2 *100) / 100;
    document.getElementById("inputBuprenorphine").value = round + " mls";
  });
  //Butorphanol
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
     var weight = (dogWeight/2.2)*.4/10;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputButorphanol").value = round + " mls";
  });
  //Carprofen
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weightSID = (dogWeight/2.2)*4.4;
    var weightBID = (dogWeight/2.2)*2.2;
    document.getElementById("inputCarprofen").value = weightSID + " mg SID " + weightBID +" mg BID";
  });
  //Cefazolin
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = dogWeight*0.1;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputCefazolin").value = round + " mls";
  });
  //Cefopodoxime
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = Math.round((dogWeight/2.2)*10);
    document.getElementById("inputCefopodoxime").value = weight + " mg";
  });
  //Cerenia
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputCerenia").value = round + " mls";
  });
  //Convenia
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputConvenia").value = round + " mls";
  });
  //Cosyntropin
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = (dogWeight/2.2)*0.005/0.25;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputCosyntropin").value = round + " mls";
  });
  //Dexamethasone
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = (dogWeight/2.2)*0.5/2;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputDexamethsone").value = round + " mls";
  });
  //Diroban
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = (dogWeight/2.2)*0.1;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputDiroban").value = round + " mls";
  });
  //Dex sp
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
      var weight = (dogWeight/2.2)*0.5/4;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputDexSp").value = round + " mls";
  });
  //Doxycycline
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
var weight = Math.round((dogWeight/2.2)*10);
    document.getElementById("inputDoxycycline").value = weight + " mg";
  });
  //Gabapentin
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
  var weight = Math.round((dogWeight/2.2)*10);
    document.getElementById("inputGabapentin").value = weight + " mg";
  });
  //Gabepentin 50ml/ml
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = Math.round((dogWeight/2.2)*10/50);
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputGabapentinLiquid").value = round + " mls";
  });
  //Ketamine
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = (dogWeight/2.2)*0.01/0.3;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputKetamine").value = round + " mls";
  });
  //Librela
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputLibrela").value = round + " mls";
  });
  //Metacam
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
     var weight = (dogWeight/2.2)*0.1/5;
    var round = Math.round(weight *100) / 100;
    var weight2 = (dogWeight/2.2)*0.2/5;
    var round2 = Math.round(weight2 *100) / 100;
    document.getElementById("inputMetacam").value = round + " mls to "+ round2 + " mls";
  });
  //Metronidzole
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
var weight = Math.round((dogWeight/2.2)*15);
    document.getElementById("inputMetronidozole").value = weight + " mg";
  });
  //Onsior
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputOnsior").value = round + " mls";
  });
  //Prednisone
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = Math.round((dogWeight/2.2)*0.5);
    document.getElementById("inputPrednisone").value = weight + " mg";
  });
  //Proheart
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = (dogWeight/2.2)*0.05;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputProheart").value = round + " mls";
  });
  //Propofol
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
     var weight = (dogWeight/2.2)*4/10;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputPropofol").value = round + " mls";
  });
  //Rimadyl
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = (dogWeight/2.2)*4.4/50;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputRimadyl").value = round + " mls";
  });
  //Strongid
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
      var weight = (1/6)*dogWeight;
    var round = Math.round(weight *100) / 100;
    document.getElementById("inputStrongid").value = round + " mls";
  });
  //Mer
     var getDose = document.getElementById("gd");

  getDose.addEventListener('click', function() {
    var dogWeight = parseFloat(document.getElementById("weightInput").value);
    var weight = dogWeight / 2.2;
     var exp = Math.pow(weight, 0.75);
     var mul = 70 * exp * 0.8;
     var round = Math.round(mul *100) / 100;
    document.getElementById("inputMer").value = round + " kcal/day";
  });
}
call();








