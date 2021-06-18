
var x = setInterval(function ramzanRemainingTime(){
var date = new Date().getTime()
var date2 = new Date ('july 19, 2021').getTime()
var difference = date2 - date
var days = Math.round(difference / 8.64e+7)
// document.write(days)
var weeks = Math.round(difference / 6.048e+8)
// document.write('</br>' ,  weeks)
var minuts = Math.round(difference / 60000)
var hours = Math.round(difference / 3.6e+6)
// document.write('</br>' , minuts)
var seconds = Math.round(difference / 1000)
// document.write('</br>' , seconds)
var mainParagraph = document.getElementById("mainPara")
mainParagraph.innerHTML = days + " &nbsp:&nbsp " + hours + " &nbsp:&nbsp " + minuts + " &nbsp:&nbsp " + seconds;
var mainParagraph2 = document.getElementById("para3")
mainParagraph2.innerHTML = 'Days' + " |" + " &nbspHours&nbsp " + "|" + " &nbsp&nbspMinuts &nbsp&nbsp&nbsp" + "|" + " &nbsp&nbspSeconds"

var paragraph = document.getElementById('para')
paragraph.innerHTML = "In Bakron Ko Zibba Hona ma " + days + " Din " + weeks + " Hafta " + minuts + " Minuts " + seconds + " seconds Baake Hain"
} 
)

ramzanRemainingTime()






