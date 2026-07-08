//Declare any vars first

var imageCanvas;
var imageContext;
var imageArray = [];
var imageIter;
var subIter;

function init()
{
imageCanvas = document.getElementById("imgCanvas");
imageContext = imageCanvas.getContext("2d");
let i = 0;
for(; i < 9; i++)
{
    imageArray[i] = new Image();
    let testString = "./assets/BlastFlightFrame";
    let testString0 = testString+(i+1)+".png";
    imageArray[i].src = testString0;
}
imageIter = 0;
subIter = 0;
//imageContext.drawImage(imageArray[0], 0, 0);
render();
}
// handleClick
function render()
{
    imageContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    imageContext.drawImage(imageArray[imageIter], 0, 0);
    subIter++
    if(subIter == 3)
    {
    subIter = 0;
    imageIter++;
    if(imageIter > 8)
    {
        imageIter = 0;
    }
    }
    requestAnimationFrame(render);
    }
