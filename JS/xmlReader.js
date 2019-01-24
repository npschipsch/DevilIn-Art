window.addEventListener("load", function (evt) {
    // read the XML content and when ready, display
    // the XML data by invoking the showXMLData function
    loadXML();
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

function createXMLTable(xml) {
    var i;
    var xmlTable = xml.responseXML;
    var table = "<tr style='background-color: #94618e;height: 50px;'><th>User</th><th>Category</th><th>Material</th><th>Price</th><th>Deadline</th></tr>";
    var x = xmlTable.getElementsByTagName("commission");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("user")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("material")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("deadline")[0].childNodes[0].nodeValue + "</td>";

    }

    document.getElementById("table").innerHTML = table;
}