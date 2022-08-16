export const form = () => {
    const form = document.createElement('form')
    const input_div = document.createElement('div')
    const join_btn = document.createElement('button')
    
    input_div.innerHTML = `
                            <label for="email">Subscribe to my Newsletter</label>
                            <input type="email" name="email">
    `
    join_btn.textContent = 'Join'
    form.append(input_div, join_btn)
    


    return form
}