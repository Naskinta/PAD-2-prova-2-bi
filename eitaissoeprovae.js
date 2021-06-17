// Quesito 1

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

// Quesito 2

function someFn(number) {
  const returnFunction = (value) => {
    switch (value) {
      case 4:
        return 5
      case 2:
        return 6
      case 6:
        return 11
    }
  }

  return returnFunction
}

// Quesito 3

function calculator(n1mero, n2mero) {
  return callback => callback(n1mero, n2mero)
}

// Quesito 4

/**
 * Ordem:
 * 4
 * 1
 * 5
 * 1
 */

// Quesito 5

function multiplik(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`)
  }
}
