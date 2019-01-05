var tagUUID = 3;

function init() {
    var socket = io("http://localhost:8008");

    socket.on("orderMessage", function (data) {
        alert(data.message);
        console.log(data.message);

        //產生新的標籤囉~~
        var tag = document.createElement("li");
        tag.setAttribute("id", "item" + tagUUID);
        tag.setAttribute("draggable", "true");
        tag.innerText = data.message;

        $(tag).bind('dragstart', function (event) {
            event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
        });
        $(tag).bind('drop', function (event) {
            return false;
        });

        tagUUID++;

        //將標籤加入todo list
        $("#todo").append(tag);
    })

    $(document).ready(function () {
        $('li').bind('dragstart', function (event) {
            event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
        });

        $('ul').bind('dragover', function (event) {
            event.preventDefault();
        });

        $('ul').bind('dragenter', function (event) {
            $(this).addClass("over");
        });

        $('ul').bind('dragleave drop', function (event) {
            $(this).removeClass("over");
        });

        $('li').bind('drop', function (event) {
            return false;
        });

        $('ul').bind('drop', function (event) {
            var listitem = event.originalEvent.dataTransfer.getData("text/plain");
            event.target.appendChild(document.getElementById(listitem));
            event.preventDefault();
        });
    });
}

window.addEventListener("load", init, false);