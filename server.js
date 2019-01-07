//剛剛我改了這邊 這邊我們只需要把我們要使用的port寫在這邊就好
var io = require('socket.io')(8008);

//這邊是我建立的 Websocket Server
//但是目前我並未將Websocket初始化
//建立這邊的原因是因為要產生 我們 customer and store 要使用的client版本的websocket的javascript檔案

//初始化 websocket 當有人連線 會印東西出來
io.on('connection', function(socket){
  console.log('a user connected');

  //在這邊 Server 端接收的部分 我們要用socket on (注意 這邊名稱要是一樣的)
  socket.on("customerMessage", function(data){
    console.log(data.message);

    //收到訊息後 轉發給 store
    socket.broadcast.emit("orderMessage", data);

  })
  socket.on("doneMessage", function(data) {
    console.log("doneMessage: " + data.message);

    socket.broadcast.emit("queueMessage", data);
  }) 
});

//基本上Server這邊我們只需要告訴他 我們想要使用的 port 然後使用者連線上來我需要印出字來
