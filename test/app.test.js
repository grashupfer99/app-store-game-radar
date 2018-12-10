const expect = require("chai").expect;
const joinGameIds = require("../src/app").joinGameIds;
const gameScraper = require("../src/app").gameScraper;
const getResultData = require("../src/getResultData").getResultData;
const validate = require("../src/app").validate;
const paramValidator = require("../src/app").paramValidator;
const params = require('../src/config');

describe("App.js", () => {

    describe("gameScraper()", () => {
       

        it("should return 200 items", async () => {
            const num = 200;
            const gameList = await gameScraper({
                country: 'kr',
                category: params.feed.topFree,
                num: num
            });
            return expect(gameList.length).to.equal(num);
        })

        it("score should return a number", async () => {
            const num = 200;
            const gameList = await gameScraper({
                country: 'kr',
                category: params.feed.topFree,
                num: num,
                fullDetails: true
            });

            gameList.map( async item => {
                // expect(item.score).to.not.be.undefined;
                const score = await item.score
                return expect(score).to.be.a('number');
            })
        })

    })

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
    describe("getResultData", ()=>{
        it("should be a function", () => {
            expect(getResultData).to.be.a("function");
        })

    })
    describe("Validate input params", () => {
        describe("contry", () => {
            it("should be a function", () => {
                expect(validate).to.be.a("function");
            })
            // Do for each country on the list
            it("should return true for all countries on the list", ()=> {
                let flag = true;
              params.countries.map(country => {
                  if((!validate(country, params.countries))){
                    flag = false; 
                    console.log('no match: ', country);
                  }
                  return flag;
              })
              expect(flag).to.be.true;  
            })
            it("should return true when the country is found", ()=> {
                expect(validate('us' ,params.countries)).to.be.true;
            })
            it("should return false when the country isn't on the list", ()=> {
                expect(validate('aa', params.countries)).to.be.false;
            })
        });
        describe("category", () => {
            const categories = Object.values(params.feed);
            it("should return true when the category is found", ()=> {
                expect(validate(params.feed.newGamesWelove, categories)).to.be.true;
            })
            it("should return false when the category isn't found", ()=>{
                expect(validate('/games/all', categories)).to.be.false;    
            })
        });
    });
    describe("paramValidator()", ()=> {
        it("should throw an error when the country isn't found", ()=>{
            expect(paramValidator.bind(paramValidator, 'aa', params.feed.topFree, 10)).to.throw("country not found!");
        });
        it("should throw an error when the category type isn't found", () => {
            expect(paramValidator.bind(paramValidator, "kr", "category/games", 100)).to.throw("category type not found!");
        })
        it("should throw an error when num is bigger than 200", () => {
            expect(paramValidator.bind(paramValidator, "kr", params.feed.topPaid, 201)).to.throw("num should be less than 200!")
        })
    })
});