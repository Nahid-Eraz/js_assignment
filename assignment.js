
// ***Kilometer To Meter Converter***
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        meter = kilometer * 1000;
        return meter;
    }
    else {
        meter = "You may input negative value/ null/ string. Please check it again";
        return meter;
    }
}
var meter = kilometerToMeter(5); //Input your value in here.
console.log(meter);



// ***Budget Calculator***
function budgetCalculator(watch, phone, laptop) {
    watchCost = 50;
    phoneCost = 100;
    laptopCost = 500;

    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        totalWatchCost = watch * watchCost;
        totalPhoneCost = phone * phoneCost;
        totalLaptopCost = laptop * laptopCost;

        totalCost = totalWatchCost + totalPhoneCost + totalLaptopCost;

        return totalCost;
    }
    else {
        totalCost = "You may input negative value/ null/ string in a single or multiple section. Please check it again";
        return totalCost;
    }
}

var totalBudget = budgetcalculator(2, 2, 2); //Input your value in here.
console.log(totalBudget);



// ***Hotel Cost Management***
function hotelCost(duration) {
    if (duration >= 0) {
        if (duration <= 10) {
            charge = duration * 100;
            return charge;
        }
        else if (duration <= 20) {
            extraTime = duration - 10;
            charge = (10 * 100) + (extraTime * 80);
            return charge;
        }
        else {
            extraTime = duration - 20;
            charge = (10 * 100) + (10 * 80) + (extraTime * 50);
            return charge;
        }
    }
    else {
        charge = "You may input negative value/ null/ string. Please check it again.";
        return charge;
    }
}
var totalHotelCost = hotelCost(40); //Input your value in here.
console.log(totalHotelCost);


//***Max name from MegaFriend***
function megaFriend(names) {
    var maxName = names[0];
    for (var i = 0; i < names.length; i++) {
        if (maxName.length < names[i].length) {
            maxName = names[i];
        }
    }
    return maxName;
}
var names = ['Eraz', 'Mohid', 'Rasel', 'Soccho', 'Abed', 'Siam', 'Atik', 'Ratul', 'Musa']; //Input your value in here
var maxFriendName = megaFriend(names);
console.log(maxFriendName);