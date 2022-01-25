const capitalize = ([firstLetter, ...lastWorlds]) => {
  return firstLetter.toUpperCase() + lastWorlds.join("");
}
module.exports = capitalize;