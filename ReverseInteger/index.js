var reverse = function(x) {
    const signal = [String(x).split('')[0]];
    let reverseNum = Number(String(x).split('').reverse().join(''))
    if(signal == '-') {
        let reverseNegativeNum = String(x).replace('-', '').split('').reverse();
        reverseNegativeNum.map( num => signal.push(num));
        reverseNegativeNum = Number(signal.join(''));
        if(reverseNegativeNum >= Math.pow(-2, 31) && reverseNegativeNum <= Math.pow(2, 31) - 1){
            return reverseNegativeNum;
        }
        return 0;
    };
    if(reverseNum >= Math.pow(-2, 31) && reverseNum <= Math.pow(2, 31) - 1) return reverseNum;
    return 0;
 };