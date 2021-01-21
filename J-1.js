
//GM(0) - SP
//GM(1) - Dystrybucja


init();
function init(){
    
    if(GM_getValue(0) !== null){
        sprawdzanieSP(GM_getValue(0),GM_getValue(2));
    };
    if(GM_getValue(1) !== null){
        dystrybucja(GM_getValue(1));
    };
};
    


var toggle = true;
var actiontoggle = false;
var keytab = [];
var keytabpass = "r,i,d,e";
var buttonHeight = "22px";
var buttonWidth = "auto";

var cookies = document.cookie;

document.onkeypress = keyPress;
document.cookie = "loginToggle = true";
var loginToggle = false;

var background = true;
var invertcolors = true
var str = "875678422";
str.search("875678422");


var SearchDiv = document.getElementsByClassName("csrt_search-browser");
if (SearchDiv[0] != null || SearchDiv[0] != undefined){
    SearchDiv[0].style.cssText = 'background:#EEEEEE;opacity:0.9';
};
var ProductDiv = document.getElementsByClassName("container-fluid");
if (ProductDiv[3] != null || ProductDiv[3] != undefined){
    ProductDiv[3].style.cssText = 'background:#EEEEEE;opacity:0.9';
};
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};
if (document.getElementById("pageTitle")) {
    var pageTitle = document.getElementById("pageTitle").innerHTML;
    if (invertcolors){
        document.getElementById("pageTitle").style.color = "red";
    };
}else{
    pageTitle = null;
};


//right side
var elem = document.createElement('buttons');
elem.setAttribute("id", "Buttons");
elem.style.cssText = 'position:fixed;width:window.innerWidth-50px;height:45px;z-index:100;background:#BBBBBB;bottom:0;left:30px;right:0;opacity:0.9';
document.body.appendChild(elem);
elem.style.borderStyle = "solid";
elem.style.display = "none";

//left side
var elem1 = document.createElement('buttonstoggle');
elem1.setAttribute("id", "ButtonsToggle");
elem1.style.cssText = 'position:fixed;width:25px;height:45px;z-index:100;background:#BBBBBB;bottom:0;left:0;opacity:0.9';
document.body.appendChild(elem1);
elem1.style.borderStyle = "solid";
elem1.style.display = "none";

//infobox
var elem2 = document.createElement('infoBox');
elem2.setAttribute("id", "infoBox");
elem2.style.cssText = 'position:fixed;width:700px;height:400px;opacity:1;z-index:100;bottom:48px;right:0';
document.body.appendChild(elem2);
elem2.style.borderStyle = "solid";
elem2.style.backgroundImage = "url('https://media.giphy.com/media/PFth9iZFCjeso/giphy.gif')";
elem2.style.display = "none";

//actionbox
var elem3 = document.createElement('actionBox');
elem3.setAttribute("id", "actionBox");
elem3.style.cssText = 'position:fixed;opacity:1;z-index:100;background:#BBBBBB;bottom:48px;right:0';
document.body.appendChild(elem3);
elem3.style.borderStyle = "solid";
elem3.style.display = "none";

//subbox
var elem4 = document.createElement('subBox');
elem4.setAttribute("id", "subBox");
elem4.style.cssText = 'position:fixed;z-index:100;background:#BBBBBB;bottom:47px;right:0px;left:0px;height:23px;opacity:0.9';
document.body.appendChild(elem4);
elem4.style.borderStyle = "solid";
elem4.style.display = "none";

function keyPress(event) {
    // Get the Unicode value
    var x = event.charCode || event.keyCode;
    // Convert the value into a character
    var y = String.fromCharCode(x);
    keytab.push(y);
    if (keytab.toString() == keytabpass) {
        $('#infoBox').fadeIn(600);
    };
    if (keytab.length >= (keytabpass.length - 1)) {
        keytab.shift();
    };
};

function createButton(name, text, url, bcolor, tcolor, appendTo) {
    name = document.createElement("BUTTON");
    var text1 = document.createTextNode(text);
    name.appendChild(text1);
    if (appendTo) {
        document.getElementById(appendTo).appendChild(name);
    } else {
        document.getElementById("Buttons").appendChild(name);
    };

    name.style.background = bcolor;
    name.style.color = tcolor;
    name.style.height = buttonHeight;
    name.style.width = buttonWidth;

    name.addEventListener("click", function() {
        window.open(url, '_blank').focus();
    });
}

function createlocalButton(name, text, get, bcolor, tcolor, appendTo) {
    name = document.createElement("BUTTON");
    var text1 = document.createTextNode(text);
    name.appendChild(text1);
    if (appendTo) {
        document.getElementById(appendTo).appendChild(name);
    } else {
        document.getElementById("Buttons").appendChild(name);
    }

    name.style.background = bcolor;
    name.style.color = tcolor;
    name.style.height = buttonHeight;
    name.style.width = buttonWidth;

    name.addEventListener("click", function() {
        window.open("file:///C:/Users/plawicki/Desktop/HTML/pierwsza_strona.html");
    });
}


function createButtonPopup(name, text, url, bcolor, tcolor, popupname, height, width, appendTo) {
    name = document.createElement("BUTTON");
    var text1 = document.createTextNode(text);
    name.appendChild(text1);
    if (appendTo) {
        document.getElementById(appendTo).appendChild(name);
    } else {
        document.getElementById("Buttons").appendChild(name);
    }

    name.style.background = bcolor;
    name.style.color = tcolor;
    name.style.height = buttonHeight;
    name.style.width = buttonWidth;

    name.addEventListener("click", function() {
        window.open(url, popupname, "height=" + height + ",width=" + width + ",toolbar=0,location=0,menubar=0,statusbar=0,scrollbars=0");
    });
}

function createButtonWebBox(name, text, url, bcolor, tcolor, width, height, appendTo) {
    name = document.createElement("BUTTON");
    var text1 = document.createTextNode(text);
    name.appendChild(text1);
    if (appendTo) {
        document.getElementById(appendTo).appendChild(name);
    } else {
        document.getElementById("Buttons").appendChild(name);
    }

    name.style.background = bcolor;
    name.style.color = tcolor;
    name.style.height = buttonHeight;
    name.style.width = buttonWidth;

    name.addEventListener("click", function() {

        actiontoggle = !actiontoggle;

        if (actiontoggle) {
            document.getElementById('actionBox').innerHTML = "<iframe src='" + url + "'style='height:" + height + "px; width:" + width + "px;'></iframe>"; //'style='height:" + height + "px; width:" + width + "px;';
            $('#actionBox').fadeIn(100);
        } else {
            $('#actionBox').fadeOut(100);
        }
    });
}

function createFillTextButton(name, text, textToFill, bcolor, tcolor, appendTo) {
    name = document.createElement("BUTTON");
    var text1 = document.createTextNode(text);
    name.appendChild(text1);
    if (appendTo) {
        document.getElementById(appendTo).appendChild(name);
    } else {
        document.getElementById("subBox").appendChild(name);
    }

    name.style.background = bcolor;
    name.style.color = tcolor;
    name.style.height = buttonHeight;
    name.style.width = buttonWidth;

    name.addEventListener("click", function() {
        DIAGNOSTYKABOX.value = textToFill;
    });
}

//Toggle Button
var toggleButton = document.createElement("BUTTON");
var text2 = document.createTextNode(">");
toggleButton.appendChild(text2);
document.getElementById("ButtonsToggle").appendChild(toggleButton);

toggleButton.style.background = "#696969";
toggleButton.style.color = "#FFFFFF";
toggleButton.style.height = buttonHeight;
toggleButton.style.width = buttonWidth;

toggleButton.addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        $("Buttons").fadeIn(300);
        toggleButton.firstChild.data = ">";
    } else {
        $("Buttons").fadeOut(600);
        toggleButton.firstChild.data = "<";
    }
});

//Init
/*$(document).ready(function() {
});*/
 $('#Buttons').fadeIn(600);
 $('#ButtonsToggle').fadeIn(600);
//Buttons
createButton("deptakButton", "Deptak", "http://dpt.vectra.pl/dptcok/articles.php?article_id=69", "green", "black");
createButton("monolitButton", "Monolit", "https://192.168.4.16/logged", "DarkOrchid", "black");
createButton("ksaviButton", "Ksavi", "https://192.168.10.171/app#", "DarkOrchid", "black");
createButton("crmButton", "CRM", "https://crm.playmobile.pl/index.html", "DarkOrchid", "black");
createButton("nauButton", "NAU", "http://nau.vectra.pl/ZlecenieObslugaNowe.aspx?tryb=nowy", "orange", "black");
createButton("fsmButton", "FSM", "http://vcgdysrclb2.vectra.pl:8080/fsm-fe/home.page?execution=e2s1", "orange", "black");
createButton("fsmButton", "OTRS", "http://support.vectra.pl/otrs/index.pl?Action=AgentTicketZoom;TicketID=270742", "orange", "black");
createButton("suntechButton", "Suntech", "http://billing.vectra.pl/cc/wyszukaj_klienta.html", "orange", "black");
createButton("cpnButton", "SOU", "https://sou1.plicbd.gov.pl/", "orange", "black");
createButton("adescomButton", "Adescom", "http://10.250.10.12/platform.php", "orange", "black");
createButton("skButton", "PROD", "http://192.168.3.8/Reports/report/Dzia%C5%82%20Wsparcia%20Operacji/PLI%20CBD%20Przeniesienia%20Numer%C3%B3w", "orange", "black");
createButton("cpnButton", "CPN", "http://vcgdyapps02:81/CPNWebApp/", "orange", "black");
createButton("skButton", "FNP", "https://10.250.10.15/np/np.php/home/main#0", "orange", "black");
createButton("lmsButton", "LMS", "https://lan.vectranet.pl", "orange", "black");
createButtonWebBox("clickersyButton", "UKE A", "https://bip.uke.gov.pl/numeracja/dostawca-uslug/", "black", "white", "900", "850");
createButton("lmsButton", "UKE M", "https://numeracja.uke.gov.pl/pl/pstn_tables", "black", "white");
createButton("cpnButton", "CPMS", "http://tools-app.vectradom.vec/cpms/", "orange", "black");
createButton("Kontakt", "Kontakt", "https://poczta.vectra.pl/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fpoczta.vectra.pl%2fowa%2f", "orange", "black");
createButton("RedlinkButton", "Redlink", "https://redlink.pl/appNew/panel/Login.aspx", "lightblue", "black");
createButton("wsparcieButton", "Wsparcie", "http://pomoc.vectra.pl/secure/Dashboard.jspa", "LightGrey", "black");
//createButtonWebBox("clickersyButton", "Clickersy", "http://dpt.vectra.pl/clickers/", "LightSlateGray", "black", "910", "550");

//Autologin
// if (pageTitle.includes("Welcome") || pageTitle.includes("Witamy")) {
//     var CSRTloginButton = document.evaluate('//*[@id="main"]/table/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr[4]/td[2]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     var CSRTlogin = document.evaluate('//*[@id="main"]/table/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr[1]/td[2]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     var CSRTpassword = document.evaluate('//*[@id="main"]/table/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr[2]/td[2]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

//     if (loginToggle && CSRTlogin.value != null & CSRTpassword.value != null) {
//         CSRTloginButton.click();
//         loginToggle = false;
//         copyToClipboard(CSRTpassword.value);
//     }
// }
        

var loopToInnerText;
var tdInnerTextArray = [];
var findingLoop;
var numerKatalogowy;
var trybWypowiedzenia;
var dataOtrzymania;
var konsultant;
var nazwaGłównegoKlienta;
var rodzajIdentyfikatoraGłównegoKlienta;
var identyfikatorGłównegoKlienta;
var nazwaWspółwłaściciela;
var rodzajIdentyfikatoraWspółwłaściciela;
var identyfikatorWspółwłaściciela;
var nazwaPrzenoszony;
var rodzajPrzenoszony;
var identyfikatorPrzenoszony;
//dodatek do pnzv
var typOperacji;
var rodzajProcesu;
var numerKlienta;
var operatorBiorca;
var dataWplywuWyniesienia;
var dataRozwiazaniaUmowyE03;
var dataRozwiazaniaUmowyE06;
var dataWaznosciWniosku;
var WlascicielImieNazwisko;
var WlascicielPesel;
var WspolwlascicielImieNazwisko;
var WspolwlascicielPesel;
var Pelnomocnictwo;
var typPrzeniesienia;
var typPrzeniesieniaSettingsLoop = 0;
var testowyLoop;
var numer_procesu = document.evaluate('//*[@id="main"]/table[1]/tbody/tr[2]/td[2]/a',document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var biuro = document.evaluate('//*[@id="main"]/table[1]/tbody/tr[2]/td[10]',document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
           
function getData(){
    var getTdFromWebsite = document.getElementsByTagName("td");
    var getTdFromWebsiteLenght = getTdFromWebsite.length;
    for (loopToInnerText = 0; loopToInnerText < getTdFromWebsiteLenght; loopToInnerText++){
        //if(tdInnerTextArray[loopToInnerText] != undefined){
        tdInnerTextArray[loopToInnerText] = getTdFromWebsite[loopToInnerText].innerText;
        //};
    };
    for (loopToInnerText = 0; loopToInnerText < getTdFromWebsiteLenght; loopToInnerText++){
        findingLoop = tdInnerTextArray[loopToInnerText]
        if (findingLoop == "Numer Katalogowy"){
            numerKatalogowy = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Tryb wypowiedzenia umowy z Dawcą"){
            trybWypowiedzenia = tdInnerTextArray[loopToInnerText + 1];
            trybWypowiedzenia = trybWypowiedzenia.substr(0, 3);
        };
        if (findingLoop == "Weryfikacja danych przeniesienia w PN"){
             dataOtrzymania = tdInnerTextArray[loopToInnerText + 8];
            konsultant = tdInnerTextArray[loopToInnerText - 4];
            var konsultantLenght = konsultant.length;
            konsultant = konsultant.substring(0,konsultantLenght - 22);
        };
        if (findingLoop == "Nazwa klienta"){
            nazwaGłównegoKlienta = tdInnerTextArray[loopToInnerText + 1];
            nazwaGłównegoKlienta = nazwaGłównegoKlienta.toLowerCase();
            rodzajIdentyfikatoraGłównegoKlienta = tdInnerTextArray[loopToInnerText + 3];
            identyfikatorGłównegoKlienta =  tdInnerTextArray[loopToInnerText + 5];
        };
        if (findingLoop == "Nazwa współwłaściciela"){
            nazwaWspółwłaściciela = tdInnerTextArray[loopToInnerText + 1];
            nazwaWspółwłaściciela = nazwaWspółwłaściciela.toLowerCase();
            rodzajIdentyfikatoraWspółwłaściciela = tdInnerTextArray[loopToInnerText + 3];
            identyfikatorWspółwłaściciela =  tdInnerTextArray[loopToInnerText + 5];
        };
        if (findingLoop == "Nazwa"){
            nazwaPrzenoszony = tdInnerTextArray[loopToInnerText + 1];
            if(nazwaPrzenoszony !== ""){
                nazwaPrzenoszony = nazwaPrzenoszony.toLowerCase();
            };
            rodzajPrzenoszony = tdInnerTextArray[loopToInnerText + 3];
            identyfikatorPrzenoszony =  tdInnerTextArray[loopToInnerText + 5];
        };
        if (typPrzeniesieniaSettingsLoop == 0){
            if (findingLoop == "Typ przeniesienia"){
                typPrzeniesienia = tdInnerTextArray[loopToInnerText + 1];
                typPrzeniesieniaSettingsLoop = 1;
            };
        };
        //dodatek do pnzv
        if (findingLoop == "Rodzaj procesu"){
            rodzajProcesu = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Typ operacji"){
            typOperacji = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Numer klienta"){
            numerKlienta = tdInnerTextArray[loopToInnerText + 4];
        };
        if (findingLoop == "Operator Biorca"){
            operatorBiorca = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Weryfikacja wniosku"){
            dataWplywuWyniesienia = tdInnerTextArray[loopToInnerText + 8];
        };
        if (findingLoop == "Data rozwiązania umowy"){
            dataRozwiazaniaUmowyE06 = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Data ważności wniosku o Przeniesienie Numeru"){
            dataWaznosciWniosku = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Pełnomocnictwo"){
            Pelnomocnictwo = tdInnerTextArray[loopToInnerText + 1];
            dataRozwiazaniaUmowyE03 = tdInnerTextArray[loopToInnerText - 3];
        };
        if (findingLoop == "Imię"){
            WlascicielImieNazwisko = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Nazwisko"){
            WlascicielImieNazwisko = WlascicielImieNazwisko + " " + tdInnerTextArray[loopToInnerText + 1];
            WlascicielImieNazwisko = WlascicielImieNazwisko.toLowerCase();
            WlascicielPesel = tdInnerTextArray[loopToInnerText + 3];
        };
        if (findingLoop == "Imię współwłaściciela"){
            WspolwlascicielImieNazwisko = tdInnerTextArray[loopToInnerText + 1];
        };
        if (findingLoop == "Nazwisko współwłaściciela"){
            WspolwlascicielImieNazwisko = WspolwlascicielImieNazwisko + " " + tdInnerTextArray[loopToInnerText + 1];
            WspolwlascicielImieNazwisko = WspolwlascicielImieNazwisko.toLowerCase();
        };
        if (findingLoop == "PESEL współwłaściciela"){
            WspolwlascicielPesel = tdInnerTextArray[loopToInnerText + 1];
        };
        var dws = ["Andrzej Pawlak", "Patryk Pietrzak","Edyta Kierszka", "Oliwia Majkowska", "Krystian Lenarciak", "Kamil Mazur", "Alicja Lubecka", "Jaschke Edwin"];
        biuro = document.evaluate('//*[@id="main"]/table[1]/tbody/tr[2]/td[10]',document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (biuro != null){
            biuro = biuro.innerText;
            if (dws.includes(konsultant)){
                biuro = "DWS" + " "+ konsultant;
            }else{
                biuro = biuro + " " + konsultant;
            };
        };
    };
};
function checkingPersonalDate(){
    if (nazwaGłównegoKlienta == nazwaPrzenoszony && rodzajIdentyfikatoraGłównegoKlienta == rodzajPrzenoszony && identyfikatorGłównegoKlienta == identyfikatorPrzenoszony){
        dateStatus.style.background = "Green";
        dateStatus.style.color = "Green";
    }else{
        if (nazwaWspółwłaściciela == nazwaPrzenoszony && rodzajIdentyfikatoraWspółwłaściciela == rodzajPrzenoszony && identyfikatorWspółwłaściciela == identyfikatorPrzenoszony){
            dateStatus.style.background = "Green";
            dateStatus.style.color = "Green";
        }else{
            if (nazwaPrzenoszony == "" && rodzajPrzenoszony == "" && identyfikatorPrzenoszony == ""){
                dateStatus.style.background = "#0febf2";
                dateStatus.style.color = "0febf2";
                checkingPesonalDateAlert();
                checkingPesonalDateAlertTimming();
            }; 
        };
    };
};
var visabilityStatus = 0;
function checkingPesonalDateAlert(){
    var visabilityTableStatus = ["visible", "hidden"];
    dateStatus.style.visibility = visabilityTableStatus[visabilityStatus];
    if (visabilityStatus == 1){
        visabilityStatus = 0;
    }else{
        visabilityStatus = visabilityStatus + 1;
    };   
};
function checkingPesonalDateAlertTimming(){
    setInterval(checkingPesonalDateAlert, 500);
};
// Nazwa procesu
function copyToClipboard(text) {
    window.prompt(typPrzeniesienia, text);
}

var pndv = document.createElement("BUTTON");
var text10 = document.createTextNode(" PNDV ");
pndv.appendChild(text10);
document.getElementById("Buttons").appendChild(pndv);
pndv.style.background = 'RoyalBlue';
pndv.style.color = 'black';
pndv.style.height = buttonHeight;
pndv.style.width = buttonWidth;
pndv.addEventListener("click", function() {
    checkingPersonalDate();
    getData();
    copyToClipboard(numer_procesu);
    copyToClipboard(numerKatalogowy);
    copyToClipboard("20" + dataOtrzymania);
    //copyToClipboard(dataOtrzymania.substr(0,6)+ "20" + dataOtrzymania.substr(6,15));
    copyToClipboard(biuro);  
    copyToClipboard(trybWypowiedzenia);
             
});
var pnzv = document.createElement("BUTTON");
var text11 = document.createTextNode(" PNZV ");
pnzv.appendChild(text11);
document.getElementById("Buttons").appendChild(pnzv);
pnzv.style.background = 'RoyalBlue';
pnzv.style.color = 'black';
pnzv.style.height = buttonHeight;
pnzv.style.width = buttonWidth;
pnzv.addEventListener("click", function() {
    //var test = document.getElementsByClassName("product_expander");
    //test = test[0].getElementsByTagName("a");
    //test[0].click();
    document.getElementsByClassName("product_expander")[0].getElementsByTagName("a")[0].click();

    // z procesu ==>
    // potrzebne: Typ przeniesienia, rodzaj procesu, numer tel, op biorca, OM, rn(w stacji), data ważności wniosku, tryb wypowiedzenia, pełnomocnictwo,
    // nazwa klienta, PESEL, typ operacji, data rozwiązania umowy

    // z konta ==>
    // imię, nazwisko, pesel właściciela, współwłaściciela, 

    //porówniania ==>
    //imie i nazwisko == JEST
    //pesel == JEST
    //rodzaj procesu == postpaid
    //numer tel == aktywny
    //Data rozwiązania umowyE03 < Data rozwiązania umowyE06
    //pełnomocnictwo == tak
    //typ operacji == standard
    //data rozwiązania umowyE03 == end - na next miesiąc(do zmiany później)/eop(jeżeli możliwy, END jeżli EOP się skończył)/day(jeżeli możliwy)
    //czy jest rezu i odwołać się do daty rozwiązania umowy

    setTimeout(function(){
        getData();
        var WlascicielNumer = document.getElementsByClassName("number")[0].innerText;
        WlascicielNumer = WlascicielNumer.substr(4);
        //copyToClipboard(WlascicielNumer);
        var WlascicielStatusNumeru = document.getElementsByClassName("info")[1].getElementsByClassName("status_pane")[0].innerText;
        var WlascicielZobowiazanie = document.getElementsByClassName("info")[1].getElementsByTagName("tr")[1].innerText;
        WlascicielZobowiazanie = WlascicielZobowiazanie.substr(16);
        //copyToClipboard(WlascicielZobowiazanie);
        //copyToClipboard(WlascicielStatusNumeru);
        function CheckPersonalData(){
            var statusBledowPNZV = "Błędy: ";
            function PersonalName(){
                //0 - git, 1- imie i nazwisko, 2 - pesel, 3 - postpaid/prepaid, 4 - aktywny numer, 5 -data rozwiazania umowy,
                //6 - pelnomocnictwo, 7 - typ operacji,
                if(nazwaGłównegoKlienta == WlascicielImieNazwisko || nazwaGłównegoKlienta == WspolwlascicielImieNazwisko){
                    if(identyfikatorGłównegoKlienta == WlascicielPesel || identyfikatorGłównegoKlienta == WspolwlascicielPesel){
                        return 0;
                    }else{
                        statusBledowPNZV = statusBledowPNZV + " PESEL,";
                        return 2;
                    };
                }else{
                    statusBledowPNZV = statusBledowPNZV + " IMIE I NAZWISKO,";
                    return 1;
                };
            };
            function ProcessType(){
                if(rodzajProcesu == "Postpaid"){
                    return 0;
                }else{
                    statusBledowPNZV = statusBledowPNZV + " TYP KONTRAKTU,";
                    return 3;
                };
            };
            function ActiveNumber(){
                if(WlascicielStatusNumeru =="Aktywny"){
                    return 0;
                }else{
                    statusBledowPNZV = statusBledowPNZV + " NIEAKTYWNY NUMER,";
                    return 4;
                };
            };
            function DateOfTermination(){
                if(dataRozwiazaniaUmowyE03 < dataRozwiazaniaUmowyE06){
                    return 0;
                }else{
                    statusBledowPNZV = statusBledowPNZV + " DATA REALIZACJI UMOWY,";
                    return 5;
                };
            };
            function Proxy(){
                if(Pelnomocnictwo == "Tak"){
                    return 0;
                }else{
                    statusBledowPNZV = statusBledowPNZV + " PELNOMOCNICTWO,";
                    return 6;
                };
            };
            function TypOfOperation(){
                if(typOperacji == "Standardowy"){
                    return 0;
                }else{
                    statusBledowPNZV = statusBledowPNZV + " TRYB OPERACJI,";
                    return 7;
                };
            };
            function EndContract(){
                switch(trybWypowiedzenia){
                    case "EOP":
                    //TODO
                    break;
                    case "END":
                    //TODO
                    break;
                    case "DAY":
                    //TODO
                    break;
                };
            };
            var statusDaneAb = PersonalName();
            var statusTyp = ProcessType();
            var statusAktywny = ActiveNumber();
            var statusDataWypo = DateOfTermination();
            var statusPelnomocnictwo = Proxy();
            var statusTypOperacji = TypOfOperation();
            var statusTrybWypowiedzenia = EndContract();
            if(statusDaneAb + statusTyp + statusAktywny + statusDataWypo + statusPelnomocnictwo + statusTypOperacji == 0){
                //TODO - zapisac date wypowiedzenia umowy(pod rezu)
                return 0;
            }else{
                copyToClipboard(statusBledowPNZV);
            };
        };
    
    
    
        copyToClipboard(numer_procesu);
        copyToClipboard(numerKatalogowy);
        copyToClipboard(operatorBiorca);
        // OM!!!!
        copyToClipboard(trybWypowiedzenia);
        dataWplywuWyniesienia = dataWplywuWyniesienia.substr(0,8)+"20"+ dataWplywuWyniesienia.substr(8);
        copyToClipboard(dataWplywuWyniesienia);
        copyToClipboard(dataRozwiazaniaUmowyE03);
        copyToClipboard(numerKlienta);
        
        document.getElementsByClassName("Picassostylestabcontainerh-tab-next-of-active")[0].click();
        setTimeout(function(){
            getData();
            //copyToClipboard(WlascicielImieNazwisko);
            //copyToClipboard(WlascicielPesel);
                document.getElementsByClassName("Picassostylestabcontainerh-tab-next-of-active")[1].click();
                setTimeout(function(){
                    getData();
                    //copyToClipboard(WspolwlascicielImieNazwisko);
                    //copyToClipboard(nazwaGłównegoKlienta);
                    CheckPersonalData();
                    //copyToClipboard(WspolwlascicielPesel);
                },100)
        },100);

        //CheckPersonalData();
    },500);
   
    
    


    // dateStatus.style.background = "Green";
    // dateStatus.style.color = "Green";
    // checkingPesonalDateAlert();
    // checkingPesonalDateAlertTimming();

    //GM_setValue(0,numerKlienta);
    //window.location.href = 'https://csrt.vectra.pl/csrt/showCustomerOrders%7CC%7C22850.showCustomer%7CO%7C'+numerKlienta+'.showCustomers%7CC%7C21732.treeGroupNode%7CG%7C21731.treeGroupNode%7CG%7C21691.?clickContext=tree'
    
    //copyToClipboard(nazwaGłównegoKlienta);
    //copyToClipboard(rodzajIdentyfikatoraGłównegoKlienta);
    //copyToClipboard(identyfikatorGłównegoKlienta);
    //copyToClipboard(typOperacji);
    //copyToClipboard(numerKlienta);
    //window.location.href = 'https://csrt.vectra.pl/csrt/cm_products/customerId/' + numerKlienta;
    //var x = document.getElementsByName('Workflow');
    //x[0].click();

    //var x = document.getElementsByClassName('linksTo active');
    //var test = x[0].href;

    // GM_setValue(0,"rezu");
    // window.location.href = "showCustomerOrders|C|22850.showCustomer|O|"+numerKlienta+".showCustomers|C|21732.treeGroupNode|G|21731.treeGroupNode|G|21691.?clickContext=tree";           
});
// if(GM_getValue(0) !== null){
//     document.getElementById("searchEngineOpenButton").click();
//     document.getElementsByName("only_active_processes")[0].value = false;
//     document.getElementsByName("submitBtn")[0].click();
   
//     var test = "test";
//     GM_setValue(0,null);
// };
// GM_setValue(0,null);


// var pnzv = document.createElement("BUTTON");
// var text11 = document.createTextNode("PNZV");
// pnzv.appendChild(text11);
// document.getElementById("Buttons").appendChild(pnzv);
// pnzv.style.background = 'RoyalBlue';
// pnzv.style.color = 'black';
// pnzv.style.height = buttonHeight;
// pnzv.style.width = buttonWidth;
// pnzv.style.visibility = "hidden";

// pnzv.addEventListener("click", function(){

//     copyToClipboard(numer_procesu);
//     copyToClipboard(numerKatalogowy);
//     copyToClipboard("20" + dataOtrzymania);
//     //copyToClipboard(dataOtrzymania.substr(0,8)+"20" +" " + dataOtrzymania.substr(9,15));
//     copyToClipboard(biuro);  
//     copyToClipboard(trybWypowiedzenia);
// });
// if (numer_procesu != null){
//     numer_procesu = numer_procesu.innerHTML;
//     //copyToClipboard(numer_procesu);
// }
// if (numer_procesu != null){
//     numer_procesu = numer_procesu.innerText;
//         if (numer_procesu.substr(0,4) == "PNDV"){
//             dateStatus.style.visibility ="visible";
//         };
//     };

var sp = document.createElement("BUTTON");
var text12 = document.createTextNode(" SP ");
sp.appendChild(text12);
document.getElementById("Buttons").appendChild(sp);
sp.style.background = 'RoyalBlue';
sp.style.color = 'black';
sp.style.height = buttonHeight;
sp.style.width = buttonWidth;
sp.addEventListener("click", function() {
    
    //window.location.href = 'https://csrt.vectra.pl/csrt/homePage'
    var inputData = prompt('Wpisz datę którą chcesz sprawdzić(rr-mm-dd)/wpisz "sprawdz" by zobaczyć ostatni wynik');
    //copyToClipboard(InputData);
    GM_setValue(0,"SP1");
    GM_setValue(2,inputData)
    document.getElementsByTagName("a")[5].click(); //kliknięcie workflow
});

function sprawdzanieSP(status, inputData){
    switch(status) {
        case 'SP1':
            GM_setValue(0,"SP2");
            document.getElementsByClassName("menuItemName")[1].click(); //kliknięcie napisu "Procesy"
            break;
        case 'SP2':
            GM_setValue(0,"SP3");
            document.getElementsByClassName("menuItemName")[0].click(); //kliknięcie "Szukaj procesu"
            break;
        case 'SP3':
            GM_setValue(0,"SP4");
            let statusOpcji;
            let sposobwyszukiwania = document.getElementsByTagName('a');
            for (let index = 0; index < sposobwyszukiwania.length; index++) {
                if(sposobwyszukiwania[index].innerText == "Zaawansowane wyszukiwanie"){
                    sposobwyszukiwania[index].click();
                    statusOpcji = true;
                };  
            };
            if(statusOpcji != true){
                location.reload();
            }
            break;
        case 'SP4':
            GM_setValue(0,"SP5");
            let imgsrc= document.getElementsByTagName('img');   //usuwanie filtrów
            for (let index = 0; index < imgsrc.length; index++) {
               if(imgsrc[index].alt == "Usuń klauzule"){
                    imgsrc[index].click();
               };
            };
            break;
        case 'SP5':
            GM_setValue(0,"SP6");
            let imgsrc2 = document.getElementsByTagName('img');
            for (let index = 0; index < imgsrc2.length; index++) {
               if(imgsrc2[index].alt == "zmień"){
                    imgsrc2[index].click();
               };
            };
            let list = document.getElementsByTagName('a');
            for (let index = 0; index < list.length; index++) {
                //copyToClipboard(list[index].innerText);
                if(list[index].innerText == "Nazwa procesu {_def_id}"){
                    list[index].click();
                };        
            };     
            break;
        case 'SP6':
            GM_setValue(0,"SP7");
            document.getElementsByTagName('img')[10].click();
            let list1 = document.getElementsByTagName('a');
            for (let index = 0; index < list1.length; index++) {
                if(list1[index].innerText == "PNDV - Przeniesienie numeru do Vectra"){
                    list1[index].click();
                };
            };
            break;
        case 'SP7':
            GM_setValue(0,"SP8");
            let list3 = document.getElementsByTagName('input');
            for (let index = 0; index < list3.length; index++) {
                if(list3[index].value == "Więcej parametrów >>"){
                   list3[index].click();
               };             
            };
            document.getElementsByName('NP_Przeniesienie_numeru_1000115$6$NP_Kontekst_1000115$16').value = "subprocess";
            document.getElementsByName('NP_Komunikat_E12_1000115$11$NP_case_pending_activation_date_E12_1000115$2')[0].value = inputData;
            document.getElementById('_maxResults').value = '1000';
            document.getElementsByName("submitBtn")[0].click();
            break;
        case 'SP8':
            var licznikProcesow = 0
            GM_setValue(0,'SP9');
            let listaProcesow = document.getElementsByTagName('a');
            for (let index = 0; index < listaProcesow.length; index++) {
                if(listaProcesow[index].innerText.substring(0,4) == "PNDV"){
                    licznikProcesow++;
                };
            };
            listaPNDV = new Array(licznikProcesow+1);
            listaPNDV[0] = new Array(5);
            listaPNDV[0][0] = "Indeks";
            listaPNDV[0][1] = "Status";
            listaPNDV[0][2] = "Nr klienta";
            listaPNDV[0][3] = "PNDV";
            listaPNDV[0][4] = "SP";
            var indexpndv = 1;
            for (let index = 1; index < listaProcesow.length; index++) {
                // listaPNDV[index] = new Array(2);
                // listaPNDV[index, 0] = "Test";
                if(listaProcesow[index].innerText.substring(0,4) == "PNDV"){
                    listaPNDV[indexpndv] = new Array(5);
                    listaPNDV[indexpndv][0] = listaProcesow[index].href;
                    listaPNDV[indexpndv][1] = "Status";
                    listaPNDV[indexpndv][2] = "AB";
                    listaPNDV[indexpndv][3] = "PNDV";
                    listaPNDV[indexpndv][4] = "SP";
                    indexpndv++;
                };
            };
            listaPNDV[indexpndv] = new Array(3);
            listaPNDV[indexpndv][0] = "Status";
            listaPNDV[indexpndv][1] = 1;
            listaPNDV[indexpndv][2] = listaPNDV.length - 2;
            GM_setValue(1,listaPNDV);
            window.location.href = listaPNDV[ listaPNDV[indexpndv][1]][0];
            break;
        case 'SP9':
            //GM_setValue(0,'SP10');
            let tablicaSP8 = GM_getValue(1);
            let znajdzSP = document.getElementsByClassName('relatedTask');
            for (let index = 0; index < znajdzSP.length; index++) {
                let status = znajdzSP[index].innerText.substr(0,27);
                switch(status) {
                    case "Sprzedaż i Dosprzedaż usług":
                        let dlugoscSP = znajdzSP[index].innerText.length;
                        if( znajdzSP[index].innerText.substr(dlugoscSP - 14,dlugoscSP)== "trakcie pracy)"){
                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][1] = "W trakcie pracy"; //status
                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][4] = znajdzSP[index].innerText.substring(29,dlugoscSP - 17); //nr SP
                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][0] = tablicaSP8[tablicaSP8.length - 1][1]; //indeks
                            let SP10procesPNDV = document.getElementsByTagName('a');
                            for (let index = 0; index < SP10procesPNDV.length; index++) {
                                if(SP10procesPNDV[index].innerText.substring(0,5) == "PNDV/"){
                                    tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][3] = SP10procesPNDV[index].innerText; //NR pndv
                                    let szukajNrKlienta = document.getElementsByTagName("td");
                                    for (let index = 0; index < szukajNrKlienta.length; index++) {
                                        if(szukajNrKlienta[index].innerText == "Numer konta"){
                                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][2] = szukajNrKlienta[index + 4].innerText;//nr ab
                                        };  
                                    };
                                 //copyToClipboard(tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][1]);
                                 //copyToClipboard(tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][2]);
                                 //copyToClipboard(tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][3]);
                                 //copyToClipboard( tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][4]);
                                };  
                            };
                        }else
                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][1] = "Git";
                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][0] = tablicaSP8[tablicaSP8.length - 1][1]; //indeks
                            let SP10procesPNDV = document.getElementsByTagName('a');
                            for (let index = 0; index < SP10procesPNDV.length; index++) {
                                if(SP10procesPNDV[index].innerText.substring(0,4) == "PNDV"){
                                    tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][3] = SP10procesPNDV[index].innerText; //NR pndv
                                    let szukajNrKlienta = document.getElementsByTagName("td");
                                    for (let index = 0; index < szukajNrKlienta.length; index++) {
                                        if(szukajNrKlienta[index].innerText == "Numer konta"){
                                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][2] = szukajNrKlienta[index + 4].innerText;//nr ab
                                        };  
                                    };
                                };  
                            };
                        break;
                };
                //tablicaSP8[index][0] = index;
                if(tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][1] == "Status"){
                    tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][0] = tablicaSP8[tablicaSP8.length - 1][1]; //indeks
                    tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][1] = "Brak SP";
                    let SP10procesPNDV = document.getElementsByTagName('a');
                    for (let index = 0; index < SP10procesPNDV.length; index++) {
                        if(SP10procesPNDV[index].innerText.substring(0,4) == "PNDV"){
                            tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][3] = SP10procesPNDV[index].innerText; //NR pndv
                            let szukajNrKlienta = document.getElementsByTagName("td");
                            for (let index = 0; index < szukajNrKlienta.length; index++) {
                                if(szukajNrKlienta[index].innerText == "Numer konta"){
                                    tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][2] = szukajNrKlienta[index + 4].innerText;//nr ab
                                };  
                            };
                        };  
                    };

                };
            };
            tablicaSP8[tablicaSP8.length - 1][1]++;
            GM_setValue(1,tablicaSP8);
            //tablicaSP8[tablicaSP8.length - 1][2]
            if( tablicaSP8[tablicaSP8.length - 1][1] <= tablicaSP8[tablicaSP8.length - 1][2]){
                window.location.href = tablicaSP8[tablicaSP8[tablicaSP8.length - 1][1]][0];
            }else{

                function download_txt() {
                    var textToSave = tablicaSP8;
                    var hiddenElement = document.createElement('a');
                  
                    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
                    hiddenElement.target = '_blank';
                    hiddenElement.download = GM_getValue(2) + '.txt';
                    hiddenElement.click();
                };
                download_txt();
                GM_setValue(0,'SP10')
            }; 
            // var test = GM_getValue(1,listaPNDV);
            // test1 = test[1][2];
            break;
            
    };
};

var ds = document.createElement("BUTTON");
var text12 = document.createTextNode(" DS ");
ds.appendChild(text12);
document.getElementById("Buttons").appendChild(ds);
ds.style.background = 'RoyalBlue';
ds.style.color = 'black';
ds.style.height = buttonHeight;
ds.style.width = buttonWidth;
ds.addEventListener("click", function() {
    let listaOZZW = document.getElementsByTagName('a');
   let notatki = document.getElementsByTagName('a');
   for (let index = 0; index < notatki.length; index++) {
    if(notatki[index].innerText == "Dodawanie notatek"){
        notatki[index].click();
        GM_setValue(1, "DS1");
    };
};
             
});

function dystrybucja(input){
    switch(input) {
        case 'DS1':
            GM_setValue(1,"DS2");
            if( document.getElementsByName('takeOver')[0] != undefined){
                document.getElementsByName('takeOver')[0].click();
            }else{
                document.getElementsByName('takeOwnership')[0].click();  
            }
            break;
        case 'DS2':
           
            let cofka = document.getElementsByTagName('a');
            for (let index = 0; index < cofka.length; index++) {
                if(cofka[index].innerText == "Przeglądaj szczegóły i historię procesu"){
                cofka[index].click();
                }; 
            };
            GM_setValue(1,"DS3");
            break;
            case 'DS3':
                
                let przekazany = document.getElementsByTagName('a');
                for (let index = 0; index < przekazany.length; index++) {
                    if(przekazany[index].innerText == "Przekazany"){
                    przekazany[index].click();
                    };
                };
                GM_setValue(1,"DS4");
            break; 
            case 'DS4':
                GM_setValue(1,"DS5");
                document.getElementsByName('takeOwnership')[0].click();
            break;
            case 'DS5':
                GM_setValue(1,"DS6");
                let test = document.getElementsByTagName('select');
                test[2].value = "ZKP";
                document.getElementsByName('send')[0].click();
            break;
            case 'DS6':
                GM_setValue(1,"DS7");
                document.getElementsByTagName('select')[1].value = "ZP";
                document.getElementsByName('send')[0].click();
            break;
            case 'DS7':
                GM_setValue(1,"DS8");
                document.getElementsByName('send')[0].click();
            break;
            case 'DS8':
                GM_setValue(1,"DS9");
                window.close();
            break;
    };
};



var dateStatus = document.createElement("button");
document.getElementById("Buttons").appendChild(dateStatus);
dateStatus.style.background = "Red";
dateStatus.style.color = "Red";
dateStatus.style.height = buttonHeight;
dateStatus.style.width = "22px";
dateStatus.style.visibility = "hidden"
if (numer_procesu != null){
    numer_procesu = numer_procesu.innerText;
        if (numer_procesu.substr(0,4) == "PNDV"){
            dateStatus.style.visibility ="visible";
        };
    };
checkingPersonalDate();
if (dateStatus.style.background == "Red"){
    checkingPesonalDateAlert();
    checkingPesonalDateAlertTimming();
};

//MODUŁ WYSZUKIWANIA PRZYCISKU CSRT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
