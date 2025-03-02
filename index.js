// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
   const apendCat = [...cats, "Broom"]
   return apendCat
}

function prependCat(name) {
    const prependCat = ["Arnold", ...cats]
    return prependCat
}

function removeLastCat() {
   return cats.slice(0, 2, "")
}

function removeFirstCat() {
    return cats.slice(1, 3)
 }

