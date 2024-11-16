function connectWebSocket(socket) {
  socket.addEventListener("open", (event) => {
    console.log("Conexão WebSocket estabelecida.");

    socket.send("ping");
  });

  socket.addEventListener("message", (event) => {
    if (event.data == "pong") {
      return true;
    }

    let command = event.data.split(":");

    switch (command[0]) {
      case "current":
        let current_users = command[1].split(" ");
        clearUserList();

        current_users.forEach((value) => {
          value = value.split(";");
          let name = value[0];
          let point = value[1];

          addUserToList(name, point);
        });
        break;

      case "word":
        clearH1();
        addWord(event.data.split(":")[1]);
        break;
      case "winner":
        let name = command[1].split(" ");
        window.location.replace(`winner.html?name=${name[1]}`);
    }
  });

  socket.addEventListener("error", (event) => {
    console.error("Erro no WebSocket:", event);
  });

  socket.addEventListener("close", (event) => {
    console.log("Conexão WebSocket fechada:", event);
  });
}
