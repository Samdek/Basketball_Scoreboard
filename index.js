let addHome = 0
let addNo = 0
let homeScoreEl = document.getElementById('homescore-el')
let guestScoreEl = document.getElementById('guestscore-el')
let home1Btn = document.getElementById('home1')
let home2Btn = document.getElementById('home2')
let home3Btn = document.getElementById('home3')
let guest1Btn = document.getElementById('guest1')
let guest2Btn = document.getElementById('guest2')
let guest3Btn = document.getElementById('guest3')



function homeIncrement(){
    addHome += 1
    homeScoreEl.innerHTML = addHome
}

function homeDoubleIncrement() {
    addHome += 2
    homeScoreEl.innerHTML = addHome
}

function homeTripleIncrement() {
    addHome += 3
    homeScoreEl.innerHTML = addHome
}

function guestIncrement(){
    addNo += 1
    guestScoreEl.innerHTML = addNo
}

function guestDoubleIncrement() {
    addNo += 2
    guestScoreEl.innerHTML = addNo
}

function guestTripleIncrement() {
    addNo += 3
    guestScoreEl.innerHTML = addNo
}


home1Btn.addEventListener('click', function(){
    homeIncrement()
})

home2Btn.addEventListener('click', function(){
    homeDoubleIncrement()
})

home3Btn.addEventListener('click', function(){
    homeTripleIncrement()
})

guest1Btn.addEventListener('click', function(){
    guestIncrement()
})

guest2Btn.addEventListener('click', function(){
    guestDoubleIncrement()
})

guest3Btn.addEventListener('click', function(){
    guestTripleIncrement()
})

