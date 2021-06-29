function hexToRgba(hex,opacity){
    return `rgba(
        ${parseInt('0x' + hex.slice(1,3))},
        ${parseInt('0x' + hex.slice(3,5))},
        ${parseInt('0x' + hex.slice(5,7))},
        ${opacity}
    )`
}

function RgbToHex(r,g,b){
    const INT_HEX_MAP = {
        10:'A',
        11:'B',
        12:'C',
        13:'D',
        14:'E',
        15:'F',
    }
    const hex = function(value){
        value = Math.min(Math.round(value),255)
        const high = Math.floor(value / 16);
        const low = value % 16;
        return '' + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low); // 转换核心
    }
    if (isNaN(r) || isNaN(g) || isNaN(b)) return '';
  return '#' + hex(r) + hex(g) + hex(b);
}

function colorRGB2Hex(color) {
    var rgb = color.split(',')
    var r = parseInt(rgb[0].split('(')[1])
    var g = parseInt(rgb[1])
    var b = parseInt(rgb[2].split(')')[0])
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex
}

