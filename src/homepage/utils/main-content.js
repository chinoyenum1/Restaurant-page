import Jollof from "../../../images/Jollof-rice.jpg";

export const main_content = () => {
    const main = document.createElement('main')
    const about_div = document.createElement('div')

    about_div.classList.add('about')

    about_div.innerHTML = `<p class="para"><span>About</span><br><br> 
    <span>Ben-appétit</span> is elegantly reimagined into Nigeria's hospitality destination presenting African rare, heritage recipes. Here every dish is a history book on plate some are completed chapters - perfect renditions of traditional Nigerian cuisine. Others are living chronicles of our times - inspired by tradition and comtemporary influences.
    <br><br>
    <span>Ben-appétit</span> pays tribute to the fine Nigerian cuisine with a balanced mix of classical and contemporary dishes in loving, reverent and highly skilled hands, cherished dishes are recreated with a passion. You will find many dishes are presented in incarnations that simultaneously stir loving memories while exciting your palate</p>`

    const jollof = new Image();
    jollof.src = Jollof;


    main.append(about_div, jollof)

    return main
}