var tagUUID = 3;

function init() {
    var socket = io("http://140.121.197.192:8008");

    socket.on("orderMessage", function (data) {
        alert(data.message);
        console.log(data.message);

        //���ͷs�������o~~
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

        //�N���ҥ[�Jtodo list
        $("#todo").append(tag);
    })

    $(document).ready(function () {
        getDoneItem();
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

    $('#done').on('click', 'li', function(){
        $(this).text();
        var txt = confirm("確定完成嗎？");
        var text = $(this).text();
        if(txt == true)
        {
            socket.emit("doneMessage", { message : text });
            console.log(text);
        }
    })


   
}

function getDoneItem()
{
    var doneItems = document.querySelectorAll('.doneList li');
    for(let i = 0; i < doneItems.length; i ++)
    {
        console.log(doneItems[i].textContent);
    }
}


window.addEventListener("load", init, false);