import '../../styles/home.css'
import { header } from "./utils/header";
import { banner } from "./utils/banner";
import { main_content } from "./utils/main-content";
import { footer } from "./utils/footer";

export const home = () => {
    const content = document.querySelector('.content')
   
    return content.append(header(), banner(), main_content(), footer())
}