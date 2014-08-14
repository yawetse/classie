/*jshint -W079, -W020 */
/*global window, document, subject, exports,define: false, module: false */
var classie = require('../../lib/classie.js'),
    fixtures = require('../fixtures/fixtures.js'),
    expect = require('chai').expect;


describe('The new classie js', function() {
    describe('adding a single class to an element', function() {
        beforeEach(function() {
            var div = document.createElement('div');
            var section = document.createElement('section');
            div.innerHTML = fixtures.fruits;
            section.appendChild(div);
            section.id = "section";
            document.body.appendChild(section);
            subject = document.getElementById('fruits');
            return subject;
        });
        afterEach(function() {
            var body = document.body,
                sections = document.querySelectorAll("section");
        });
        it("it should be an object", function() {
            expect(classie).to.be.an('object');
        });
        it("should have properties add,remove,has,toggle", function() {
            expect(classie).to.include.keys('add');
            expect(classie).to.include.keys('remove');
            expect(classie).to.include.keys('toggle');
            expect(classie).to.include.keys('has');
        });
        it("should be in the global context", function() {
            expect(exports.classie).to.not.be.null;
        });
        describe('The basic classie interface/api', function() {

            it('should be able to add a single class', function() {
                classie.addClass(subject, 'hello');
                var classieElem = document.querySelector('.hello');
                expect(classieElem.className).to.eql('hello');
            });
            it('should be able to remove a single class', function() {
                classie.removeClass(subject, 'hello');
                expect(subject.className).to.be.eql('');
            });
            it('should tell you if a class exists on an element', function() {
                expect(classie.hasClass(subject, 'blah')).to.be.false;
            });
            it('should be able to toggle the class on an element', function() {
                classie.toggleClass(subject, 'awesome');
                var classieElem = document.querySelector('.awesome');
                expect(classieElem.className).to.eql('awesome');
                classie.toggleClass(subject, 'awesome');
                expect(subject.className).to.be.eql('');
            });
        });
        describe('classie advanced features', function() {

            it('should be able to take an array of classes', function() {
                classie.addClass(subject, ['awesome', 'hello', 'classieIsAwesome']);
                var classieElem = document.querySelector('.awesome');
                expect(classieElem.className).to.eql('awesome hello classieIsAwesome');
            });
            it('should be able to remove an array of classes', function() {
                classie.removeClass(subject, ['awesome', 'hello', 'classieIsAwesome']);
                expect(subject.className).to.eql('');
            });
        });
    });
});
