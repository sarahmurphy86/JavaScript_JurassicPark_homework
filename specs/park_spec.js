const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur
  let dinosaur1

  beforeEach(function () {
    park = new Park ('Jurassic Park', 15.00);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('velociraptor', 'carnivore', 100);

  });

  it('should have a name', function(){
    assert.strictEqual(park.name,'Jurassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 15.00)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual([], actual)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur)
    const actual = park.dinosaurs[0]
    assert.deepStrictEqual(dinosaur, actual)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur)
    park.removeDinosaur()
    const actual = park.dinosaurs;
    assert.deepStrictEqual([], actual)
  });

// add dinosaurs to Park
// loop through park and find dinosaur with the highest guests attracted per guestsAttractedPerDay
 // return thr dinosuar
  // it('should be able to find the dinosaur that attracts the most visitors', function(){
  //   park.addDinosaur(dinosaur)
  //   park.addDinosaur(dinosaur1)
  //   const actual = park.findPopularDinosaur();
  //   assert.strictEqual(dinosaur.name, actual)
  // });


  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    const actual = park.dinosaurs.findSpecies('t-rex');
    assert.strictEqual([dinosaur1], actual)
  });



  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    
  });

});
