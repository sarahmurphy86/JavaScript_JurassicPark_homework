const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.getDinosaurCount = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
   this.dinosaurs.pop();
};

// Park.prototype.findPopularDinosaur = function () {
//   for dinosaur in dinosaurs
//   ret
//
// };

// Park.prototype.findSpecies = function (species) {
//
//   let dinosaurSpecies = []
//
//   for (let dinosaur in dinosaurs)
//     if dinosaur.species === species
//       dinosaurSpecies.push(dinosaur);
//       return dinosaurSpecies.length;
// };

module.exports = Park;
