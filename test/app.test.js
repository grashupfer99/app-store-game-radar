const expect = require("chai").expect;
const joinGameIds = require("../src/app").joinGameIds;
const fetchData = require("../src/fetchData").fetchData;
const validate = require("../src/app").validate;
const paramValidator = require("../src/app").paramValidator;
const params = require('../src/config');

describe("App.js", () => {
    describe("joinGameIds()", ()=> {
        it("should be a function", ()=>{
            expect(joinGameIds).to.be.a("function");
        });

        it("should return a string", () => {
            const sampleGames = [
                {id:1, name:"Game One"},
                {id:2, name:"Game Two"},
                {id:3, name:"Game Three"},
                {id:4, name:"Game Four"},
            ];
            expect(joinGameIds(sampleGames)).to.be.a("string");
        });

    });
    describe("fetchData", ()=>{
        it("should be a function", () => {
            expect(fetchData).to.be.a("function");
        })

    })
    describe("validate params", () => {
        describe("contry", () => {
            it("should be a function", () => {
                expect(validate).to.be.a("function");
            })
            // Do for each country on the list
            it("should return true when a country('kr', 'us', 'jp', or 'ch'...) is found", ()=> {
                expect(validate('us' ,params.countries)).to.be.true;
            })
            it("should return false when a country isn't on the list", ()=> {
                expect(validate('aa', params.countries)).to.be.false;
            })
        });
        describe("category", () => {
            const categories = Object.values(params.feed);
            it("should return true when a category is found", ()=> {
                expect(validate(params.feed.newGamesWelove, categories)).to.be.true;
            })
            it("should return false when a category isn't found", ()=>{
                expect(validate('/games/all', categories)).to.be.false;    
            })
        });
    });
    describe("paramValidator()", ()=> {
        it("should throw error when country isn't found", ()=>{
            expect(paramValidator.bind(paramValidator, 'aa', params.feed.topFree, 10)).to.throw("country not found!");
        })
    })
});