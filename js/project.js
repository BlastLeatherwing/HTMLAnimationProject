//Declare any vars first

var imageCanvas;
var imageContext;
var imageArray = [[],[]];
var imageIter;
var subIter;
var subIterMax;
var canvWid;
var canvHei;
var clearOnSet;
var AnimSelect;

function init()
{
imageCanvas = document.getElementById("imgCanvas");
imageContext = imageCanvas.getContext("2d");
let i = 0;
for(; i < 9; i++)
{
    imageArray[0][i] = new Image();
    let testString = "./assets/BlastFlightFrame";
    let testString0 = testString+(i+1)+".png";
    imageArray[0][i].src = testString0;
}
for(i=0; i < 5; i++)
{
    imageArray[1][i] = new Image();
    let testString = "./assets/SamWalkFrame";
    let testString0 = testString+(i+1)+".png";
    imageArray[1][i].src = testString0;
}
imageIter = 0;
subIter = 0;
subIterMax=3;
canvWid = 300;
canvHei = 200;
AnimSelect = 0;
var subButton = document.getElementById("submitButton");
subButton.addEventListener("click", subClick);
//subClick();
//imageContext.drawImage(imageArray[0], 0, 0);
render();
}
// handleClick
function render()
{
    imageContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    imageContext.drawImage(imageArray[AnimSelect][imageIter], 0, 0);
    if(subIterMax != 0)
    {
    subIter++
    if(subIter == subIterMax)
    {
    subIter = 0;
    imageIter++;

    if(imageIter > (imageArray[AnimSelect].length)-1)
    {
        imageIter = 0;
    }
    }
    }
    else
    {
    imageIter++;

    if(imageIter > (imageArray[AnimSelect].length)-1)
    {
        imageIter = 0;
    }
    }
    requestAnimationFrame(render);
}
function subClick()
{
    //event.preventDefault();
    AnimSelect = document.getElementById("AnimSelect").value;
    subIterMax = document.getElementById("subIterMaxVal").value;
    canvWid = document.getElementById("canvWid").value;
    imageCanvas.width = canvWid;
    canvHei = document.getElementById("canvHei").value;
    imageCanvas.height = canvHei;
    clearOnSet = document.getElementById("clearSub").checked
    if(clearOnSet)
    {
    subIter = 0;
    }

}
/*

document.getElementById("submitButton").onclick = function(){
*/
