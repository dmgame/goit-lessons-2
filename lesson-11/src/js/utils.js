export const debounce = function(func, delay){
    let timer;
    return function () {
        const args = arguments;
        clearTimeout(timer); 
        timer = setTimeout(()=> func(...args), delay);
    }
}