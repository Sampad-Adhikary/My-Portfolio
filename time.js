exports.currDate = function () {
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
  
    var today = new Date();
    var day = today.toLocaleDateString("en-US", options);
    return day;
  };

exports.currTime = function(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    hours = hours < 10 ? '0'+hours : hours;
    var time = hours + ":" + minutes + ampm;
    return time;
}