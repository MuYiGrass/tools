function debounce(func,wait,immediate){
    var timeout, result;
    var debounced = function () {
        var context = this;
        var args = arguments;
        if (timeout) clearTimeout(timeout);

        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
        return result;
    };
    debounced.cancel = function(){
        clearTimeout(timeout)
        timeout = null
    }
    return debounced
}

// 立即执行
function throttle(func,wait){
    var context,args
    var previous = 0
    return function(){
        var now = new Date().getTime()
        context = this,
        args = arguments
        if(now - previous > wait){
            func.apply(context,args)
            previous = now
        }
    }
}

// n秒后再执行
function throttle1(func,wait){
    var timeout
    return function(){
        context = this
        args = arguments
        if(!timeout){
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context,arguments)
            },wait)
        }
    }
}


// 第四版
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }

    return throttled;
}

