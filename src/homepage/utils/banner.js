
export const banner = () => {
    const banner = document.createElement('div')
    const name = document.createElement('h1')
    const motto = document.createElement('p')
    const btn_book = document.createElement('button')

    banner.classList.add('banner')
    
    name.textContent = 'Ben-appétit'
    motto.textContent = `incredible food you won't forget`
    btn_book.textContent = `Book Now`

    banner.append(name, motto, btn_book)

    return banner
}