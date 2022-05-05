const btn = document.getElementById('vote')

btn.addEventListener('click', function() {
    fetch('http://localhost:8080/get_date_info')
        .then(data => data.json())
        .then(data => {
            btn.innerText = data.text
        })
})

const btn2 = document.getElementById('load')
btn2.addEventListener('click', function() {
    fetch('http://localhost:8080/get_file_info')
    .then(data => data.json())
        .then(data => {
            const list =  document.getElementById('list')
            list.innerHTML = ''

            for (let i = 0; i < data.length; i++) {
                const elem = document.createElement('li')
                elem.innerText = data[i].title
                list.append(elem)
            }
        })
})