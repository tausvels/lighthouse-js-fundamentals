let number = 100;

while (number <= 200){
    if(number % 3 == 0 && number % 4 == 0){
        console.log('LoopyLighthouse');
        return ('LoopyLighthouse');
    }else if(number % 3 == 0){
        console.log('Loopy');
        return 'Loopy';
    }else if(number % 4 == 0){
        console.log('Lighthouse');
        return 'Lighthouse';
    }else{
        return number;
    }
    number++;
}