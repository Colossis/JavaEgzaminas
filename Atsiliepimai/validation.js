var email = document.getElementById("email");
var consent = document.getElementById("consent");
var userName = document.getElementById("name");
var city = document.getElementById("city");
var info = document.getElementById("info");

var emailEmptyMessage = "Privaloma užpildyti šį lauką.";
var userNameEmptyMessage = "Privaloma įvesti savo vardą.";
var cityEmptyMessage = "Privaloma įvesti miestą.";

var emailWrongMessage =
  "Netinkamas elektroninio pašto adreso formatas. Pavyzdys: kaledos@gmail.lt";
var userNameWrongMessage = "Vardui galima naudoti tik raides.";


function validateWrong(element, messageWrong) {
  element.addEventListener(
    "input",
    function(e) {
      if (!element.validity.valid) {
        element.setCustomValidity(messageWrong);
      }
    },
    false
  );
}

function validateMissing(element, messageEmpty) {
  element.addEventListener(
    "invalid",
    function() {
      if (element.validity.valueMissing) {
        element.setCustomValidity(messageEmpty);
      }
    },
    false
  );
}

function validate(element, messageEmpty, messageWrong) {
  validateMissing(element, messageEmpty);
  validateWrong(element, messageWrong);
}

validate(email, emailEmptyMessage, emailWrongMessage);
validate(psw, passwordEmptyMessage, passwordWrongMessage);
// validate(pswRepeat, passwordEmptyMessage, passwordWrongMessage);
validatePasswordMatch();
validateMissing(consent, consentEmptyMessage);
validateMissing(sex, sexEmptyMessage);
validate(userName, userNameEmptyMessage, userNameWrongMessage);
validate(surname, surnameEmptyMessage, surnameWrongMessage);
validateMissing(street, streetEmptyMessage);
validateMissing(house, houseEmptyMessage);
validate(postal, postalEmptyMessage, postalWrongMessage);
validateMissing(country, countryEmptyMessage);
validateMissing(city, cityEmptyMessage);
validate(phone, phoneEmptyMessage, phoneWrongMessage);

function submitFunction() {
  let alert_string = "";
  alert_string = alert_string + "elektroninis paštas: " + email.value + "\n";
  alert_string = alert_string + "lytis :" + sex.value + "\n";
  alert_string = alert_string + "vardas :" + userName.value + "\n";
  alert_string = alert_string + "pavardė :" + surname.value + "\n";
  alert_string = alert_string + "gatvė :" + street.value + "\n";
  alert_string = alert_string + "namo numeris :" + house.value + "\n";
  alert_string = alert_string + "pašto kodas :" + postal.value + "\n";
  alert_string = alert_string + "miestas :" + city.value + "\n";
  alert_string = alert_string + "šalis :" + country.value + "\n";
  alert_string = alert_string + "telefono numeris :" + phone.value + "\n";
  alert_string = alert_string + "papildoma informacija :" + info.value + "\n";
  alert(alert_string);
}

shit = document.getElementById("output");
shit = $("#output");
