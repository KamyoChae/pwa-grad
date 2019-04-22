export default function water (dom, color, amplitude, speed = 0.02){
    let width =  document.body.clientWidth 
    let height = "200"
    let banCanvas = dom
    banCanvas.width = width
    banCanvas.height = height
    let ctx = banCanvas.getContext('2d')

    let w = 1
    function fn(){
        let options = []
        let A = amplitude, B = 1 / 100, C = 100
        for (let i = 0; i < width; i++) { 
            let op = {
                y: A * Math.sin((B * i/2) + w ) + 2*A,
                x: i,
            }
            options.push(op)
        }
        options.push({x:width, y:0}) 
        ctx.clearRect(0, 0, width, height)  
        ctx.beginPath()
        ctx.moveTo(0, 0);
        for (let j = 0; j < options.length; j++) {
            let option = options[j]

            ctx.lineTo(option.x, option.y);
        }

        ctx.fill();
        ctx.strokeStyle = color // 填充描边颜色
        ctx.fillStyle = color  // 填充区域颜色
        ctx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
        ctx.stroke(); //描边。stroke不会自动closePath() 
        w += speed
        window.requestAnimationFrame(fn) 
    }

    return fn()
}

