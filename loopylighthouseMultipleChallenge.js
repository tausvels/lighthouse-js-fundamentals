function loopyLighthouse(range, multiples, words) {
    let condition = true;
    (range.length === 2) ? condition = true : condition = false;
    (multiples.length === 2) ? condition = true : condition = false;
    (words.length === 2) ? condition = true : condition = false;

    if (condition === true) {
        (range[0] > range[1]) ? condition = false : condition = true;
    }

    if (condition === true) {
        let start = range[0], end = range[1];
        let multipleFirst = multiples[0], multipleSecond = multiples[1];
        let firstWord = words[0], secondWord = words[1];

        for (let i = start; i <= end; i++) {
            if (i % multipleFirst === 0 && i % multipleSecond === 0) {
                console.log(firstWord + secondWord);
            } else if (i % multipleFirst === 0) {
                console.log(firstWord);
            } else if (i % multipleSecond === 0) {
                console.log(secondWord);
            } else {
                console.log(i);
            }
        }
    }
}