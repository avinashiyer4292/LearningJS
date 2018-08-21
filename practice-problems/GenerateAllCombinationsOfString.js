//example - printCombination("abc") = a, ab, abc, ac,  b, bc, c


const combine = (input, output, index) => {
    if(input === null || index > input.length)
        return;
    
        for(let i=index; i<input.length;i++){
            output = output.concat(input.charAt(i));
            console.log(`Output: ${output}`);
            combine(input, output, i + 1);
            output = output.substr(0, output.length-1);
            console.log(`Substr: ${output}`);
        }

        return output;
}

combine("abc","",0);