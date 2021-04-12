const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Destroing Poland",
        largeImageKey: "panzer",
        largeImageText: "Panzertank",
        startTimestamp: new Date,
      })

    console.log("RPC aktywne!");
})

rpc.login({
    clientId: "831141380852023326"
})
