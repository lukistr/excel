function truckLoad(uk) {
    let truckLengthLeft = 13.5;
    let truckLengthRight = 13.5;
    let truckLeft = [];
    let truckRight = [];
    let count = 0;

    while (uk > 0) {
        if (count % 2 === 0) {
            truckLeft.push("UK");
            truckLengthLeft -= 1;
        } else {
            truckRight.push("UK");
            truckLengthRight -= 1;
        }
        count++;
        uk--;
    }

    while (truckLengthLeft > 0.8) {
        if (truckLengthLeft > 1.19 && truckLengthLeft < 1.59) {
            truckLeft.unshift("EUL");
            truckLengthLeft -= 1.2;
        } else {
            truckLeft.push("EU");
            truckLengthLeft -= 0.8;
        }
    }

    while (truckLengthRight > 0.8) {
        if (truckLengthRight > 1.19 && truckLengthRight < 1.59) {
            truckRight.unshift("EUL");
            truckLengthRight -= 1.2;
        } else {
            truckRight.push("EU");
            truckLengthRight -= 0.8;
        }
    }

    if (truckRight[truckRight.length - 1] === "EU" || truckLeft[truckLeft.length - 1] === "EU") {
        truckRight.pop();
        truckLeft.pop();
        truckRight.push("EU");
        truckLeft.push("EU");
    }

    console.log(truckLeft);
    console.log(truckLengthLeft);
    console.log(truckRight);
    console.log(truckLengthRight);
}

truckLoad("10");