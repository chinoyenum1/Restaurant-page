

export const header = () => {
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const li_home = document.createElement('li')

    li_home.textContent = 'Home';
    ul.append(li_home)
    nav.append(ul)
    header.append(nav)

    return header
}