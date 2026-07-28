//Declare any vars first

var imageCanvas;
var imageContext;
var imageArray = [[],[],[],[],[],[],[]];
var imageIter;
var subIter;
var subIterMax;
var canvWid;
var canvHei;
var xOffset;
var yOffset;
var groundOffset;
var clearOnSet;
var AnimSelect;
var drawGround;
var groundColor;
var ImgScale;
var XFlipped;

function init()
{
imageCanvas = document.getElementById("imgCanvas");
imageContext = imageCanvas.getContext("2d");
imageContext.imageSmoothingEnabled = false;
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
for(i=0; i < 8; i++)
{
    imageArray[2][i] = new Image();
    let testString = "./assets/SamTurnFrame";
    let testString0 = testString+(i+1)+".png";
    imageArray[2][i].src = testString0;
}
imageArray[3][0] = new Image();
imageArray[3][0] = imageArray[1][0];
for(i=1; i < 17; i++)
{
    imageArray[3][i] = new Image();
    let testString = "./assets/SamDigFrame";
    let testString0 = testString+(i)+".png";
    imageArray[3][i].src = testString0;
}
imageArray[4][0] = new Image();
imageArray[4][0] = imageArray[1][4];
for(i=1; i < 5; i++)
{
    imageArray[4][i] = new Image();
    let testString = "./assets/SamAttackFrame";
    let testString0 = testString+(i)+".png";
    imageArray[4][i].src = testString0;
}
imageArray[4][5] = new Image();
imageArray[4][5] = imageArray[1][4];
for(i=0; i < 10; i++)
{
    imageArray[5][i] = new Image();
    let testString = "./assets/SamJumpFrame";
    let testString0 = testString+(i+1)+".png";
    imageArray[5][i].src = testString0;
}
imageArray[5][10] = new Image();
imageArray[5][10] = imageArray[5][0];
imageArray[6][0] = new Image();
imageArray[6][0] = imageArray[1][4];
for(i=1; i < 11; i++)
{
    imageArray[6][i] = new Image();
    let testString = "./assets/SamIdleFrame";
    let testString0 = testString+(i)+".png";
    imageArray[6][i].src = testString0;
}
imageIter = 0;
subIter = 0;
subIterMax=3;
canvWid = 300;
canvHei = 200;
xOffset = 0;
yOffset = 0;
AnimSelect = 0;
ImgScale = 1;
XFlipped = false;
var subButton = document.getElementById("submitButton");
subButton.addEventListener("click", subClick);
//subClick();
//imageContext.drawImage(imageArray[0], 0, 0);
render();
}
// handleClick
function render()
{
    //imageContxt.save();
    imageContext.imageSmoothingEnabled = false;
    imageContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    imageContext.save();
    let origXoffSet = xOffset;
    let xScale = ImgScale;
    if (XFlipped == true)
    {
    xScale = -1 * ImgScale;
    xOffset = (-1 * xOffset)-(imageArray[AnimSelect][imageIter].width);
    if (xOffset >= 0)
    {
        xOffset = (-1 * xOffset)-(imageArray[AnimSelect][imageIter].width);//Is this a dumb way to stop it from oscillating?
    }
    }
    else
    {
    xScale = ImgScale;
    }
    imageContext.scale(xScale, ImgScale);
    if (drawGround)
    {
        if(typeof groundColor != undefined)
        {
            imageContext.fillStyle = groundColor;
        }
        else
        {
            imageContext.fillStyle = '#0a6666';
        }
        imageContext.fillRect(xOffset, yOffset+groundOffset, imageCanvas.width, 10);
    }
    imageContext.drawImage(imageArray[AnimSelect][imageIter], xOffset, yOffset);
    xOffSet = origXoffSet;
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
    imageContext.restore();
    requestAnimationFrame(render);
}
function subClick()
{
    //event.preventDefault();
    let tempAnimSelect = document.getElementById("AnimSelect").value;
    if(AnimSelect != tempAnimSelect)
    {
    AnimSelect = document.getElementById("AnimSelect").value;
    imageIter = 0;
    }
    subIterMax = document.getElementById("subIterMaxVal").value;
    canvWid = document.getElementById("canvWid").value;
    imageCanvas.width = canvWid;
    canvHei = document.getElementById("canvHei").value;
    imageCanvas.height = canvHei;
    xOffset = document.getElementById("xOffset").value;
    yOffset = document.getElementById("yOffset").value;
    groundOffset = document.getElementById("groundOffset").value;
    clearOnSet = document.getElementById("clearSub").checked;
    if(clearOnSet)
    {
    subIter = 0;
    }
    drawGround = document.getElementById("drawGround").checked;
    XFlipped = document.getElementById("xFlip").checked;
    groundColor = document.getElementById("groundColor").value;
    ImgScale = document.getElementById("ImageScale").value;
}
/*

document.getElementById("submitButton").onclick = function(){
*/
