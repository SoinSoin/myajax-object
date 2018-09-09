class Ajax {
    constructor() {
        this.objHTTP = new XMLHttpRequest();
        this.param = null;
    }
    get parameters() {
        return this.setParameters;
    }
    setParameters(param = {
        methode: null,
        url: null,
        data: {
            key: null,
        }
    }) {
        this.param = param;
    }
    get bind() {
        return this.setBind;
    }
    setBind() {
        this.objHTTP.open(this.param.methode, this.param.url, true);
        this.onload = this.value;
        this.objHTTP.send(null);
    }
    get value() {
        return this.setValue;
    }
    setValue() {
        try {
            console.log(this.responseText);
        } catch (error) {
            console.log(error)
        }
    }

}

var test1 = new Ajax();
test1.parameters({
    methode: 'GET',
    url: 'https://randomuser.me/api/',
    data: {
        'cle': 'valeur',
    }
})

test1.bind()