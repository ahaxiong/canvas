var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
autoSetCanvasSize(canvas)




function autoSetCanvasSize(canvas){
    setCanvasSize()
    window.onresize = function(){
        setCanvasSize()
    }
    function setCanvasSize(){
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}
function drawCircle(x,y,radius){
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(x,y,radius,0,Math.PI*2)
}

function drawLine(x1,y1,x2,y2){
    context.beginPath()
    context.strokeStyle = 'black'
    context.moveTo(x1,y1)
    context.lineWidth = 5
    context.moveTo(x2,y2)
    context.closePath()
}