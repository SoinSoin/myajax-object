class Ajax {
    constructor() {
        this.objHTTP = new XMLHttpRequest();
        this.param = null;
    }
    get parameters() {
        return this.setParameters;
    }
    setParameters(param) {
        param.parse;
        param.methode;
        param.url;
        param.data.key;
        param.data.value;
        // define option parameters of XML objects 
        this.param = param;
    }
    get connect() {
        return this.setConnect;
    }
    setConnect() {
        this.objHTTP.open(this.param.methode, this.param.url, true);
        this.objHTTP.setRequestHeader("Access-Control-Allow-Origin", "*");
    }
    get res() {
        return this.setRes;
    }
    setRes() {
        this.objHTTP.onload = this.value;
        // this.objHTTP.send(this.param.key + '=' + this.param.value);
    }
    get value() {
        try {
            this.setValue;

        } catch (error) {
            console.log(error);
        }
    }
    setValue() {
        var data = JSON.parse(this.responseText);
        console.log(data)
        return data;
    }
}

var test1 = new Ajax();
test1.parameters({
    parse: 'json',
    methode: 'GET',
    url: 'https://randomuser.me/api/',
    data: {
        // key: 'mykey',
        // value: 'value',
    }
})
test1.connect();
var myData = test1.res();
// console.log