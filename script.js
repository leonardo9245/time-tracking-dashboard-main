const dailybtn = document.getElementById('daily')
const weeklybtn = document.getElementById('weekly')
const monthlybtn = document.getElementById('monthly')

dailybtn.addEventListener('click', () => showDaily())
weeklybtn.addEventListener('click', () => showWeekly())
monthlybtn.addEventListener('click', () => showMonthly())

showDaily()

/*---daily--*/
function showDaily() {
  let output = ''
  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      data.forEach(resp => {
        const { title, timeframes } = resp
        const { daily } = timeframes

        output += `
        <div class="container">
        <div class="stats-header">
        <h2>${title}</h2>
        <figure>
        <img src="/images/icon-ellipsis.svg" alt="#" />
        </figure>
        </div>
        <div class="box">
        <strong>${daily.current}hrs</strong>
        <p>Last Week - <span>${daily.previous}</span>hrs</p>
        </div>
        </div>
      `
      })
      document.querySelector('.output').innerHTML = output
      dailybtn.classList.add('active')
      weeklybtn.classList.remove('active')
      monthlybtn.classList.remove('active')
    })
}

/*---weekly--*/
function showWeekly() {
  let output = ''
  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      data.forEach(resp => {
        const { title, timeframes } = resp
        const { weekly } = timeframes

        output += `
        <div class="container">
        <div class="stats-header">
        <h2>${title}</h2>
        <figure>
        <img src="/images/icon-ellipsis.svg" alt="#" />
        </figure>
        </div>
        <div class="box">
        <strong>${weekly.current}hrs</strong>
        <p>Last Week - <span>${weekly.previous}</span>hrs</p>
        </div>
        </div>
      `
      })
      document.querySelector('.output').innerHTML = output
      dailybtn.classList.remove('active')
      weeklybtn.classList.add('active')
      monthlybtn.classList.remove('active')
    })
}

/*---monthly--*/
function showMonthly() {
  let output = ''
  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      data.forEach(resp => {
        const { title, timeframes } = resp
        const { monthly } = timeframes

        output += `
        <div class="container">
        <div class="stats-header">
        <h2>${title}</h2>
        <figure>
        <img src="/images/icon-ellipsis.svg" alt="#" />
        </figure>
        </div>
        <div class="box">
        <strong>${monthly.current}hrs</strong>
        <p>Last Week - <span>${monthly.previous}</span>hrs</p>
        </div>
        </div>
      `
      })
      document.querySelector('.output').innerHTML = output
      dailybtn.classList.remove('active')
      weeklybtn.classList.remove('active')
      monthlybtn.classList.add('active')
    })
}
