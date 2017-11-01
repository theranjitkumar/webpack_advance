import lgoImg from "../../assets/images/logo.png";

export var showName = function() {
    document.getElementById("app").innerHTML = "webpack working good see console...";
    console.log("webpack working good...'");
}
class Webpackapp {
    constructor() {
        //super();
    }

    dispLogo() {
        document.getElementById("logo").setAttribute('src', lgoImg);
        console.log("Message from Webpack class");
    }
    sayBy() {
        console.log("by.... Tack care..");
    }
}
export var wpkApp = new Webpackapp();