var chai = require('chai');
chai.should();
var expect = chai.expect;
var sinon = require('sinon');

var putHandler = require("../lib/v1/handlers/putHandler.js");
var model = require('../lib/v1/models/Model.js');

describe('putHandler', function () {

    describe('without error', function () {

        var request = {
            params: {
                id: '554f284318f361904bda49e1'
            },
            payload: { 
            }
        };

        var  = {
            _id: '554f284318f361904bda49e1'
        };

        var result, stub;

        before(function (done) {
            stub = sinon.stub(model.prototype, 'update').yields(null, );

            putHandler.handler(request, function (code) {
                result = code;
                done();
            });
        });

        it('should return id of updated ', function () {
            expect(result).to.equal(request.params.id);
        });

        after(function(){
            stub.restore();
        });

    });

    describe('with error', function () {

        var request = {
            params: {
                id: '554f284318f361904bda49e1'
            },
            payload: { 
            }
        };

        var result, stub;

        before(function (done) {
            stub = sinon.stub(model, 'update').yields('could not update', null);

            putHandler.handler(request, function (code) {
                result = code;
                done();
            });
        });

        it('should return error', function () {
            expect(result.toString()).to.equal('Error: could not update');
        });

        after(function(){
            stub.restore();
        });

    });

});

