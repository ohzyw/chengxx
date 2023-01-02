var foods = "小明  小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 小明 "
var food = foods.split(" ")
var main = document.getElementsByClassName("main")[0]
var start = document.getElementById("start")
var back = document.getElementsByClassName("back")[0]
var stop = true
var texts = []
var colors = [
    "#eccc68",
    "#ffa502",
    "#7bed9f",
    "#a4b0be",
    "#70a1ff",
    "#ff6b81",
    "#bfa",
    "skyblue",
    "#FFB6C1",
    "#00FFFF",
    "#228B22",
    "#8A2BE2",
    "#DC143C",
    "#FF8C00 ",
    "#FFF5EE ",
    "#FF69B4",
    "#FF1493",
    "#87CEEB",
    "#00FF7F",
    "#7CFC00",
    "#FFA500",
    "DarkCyan",
    "#CDC1C5",
    "#4EEE94"
]

function draw() {
    back.innerHTML = ""
    if (!stop) {
        main.innerHTML = food[parseInt(Math.random() * food.length)]
        start.innerHTML = "就是你了"
    } else {}
    for (var i = 0; i < texts.length; i++) {
        text = texts[i]
        var span = document.createElement("span")
        span.style.position = "absolute"
        span.style.top = text.sy + "px"
        span.style.left = text.sx + "px"
        span.style.color = text.color
        span.style.fontSize = text.size + "px"
        span.style.opacity = 1 - text.age / 100
        if (stop) {
            span.innerHTML = main.innerHTML
        } else {
            span.innerHTML = text.str
        }
        back.appendChild(span)
        text.sy += text.vy
        text.age++
            if (text.age > 100) {
                texts.splice(i, 1)
            }
    }
    if (texts.length < 50) {
        texts.push({
            str: food[parseInt(Math.random() * food.length)],
            sx: Math.random() * window.innerWidth,
            sy: Math.random() * window.innerHeight,
            vy: -Math.random(),
            color: colors[parseInt(Math.random() * colors.length)],
            size: Math.random() * 20 + 20,
            age: Math.random() * 20
        })
    }
}
setInterval(draw, 10); //10毫秒刷新
setInterval(draw, 10); //10毫秒刷新
