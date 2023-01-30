const GETcardName = document.getElementById("card_name");
const GETcardNumber = document.getElementById("card_number");
const GETexpiration_month = document.getElementById("expiration");
const GETexpiration_year = document.getElementById("mm_yy");
const GETcvc = document.getElementById("cvc");

const PRINTcardName = document.getElementById("printName");
const PRINTcardNumber = document.getElementById("printNumber");
const PRINTdateSeparator = document.getElementById("printDateSeparator");
const PRINTdateMonth = document.getElementById("printMonth");
const PRINTdateYear = document.getElementById("printYear");
const PRINTcard_back_cvc = document.getElementById("printCvc");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const submit = document.getElementById("submit");
const form = document.getElementById("myForm");
const thankYouSection = document.getElementById("mainThanks");
const okContinue = document.getElementById("continue");



var error_name = document.getElementById("error_name");
var error_year = document.getElementById("error_year");
var error_month = document.getElementById("error_month");
var error_number = document.getElementById("error_number");
var error_cvc = document.getElementById("error_cvc");



function inputName(){
    let cardNameInput = GETcardName.value;
    // Do not allow users to write invalid characters
    let formattedName = cardNameInput.replace(/[^\sA-Za-z]/g, "");
    GETcardName.value = formattedName;
    PRINTcardName.innerHTML = GETcardName.value;
    console.log('inputName() fonctionnelle');

}
function inputNumber(){
    //PRINTcardNumber.innerHTML = GETcardNumber.value;
    
    console.log('inputNumber() fonctionnelle');

    let cardNumberInput = GETcardNumber.value;
    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card number is groups of 4
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(" ");
    }
    // If the formmattedCardNumber is different to what is shown, change the value
    if (cardNumberInput !== formattedCardNumber) {
      GETcardNumber.value = formattedCardNumber;
    }
    PRINTcardNumber.innerHTML = GETcardNumber.value;
    if (GETcardNumber.value === "") {
      PRINTcardNumber.innerHTML = GETcardNumber.placeholder;
    }
    
}
function inputMonth(){

    let formattedMM = GETexpiration_month.value;
    let onlyNumber = formattedMM.replace(/[^\d]/g, "");
    onlyNumber = onlyNumber.substring(0, 2);
    GETexpiration_month.value = onlyNumber;
    if (GETexpiration_month.value === "") {
      PRINTdateMonth.innerHTML = "00";
    } else {
      PRINTdateMonth.innerHTML = GETexpiration_month.value;
    }
    console.log('inputMonth() fonctionnelle');

}
function inputYear(){
    let formattedYear = GETexpiration_year.value;
    let formattedYearOnlyNumber = formattedYear.replace(/[^\d]/g, "");
    formattedYearOnlyNumber = formattedYearOnlyNumber.substring(0, 2);
    GETexpiration_year.value = formattedYearOnlyNumber;
    if (GETexpiration_year.value === "") {
      PRINTdateYear.innerHTML = "00";
    } else {
      PRINTdateYear.innerHTML = GETexpiration_year.value;
    }

    console.log('inputYear() fonctionnelle');


}
function inputCvc(){
    let formattedCvc = GETcvc.value;
    let onlyNumber = formattedCvc.replace(/[^\d]/g, "");
    //Remplacer les valeurs du input par les 3 premières valeurs du input gâce au substring
    onlyNumber = onlyNumber.substring(0, 3);
    GETcvc.value = onlyNumber;
    if (cvc.value === "") {
      PRINTcard_back_cvc.innerHTML = "000";
    } else {
      PRINTcard_back_cvc.innerHTML = GETcvc.value;
    }
    console.log('inputCvc() fonctionnelle');

}


function valider(){
  massValidate();
  if (massValidate() == false) {
    event.preventDefault();
  } else {
    event.preventDefault();

    form.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
  }
}

submit.addEventListener("click", function () {
  console.log('submit()');
  event.preventDefault();
  form.classList.add("hidden");
  thankYouSection.classList.remove("hidden");
});

okContinue.addEventListener("click", function () {
  event.preventDefault();
  thankYouSection.classList.add("hidden");
  form.classList.remove("hidden");

  GETcardName.value =  "";
  GETcardNumber.value = "";
  GETexpiration_month.value = "";
  GETexpiration_year.value = "";
  GETcvc.value = "";

  PRINTcardName.innerHTML = "";
  PRINTcardNumber.innerHTML = "";
  PRINTdateMonth.innerHTML = "";
  PRINTdateYear.innerHTML = "";
  PRINTcard_back_cvc = "";
  
});