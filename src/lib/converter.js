export function toCelsious(fahrenheit){
    return ((fahrenheit - 32) *5 ) / 9;
}

export function toFahrenheit(celsious){
    return (celsious * 9) / 5 + 32;
}

export function convert(temparature, convertTo){
    const input = parseFloat(temparature);

    if(Number.isNaN(input)){
        return '';
    }

    const output = convertTo(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}