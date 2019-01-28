window.addEventListener("load", function (evt) {
    // read the XML content and when ready, display
    // the XML data by invoking the showXMLData function
    loadXML();
    loadXML2();
});

function loadXML() {
    var xhttpreq = new XMLHttpRequest();
    xhttpreq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            createXMLTable(this);
        }
    };
    xhttpreq.open("GET", "../XMLtables/commissionsTable.xml", true);
    xhttpreq.send();


}

function loadXML2() {
    var xhttpreq2 = new XMLHttpRequest();
    xhttpreq2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            createXMLTable2(this);
        }
    };
    xhttpreq2.open("GET", "./XMLtables/storeTable.xml", true);
    xhttpreq2.send();
    ;


}

function createXMLTable(xml) {
    var i;
    var xmlTable = xml.responseXML;
    var table = "<tr style='background-color: #94618e;height: 50px;'><th>User</th><th>Category</th><th>Material</th><th>Price</th><th>Deadline</th></tr>";
    var x = xmlTable.getElementsByTagName("commission");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            "<span property='name'>" + x[i].getElementsByTagName("user")[0].childNodes[0].nodeValue + "</span></td><td>" +
            x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("material")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("deadline")[0].childNodes[0].nodeValue + "</td>";

    }

    document.getElementById("table").innerHTML = table;
    document.getElementById("table2").innerHTML = table;
}

function createXMLTable2(xml2) {
    var i;
    var xmlTable = xml2.responseXML;
    var table1 = "<tr style='background-color: #94618e;height: 50px;'><th>Artist</th><th>T-Shirt</th><th>Mug</th><th>Wallpaper</th></tr>";
    var table2 = "<tr style='background-color: #94618e;height: 50px;'><th>Artist</th><th>T-Shirt</th><th>Mug</th><th>Wallpaper</th></tr>";

    var x = xmlTable.getElementsByTagName("store");
    var y = xmlTable.getElementsByTagName("store2");
    for (i = 0; i < x.length; i++) {
        table1 += "<tr><td>" +
            "<span property='name'>" + x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue + "</span></td><td>" +
            x[i].getElementsByTagName("tShirt")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("mug")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("wallpaper")[0].childNodes[0].nodeValue + "</td>";

    }

    document.getElementById("store").innerHTML = table1;
    for (i = 0; i < y.length; i++) {
        table2 += "<tr><td>" +
            "<span property='name'>" + y[i].getElementsByTagName("artist2")[0].childNodes[0].nodeValue + "</span></td><td>" +
            y[i].getElementsByTagName("tShirt2")[0].childNodes[0].nodeValue + "</td><td>" +
            y[i].getElementsByTagName("mug2")[0].childNodes[0].nodeValue + "</td><td>" +
            y[i].getElementsByTagName("wallpaper2")[0].childNodes[0].nodeValue + "</td>";

    }
    document.getElementById("store2").innerHTML = table2;
}