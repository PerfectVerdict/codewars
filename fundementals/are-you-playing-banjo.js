// function areYouPlayingBanjo(name) {
//   // Implement me
//   if (name.charAt(0) === "r") {
//     return name + " plays banjo";
//   }
//   if (name.charAt(0) === "R") {
//     return name + " plays banjo";
//   } else return name + " does not play banjo";
// }
// ? TBR
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return `${name} plays the banjo`;
    }
    return `${name} does not play banjo`
}