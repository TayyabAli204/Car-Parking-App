const { CarParking } = require("../models/parkingModel");

function generateRandomCharacter() {
  // Generate a random number between 0 and 25
  var randomNumber = Math.floor(Math.random() * 26);

  // Convert the random number to a character code (ASCII)
  var charCode = 97 + randomNumber; // ASCII code for lowercase 'a' is 97

  // Convert the character code to a character
  var randomCharacter = String.fromCharCode(charCode);

  return randomCharacter;
}

const addParkingArea = async (req, res) => {
  try {
    const { location } = req.body;
    const parkingData = {
      parkingLotName: "Lot " + generateRandomCharacter(),
      userName: "",
      parkingSpaceNumber: 1,
      entryTime: null,
      exitTime: null,
      BookedTime: null,
      totalParkingTime: 0,
      booked: false,
      perHourFee: 1000,
      location,
    };
    const initialData = new Array(8)
      .fill(0)
      .map((item) =>
       (
        { ...parkingData,   
         parkingLotName: "Lot " + generateRandomCharacter() }
         )
       
    );

    const data = await CarParking.insertMany(initialData);
    console.log(data);
    res.end("done");
  } catch (err) {}
};

module.exports = {
  addParkingArea,
};
