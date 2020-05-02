const stdlib = require('@stdlib/math/base/special');

module.exports = class DataTransform {
    constructor(tseco, tumido, temp_bar, pressao) {
        this.tseco = tseco;
        this.tumido = tumido;
        this.temp_bar = temp_bar;
        this.pressao = pressao;
    }

    _p0c() {
        return this.pressao * (1-0.000163*this.temp_bar);
    }

    _pnormal() {
        let p0c = this._p0c();
        return (p0c - 1.3)*1013.25/760;
    }

    fcorr() {
        let pnormal = this._pnormal();
        return 1.0016+(0.00000315*pnormal-(0.074/pnormal));
    }

    ewptdw() {
        let fcorr = this.fcorr();
        let pnormal = this._pnormal();
        let expo = 17.62 * this.tumido / (243.12 / pnormal);
        console.log(expo);
        return fcorr * 6.112 * stdlib.exp(expo);
    }

    ewptd() {
        let ewptdw = this.ewptdw();
        let pnormal = this._pnormal()
        let tdiference = this.tseco - this.tumido;
        console.log(tdiference);
        let constant = 1 + 0.000944 * this.tumido;
        console.log(constant);
        let resp = ewptdw - (0.000653 * constant * pnormal * tdiference);
        console.log('resp ' + resp);
        return resp;
    }

    ewpt() {
        let fcorr = this.fcorr()
        return fcorr * 6.112 * stdlib.exp(17.62  * this.tseco / (243.12 + this.tseco));
    }

    umidadeRelativa() {
        let ewptd = this.ewptd();
        let ewpt = this.ewpt();
        return (ewptd / ewpt) * 100;
    }
}

