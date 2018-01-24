function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    console.log(["weekend", "weekday", "weekday", "weekday", "weekday", "weekday", "weekend"][parseInt(day)]);

}

//testing
isWeekend();