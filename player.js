class Player{
    constructor(){
      
    }
    Getcount(){
        database.ref('playercount').on("value",function (data){
            playercount=data.val();
        })
    }
    Updatecount(count)
    {
        database.ref('/').update({
           playercount:count
        })
    }
    UpdatePlayer(name)
    {
        var playerindex="player"+playercount;
        database.ref(playerindex).set({name:name})
    }
}