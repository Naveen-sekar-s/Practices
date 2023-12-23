let checkScore = 100
let grade = checkScore >= 100 ? "A+" : 
            checkScore >= 90 ? "A" : 
            checkScore >= 85 ? "B+" : 
            checkScore >= 80 ? "B" : 
            checkScore >= 75 ? "C+" : 
            checkScore >= 70 ? "C" : 
            checkScore >= 65 ? "D+" :
            checkScore >= 60 ? "D" :
            checkScore >= 50 ? "Border pass" : "Go home and sleep till your end of life"
console.log(grade)