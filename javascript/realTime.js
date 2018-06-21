setInterval('showTime()', 1000);

function showTime() {
    var weeks = new Array('Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.');
    var now = new Date();
    var YY = now.getYear();
    if(YY < 2000) {
        YY += 1900;
    }
    var MM = set0(now.getMonth() + 1);
    var DD = set0(now.getDate());
    var DW = weeks[now.getDay()];
    var hh = set0(now.getHours());
    var mm = set0(now.getMinutes());
    var ss = set0(now.getSeconds());
    var time = '' + YY + '/' + MM + '/' + DD + ' ' + DW + ' ' + hh + ':' + mm + ':' + ss + '';
    document.getElementById("Clock").innerHTML = time;
}

function set0(num) {
    var ret;
    if(num < 10) {
        ret = "0" + num;
    } else {
        ret = num;
    }
    return ret;
}