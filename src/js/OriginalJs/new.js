function objectFactory(){
    var obj = new Object(),
    Constructor = [].shift.call(arguments)
    obj.__propto__ = Constructor.proptotype
    var ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}