
var rule_button = document.getElementById('rule-button');
var rule_page = document.getElementById('rules-page');
var rules_close = document.getElementById('rules-exit');
var triangle = document.getElementById('triangle');
var paper_class = document.getElementById('paper');
var scissors_class = document.getElementById('scissors');
var rock_class = document.getElementById('rock')

rule_button.addEventListener('click', function(){
    rule_page.style.display = 'flex'
    rule_button.style.display = 'none'
    triangle.style.display = 'none'
    paper.style.display = 'none'
    scissors_class.style.display = 'none'
    rock_class.style.display = 'none'

})


rules_close.addEventListener('click', function(){
    rule_page.style.display = 'none'
    rule_button.style.display = 'flex'
    triangle.style.display = 'flex'
    paper.style.display = 'flex'
    scissors_class.style.display = 'flex'
    rock_class.style.display = 'flex'

})