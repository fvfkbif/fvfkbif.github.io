window.onload = function () {
    var str, domParser, xmlDoc, title, authorInfo, topic, name, year;

    str = "<info>" +
          "<topic>Сайт для анимационной студии Studio Ghibli</topic>" +
          "<name>Кляшторная С.В.</name>" +
          "<year>2021 г.</year>" +
          "</info>";

    domParser = new DOMParser();
    xmlDoc = domParser.parseFromString(str, "text/xml");

    title = document.getElementById("title");
    authorInfo = document.getElementById("authorInfo");

    topic = xmlDoc.getElementsByTagName("topic")[0].childNodes[0].nodeValue;
    name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    year = xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue;

    
    title.innerHTML = topic;
    authorInfo.innerHTML = "© " + name + ", " + year;
};