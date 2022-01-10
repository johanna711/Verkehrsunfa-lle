const stage = $("#container");
const label = $("#mouseover-label");
const clicklabel = $("#click-label");
const stageHeight = stage.innerHeight();
const stageWidth = stage.innerWidth();
var paper = $("#container");
let data = [];

$(function () {
    //console.log(positionData.length, "countries total before merge")
    //prepereData();
    //console.log(data.length, " countries total after merge");
    Where();
});

countryBox.click(function () {
  $(".clicked").removeClass("clicked");

  countryBox.addClass("clicked");
  clicklabel.text(countryBox.data().countryName);
});



function cleanPaper() {
  $("div.circle").remove();
}



function Where() {

  cleanPaper();

    for (let i = 0; i < positionData.length; i++) {
      let longitude = gmynd.map( positionData[i].longitude, 6, 14, 0, stageWidth);
      let latitude = gmynd.map(positionData[i].latitude, 48, 55, stageHeight, 0);
        
        const countrySize = gmynd.map(positionData[i].insgesamt, 1, 5789040, 6, 50);

        //  positionData[i]["longitude"]
        let countryCircle = $("<div></div>");
        countryCircle.addClass("circle");
        countryCircle.css({
            width: countrySize,
            height: countrySize,
            left: longitude - countrySize/ 2,
            top: latitude - countrySize/ 2
        });
        countryCircle.data(positionData[i]);

        countryCircle.mouseover(function(){
          countryCircle.addClass("highlight");
          console.log(countryCircle.data().Bundesland);
          label.html("<p>" + countryCircle.data().Bundesland+ "</p> <p class='blue-bundesland'>" + countryCircle.data().insgesamt + "</p>");
        
        });

        countryCircle.mouseout(function(){
          countryCircle.removeClass("highlight");
          //countryCircle.addClass("no-highlight");
        });

        stage.append(countryCircle);
    }
} 


function All() {

  cleanPaper();

    for (let i = 0; i < positionData.length; i++) {
      let longitude = gmynd.map( positionData[i].longitude, 6, 14, 0, stageWidth);
      let latitude = gmynd.map(positionData[i].latitude, 48, 55, stageHeight, 0);
        
        const countrySize = gmynd.map(positionData[i].insgesamt, 1, 5789040, 6, 150);

        //  positionData[i]["longitude"]
        let countryCircle = $("<div></div>");
        countryCircle.addClass("circle");
        countryCircle.css({
            width: countrySize,
            height: countrySize,
            left: longitude - countrySize/ 2,
            top: latitude - countrySize/ 2
        });
        countryCircle.data(positionData[i]);

        countryCircle.mouseover(function(){
          countryCircle.addClass("highlight");
          console.log(countryCircle.data().Bundesland);
          label.html("<p>" + countryCircle.data().Bundesland+ "</p> <p class='blue-bundesland'>" + countryCircle.data().insgesamt + "</p>");
        
        });

        countryCircle.mouseout(function(){
          countryCircle.removeClass("highlight");
          //countryCircle.addClass("no-highlight");
        });

        stage.append(countryCircle);
    }
} 

function Years() {

  cleanPaper();

  for (let i = 0; i < positionData.length; i++) {
    let longitude = gmynd.map( positionData[i].longitude, 6, 14, 0, stageWidth);
    let latitude = gmynd.map(positionData[i].latitude, 48, 55, stageHeight, 0);
      
      const countrySize = gmynd.map(positionData[i].insgesamt, 1, 5789040, 6, 100);

      //  positionData[i]["longitude"]
      let countryCircle = $("<div></div>");
      countryCircle.addClass("circle");
      countryCircle.css({
          width: countrySize,
          height: countrySize,
          left: longitude - countrySize/ 2,
          top: latitude - countrySize/ 2
      });
      countryCircle.data(positionData[i]);

      countryCircle.mouseover(function(){
        countryCircle.addClass("highlight");
        console.log(countryCircle.data().Bundesland);
        label.html("<p>" + countryCircle.data().Bundesland+ "</p> <p class='blue-bundesland'>" + countryCircle.data().insgesamt + "</p>");
      
      });

      countryCircle.mouseout(function(){
        countryCircle.removeClass("highlight");
        //countryCircle.addClass("no-highlight");
      });

      stage.append(countryCircle);
  }
} 