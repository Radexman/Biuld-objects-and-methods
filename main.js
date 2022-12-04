let hotel = {
    name: 'Park',
    roomRate: 240,
    discount: 15,
    offerPrice: function() {
        let offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
    }
}

let hotelName, roomRate, specialRate;

hotelName = document.querySelector('#hotelName');
roomRate = document.querySelector('#roomRate');
specialRate = document.querySelector('#specialRate');

hotelName.textContent+= hotel.name;
roomRate.textContent+= hotel.roomRate.toFixed(2) + ' zł';
specialRate.textContent+= hotel.offerPrice() + ' zł';

let expieryMsg;
let today;
let elEnds;

function offerExipes(today) {
    let weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ['niedzielę', 'poniedziałek', 'wtorek', 'środę', 'czwartek', 'piątek', 'sobotę'];
    monthNames = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    expieryMsg = 'Oferta wygasa w: ';
    expieryMsg += day + 
}