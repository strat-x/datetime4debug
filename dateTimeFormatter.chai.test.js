const chai = require('chai'); //more advanced assert module
const expect = chai.expect; //assign the expect flavor of chai to our constants. Can also be should or assert

var dtFormat = require('./dateTimeFormatter');

describe('dateTimeFormatter to return formatted number with equal digits', () => {
    context('default formatNumber', ()=>{
        it('number 1', () => {
            expect(dtFormat.formatNumber(1)).to.equal("01");
        });
        it('number 2', () => {
            expect(dtFormat.formatNumber(2)).to.not.equal("002");
        });
        it('number 03', () => {
            expect(dtFormat.formatNumber("03")).to.equal("03");
        });
        it('number 04', () => {
            expect(dtFormat.formatNumber("04")).to.a("string");
        });
    });
    context('formatNumber with 3 digits', () => {
        it('number 1', () => {
            expect(dtFormat.formatNumber(1,3)).to.equal("001");
            expect(dtFormat.formatNumber(1,3)).to.a("string");
        })
    });
    context('formatNumber with 4 digits', () => {
        it('number 1 with 4 digits', () => {
            expect(dtFormat.formatNumber(1,4)).to.equal(1).to.a("number");
           
        });
        it('string 2 with 4 digits', () => {
            expect(dtFormat.formatNumber("2",4)).to.equal("2").to.a("string");
           
        });
         it('number 03 with 4 digits', () => {
            expect(dtFormat.formatNumber(03,4)).to.equal(3).to.a("number");
        }); 
        it('sring 04 with 4 digits', () => {
            expect(dtFormat.formatNumber("04",4)).to.equal("04").to.a("string");
        }); 
    });
    context('empty value', () => {
        it('empty value with default digits', () => {
            expect(dtFormat.formatNumber("")).to.empty;
        });
        it('empty string with default digits', () => {
            expect(dtFormat.formatNumber(" ")).to.equal(" ").to.length(1);
        });
    });
    context('value longer than nbr of digits', () => {
        it('value 123 with digits 2', () => {
            expect(dtFormat.formatNumber(123,2)).to.equal(123);
        });
    })
})