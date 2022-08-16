export const footer = () => {
    const footer = document.createElement('footer')
    const p = document.createElement('p')

    p.textContent = `Copyright © Benaiah Enebeli 2022`
    footer.append(p)

    return footer
}