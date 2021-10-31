export default function List() {
    if (arguments[1]) return
    let pages = ['Home', 'Product', 'Contact']
    return `
    <ul>
        ${pages._map(page =>`<li>${page}</li>`)}
    </ul>`
}
