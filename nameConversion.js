document.addEventListener("input", my_func);


function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function pascalCase(str){
    return (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
}

function snakeCase(str){
    const strArr = str.split(' ');
    const snakeArr = strArr.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
     }, []);
     return snakeArr.join('_');
}

function kebabCase(str){
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
}


function my_func() {
    let text = document.getElementById("text").value;
    let btn = document.getElementById("convert-btn");

    btn.addEventListener("click", () => {
        
        //camelize
        let str1 = camelize(text);
        document.getElementById("camel-case").innerText = str1;

        // pascal
        let str2 = pascalCase(text);
        document.getElementById("pascal-case").innerText = str2;
        
        //snake_case
        let str3 = snakeCase(text);
        document.getElementById("snake-case").innerText = str3;

        //screaming-snake-case
        let str4 = snakeCase(text);
        document.getElementById("screaming-snake-case").innerText = str4;

        //kebab case
        let str5 = kebabCase(text);
        document.getElementById("kebab-case").innerText = str5;
        
        //screaming-kebab-case
        let str6 = kebabCase(text);
        document.getElementById("screaming-kebab-case").innerText = str6;
    })

}
