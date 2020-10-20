function decode(expr) {
    console.log(expr);
    const l = expr.split(/(.){10}/g, ',');
    console.log(l);
    expr = expr.replace(/(11){1}/g, '-');
    console.log(expr);
    expr = expr.replace(/(10){1}/g, '.');
    console.log(expr);
    expr = expr.replace(/[*]{10}/g, ' ');
    console.log(expr);
    expr = expr.replace(/-----/g, '0').replace('----.', '9').replace(/(\-\-\-\.\.){1}/g, '8').replace(/(\-\-\.\.\.){1}/g, '7');
    expr = expr.replace(/(\-\.\.\.\.){1}/g, '6').replace('.....', '5').replace(/(\.\.\.\.\-){1}/g, '4').replace(/(\.\.\.\-\-){1}/g, '3');
    expr = expr.replace('..---', '2').replace('.----', '1').replace('--..', 'z').replace(/(\-\.\-\-){1}/g, 'y');
    expr = expr.replace('-..-', 'x').replace(/(\.\.\.\-){1}/g, 'v').replace('--.-', 'q').replace('.--.', 'p');
    expr = expr.replace(/\.\-\.\./g, 'l').replace('.---', 'j').replace(/(\.\.\.\.){1}/g, 'h').replace(/(\.\.\-\.){1}/g, 'f');
    expr = expr.replace(/(\-\.\-\.){1}/g, 'c').replace('-...', 'b');
    expr = expr.replace(/(\.\-\-){1}/g, 'w').replace(/(\.\.\-)/g, 'u').replace(/(\.\.\.){1}/g, 's').replace(/(\.\-\.)/g, 'r');
    expr = expr.replace(/(\-){3}/g, 'o').replace('-.-', 'k').replace(/(\-\.\.){1}/g, 'd').replace(/(\-\-\.){1}/g, 'g');
    expr = expr.replace(/(\-\.){1}/g, 'n').replace(/(\-\-){1}/g, 'm').replace(/(\.\.){1}/g, 'i').replace(/(\.\-)/g, 'a');
    expr = expr.replace(/(\.){1}/g, 'e').replace(/(\-){1}/g, 't') /* .replace(/0/g, '') */ ;
    console.log(expr);
    return expr;
}

module.exports = {
    decode

}
const expr = "00000000100000111010101010111100111011100000001011111110101011111010101010101010";
const result = "ed3ca775";
decode(expr);