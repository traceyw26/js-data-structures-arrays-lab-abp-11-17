

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push("Ralph")
}

function destructivelyPrependDriver(driver) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop()
}
