function getStation(longitude,latitude) {
    try {
        var url = 'http://express.heartrails.com/api/json?method=getStations&' + 'x=' + longitude + '&y=' + latitude;
        var urlresponse = UrlFetchApp.fetch(url);
        return JSON.parse(urlresponse);
    } catch (e) {
        return "error";
    }
}
