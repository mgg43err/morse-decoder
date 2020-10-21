function decode(expr) {
    expr = expr.match(/.{10}/g);
    console.log(expr);
    /* for (let j = 0; j < expr.length; j++) {
        expr[j] = expr[j].
    } */
    for (let i = 0; i < expr.length; i++) {
        expr[i] = expr[i].replace(/(11){1}/g, '-').replace(/(10){1}/g, '.').replace(/0/g, '').replace(/[*]{10}/g, ' ');
        expr[i] = expr[i].replace(/-----/g, '0').replace('----.', '9').replace(/(\-\-\-\.\.){1}/g, '8').replace(/(\-\-\.\.\.){1}/g, '7');
        expr[i] = expr[i].replace(/(\-\.\.\.\.){1}/g, '6').replace('.....', '5').replace(/(\.\.\.\.\-){1}/g, '4').replace(/(\.\.\.\-\-){1}/g, '3');
        expr[i] = expr[i].replace('..---', '2').replace('.----', '1').replace('--..', 'z').replace(/(\-\.\-\-){1}/g, 'y');
        expr[i] = expr[i].replace('-..-', 'x').replace(/(\.\.\.\-){1}/g, 'v').replace('--.-', 'q').replace('.--.', 'p');
        expr[i] = expr[i].replace(/\.\-\.\./g, 'l').replace('.---', 'j').replace(/(\.\.\.\.){1}/g, 'h').replace(/(\.\.\-\.){1}/g, 'f');
        expr[i] = expr[i].replace(/(\-\.\-\.){1}/g, 'c').replace('-...', 'b');
        expr[i] = expr[i].replace(/(\.\-\-){1}/g, 'w').replace(/(\.\.\-)/g, 'u').replace(/(\.\.\.){1}/g, 's').replace(/(\.\-\.)/g, 'r');
        expr[i] = expr[i].replace(/(\-){3}/g, 'o').replace('-.-', 'k').replace(/(\-\.\.){1}/g, 'd').replace(/(\-\-\.){1}/g, 'g');
        expr[i] = expr[i].replace(/(\-\.){1}/g, 'n').replace(/(\-\-){1}/g, 'm').replace(/(\.\.){1}/g, 'i').replace(/(\.\-)/g, 'a');
        expr[i] = expr[i].replace(/(\.){1}/g, 'e').replace(/(\-){1}/g, 't');

    }
    console.log(expr);
    expr = expr.join(',').replace(/,/g, '');
    console.log(expr);
    return expr;
}

module.exports = {
        decode

    }
    /* const expr = "11111111110000000010101010101011111111101110101010101011111111111111111111111111";
    const result = "0e596200";
    decode(expr); */