function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Jordan',
    lastName: 'Walke'
};
export default function FormatName() {
    return `<div>Hello ${formatName(user)}</div>`
}
let component = getComponent(FormatName)
component.kiwiSelector('body')