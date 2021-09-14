Function.prototype.call2 = function(context){
    var context = context || window
    context.fn = this
    var args = []
    for(let i = 0;i < arguments.length; i++){
        args.push('arguments[' + i + ']')
    }
    var result = eval('context.fn(' + args + ')')
    delete context.fn
    return result
}

Function.prototype.apply2 = function(context,arr){
    var context = Object(context) || window;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result;
}

// 第一版
Function.prototype.bind2 = function (context) {
    var self = this;
    return function () {
        return self.apply(context);
    }
}

Function.prototype.bind2 = function(context){
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context, args.concat(bindArgs))
    }
}

Function.prototype.bind2 = function(context){
    var self = this
    var args = Array.prototype.slice.call(arguments,1)
    var fBound = function(){
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
    }
    fBound.prototype = this.prototype
    return fBound
}


var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');