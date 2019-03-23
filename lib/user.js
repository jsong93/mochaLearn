// const UserObj = function (name) {
//     this.name = name
// }
function UserObj(name) {
    this.name = name
}
UserObj.prototype.save = function () {
    return 'succeed'
}

var user = new UserObj('jsong')

module.export = UserObj