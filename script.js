
const date = new Date()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = days[date.getDay()];

const updateTime = () => {
    const date = new Date()
    timeUtc.textContent = date.getTime()
}

const todayTag = document.getElementById('day')
const timeUtc = document.getElementById('time')

todayTag.textContent = today

setInterval(updateTime, 1)