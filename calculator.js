let str=prompt('Enter the equation');

if(str.includes('+')){
    console.log(+str.split('+')[0] + +str.split('+')[1]);
}
else if(str.includes('-')){
    console.log(+str.split('-')[0] - +str.split('-')[1]);
}
else if(str.includes('*')){
    console.log(+str.split('*')[0] * +str.split('*')[1]);
}
else if(str.includes('/')){
    console.log(+str.split('/')[0] / +str.split('/')[1]);
}
