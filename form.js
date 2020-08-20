class Form{
    constructor(){

    }
    display(){
      var title;
      title=createElement('h2');
      title.html("car race");
      title.position(150,0);
      var input=createInput("name");
      input.position(150,160);
      var button=createButton("Play");
      button.position(150,200);
      
      button.mousePressed(function(){
          input.hide();
          button.hide();
          playercount++;
          var name=input.value();
          player.UpdatePlayer(name);
          player.Updatecount(playercount);
      })
    }
}