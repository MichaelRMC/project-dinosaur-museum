
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
function getRoomByDinosaurName ( dinosaurs, rooms, dinosaurName )
{
    let roomName = "Dinosaur with name " + dinosaurs.name + " cannot be found.";
    for ( const room of rooms )
    {
        for ( const dinosaur of dinosaurs )
        {
            console.log( dinosaur );
        }
    }
}