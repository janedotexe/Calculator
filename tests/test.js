let x = 'manish'; 

if (isNaN(x)) {
    console.log('Not a number');
}    else {
    console.log('Number');
    x = Number(x);
    if(Number.isInteger(x)) {
        console.log('Integer');
    }
    else {
        console.log('Float');
    }
}            


// check if its a number, and if it is, convert it to a number type, and then check if its an integer or a float 