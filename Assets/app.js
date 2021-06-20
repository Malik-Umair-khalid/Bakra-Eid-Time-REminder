
var x = setInterval(function ramzanRemainingTime(){
var now = new Date().getTime()
var countDownDate = new Date ('july 19, 2021').getTime()
var timeleft = countDownDate - now; var days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
var days = Math.round(timeleft / 8.64e+7)
var weeks = Math.round(timeleft / 6.048e+8)
var minuts = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
var mainParagraph = document.getElementById("mainPara")
mainParagraph.innerHTML = days + " &nbsp:&nbsp " + hours + " &nbsp:&nbsp " + minuts + " &nbsp:&nbsp " + seconds;
var mainParagraph2 = document.getElementById("para3")
mainParagraph2.innerHTML = 'Days' + "|" + "Hour" + "|" + "Minuts" + "|" + "Seconds"
mainParagraph.style.wordSpacing = '10'

var paragraph = document.getElementById('para')
paragraph.innerHTML = "In Bakron Ko Zibba Hona ma " + days + " Din " + weeks + " Hafta " + minuts + " Minuts " + seconds + " seconds Baake Hain"
} 
)

ramzanRemainingTime()






