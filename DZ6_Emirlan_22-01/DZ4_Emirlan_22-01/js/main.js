const button = document.querySelector('button')
const wrap = document.querySelector('.block')
button.addEventListener('click',()=> {
    fetch("data.json")
        .then(req => req.json())
        .then(data => {
            data.forEach(i => {
                const block = document.createElement('div')
                block.innerHTML = `
            <div class="box">
                <img class="box_img" src="${i.photo}" alt="">
                <p>${i.title}</p>
                <span>${i.price}</span>
                <p>${i.phone}</p>
            </div>
            `
                wrap.append(block)
            })
        })
})


