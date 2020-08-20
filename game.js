class Game{
    constructor(){
      
    }
    update(stat){
     database.ref('/').update({
         gamestate:stat
     })
    }

    Getgamestate(){
        console.log(123);
        database.ref('gamestate').on("value",function (data) {
            gamestate=data.val();
        })
    }
    Start(){
      if(gamestate===0)
      {
        player=new Player();
        player.Getcount();
        form=new Form();
        form.display();
      }
    }
}
