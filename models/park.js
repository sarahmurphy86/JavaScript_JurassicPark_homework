const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = [];
}

Park.prototype.getDinosaurCount = function () {
  return this.collection.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
   this.collection.pop();
};

// Function should return the loop through park and find dinosaur with the highest guests attracted per guestsAttractedPerDay
 // return the dinosuar
// Loop through dinosuars
// If dinosaur

// Park.prototype.findPopularDinosaur = function () {
//   for dinosaur in dinosaurs
//   ret
//
// };

Park.prototype.findSpecies = function (species) {

  let dinosaurSpecies = []

  for (const dinosaur in this.collection)
    if dinosaur.species === species
      dinosaurSpecies.push(dinosaur);
      return dinosaurSpecies.length;
};

module.exports = Park;
