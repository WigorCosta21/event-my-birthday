const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

const dateEvent = new Date("Apr 21, 2024 20:00:00")
const timeStampEvent = dateEvent.getTime()

const countHours = setInterval(() => {

  const now = new Date()
  const timeStampCurrent = now.getTime()
  const distanceEvent = timeStampEvent - timeStampCurrent

  const daysInMs = 1000 * 60 * 60 * 24
  console.log(daysInMs)
  const hoursInMs = 1000 * 60 * 60
  const minutesInMs = 1000 * 60

  const daysUntilTheEvent = Math.floor(distanceEvent / daysInMs)
  const hoursUntilTheEvent = Math.floor(distanceEvent % daysInMs / hoursInMs)
  const minutesUntilTheEvent = Math.floor(distanceEvent % hoursInMs / minutesInMs)
  const secondsUntilTheEvent = Math.floor(distanceEvent % minutesInMs / 1000)


  days.innerHTML = daysUntilTheEvent
  hours.innerHTML = hoursUntilTheEvent
  minutes.innerHTML = minutesUntilTheEvent
  seconds.innerHTML = secondsUntilTheEvent

  if (distanceEvent < 0) {
    clearInterval(countHours)
  }

}, 1000)


const confirm = () => {
  const btnConfirm = document.querySelector("#btn-confirm")
  const inputConfirm = document.querySelector("#input-confirm")


  btnConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    const inputValue = inputConfirm.value

    if (inputValue === '') {
      alert("Digite um e-mail")
      return
    }

    alert("Sua presença foi confirmada")
    inputConfirm.value = ""

  })

}

confirm()