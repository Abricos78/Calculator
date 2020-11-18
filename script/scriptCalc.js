// получаем все переменные
let clearBtn = document.querySelector('.clear'),
    nums = document.querySelectorAll('.num'),
    operators = document.querySelectorAll('.operator'),
    answer = document.querySelector('.answer'),
    result = document.querySelector('.result')

// кнопка очищения поля результат
clearBtn.addEventListener('click', () => {
    result.innerHTML = ''
})

// 
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', () => {
        console.log(1)
        result.innerHTML += nums[i].innerHTML
    })
}

answer.addEventListener('click', () => {
    result.innerHTML = eval(result.innerHTML)
})

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        let endNum = (/\d$/).test(result.innerHTML)
        if (endNum) {
            result.innerHTML += operators[i].getAttribute('value')
        }
    })
}

