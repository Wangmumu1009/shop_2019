async function timeout(){
    return '1'
}

timeout().then(result=>{
    console.log(result);
});
console.log(2)