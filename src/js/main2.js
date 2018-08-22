const log = console.log;

// get access to html element
const unit = document.querySelector('.unit')
console.log(unit)
unit.style.left = '100px'
unit.innerHTML= '<a href=""></a>'
const allUnits = document.querySelectorAll('.unit')
log (allUnits)

const allUnitsArr = Array.prototype.slice.call(allUnits);
log(allUnitsArr)
allUnitsArr.map(function(el){
    log(el)
})
// проработать функции, кэлбэки, !!методы массивов!!

const data={
    place:{
        geoposition:{
            h:100, w:50
        },
        heigh:1000
    },
    content:{}
}
log(data)
log(data.place.geoposition.h)
log(unit.style)