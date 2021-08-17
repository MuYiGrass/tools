// setTimeout 校正
function timer () {
    var speed = 500
    var counter = 1
    var start = new Date().getTime();

    function instance () {
        var ideal = (counter * speed)
        var real = (new Date().getTime() - start);
        counter++;
        var diff = (real - ideal);
        // form.diff.value = diff;
        window.setTimeout(function () { instance(); }, (speed - diff)); // 通过系统时间进行修复
    };

    window.setTimeout(function () { instance(); }, speed);
}


