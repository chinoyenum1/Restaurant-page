
export const location = () => {
    const addr_contact = document.createElement('div')
    const location = document.createElement('div')
    const media_contact = document.createElement('div')

    addr_contact.classList.add('addr-div')
    location.classList.add('addr')
    media_contact.classList.add('social-media')

    location.innerHTML = `Ben-appétit
                          <br>
                          500 Ikwerre Road, <br>
                          Rumuokoro, <br>
                          Port Harcourt`

    media_contact.innerHTML = `
                                Tel: 123-456-7890 <br>
                                Email: info@benappetit.com <br>
                                Book a Consulation 
                              `

    addr_contact.append(location, media_contact)

    return addr_contact
}