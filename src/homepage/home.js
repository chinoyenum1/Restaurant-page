import '../../styles/home.css'
import { header } from "./utils/header";
import { banner } from "./utils/banner";
import { main_content } from "./utils/main-content";
import { footer } from "./utils/footer";

export let content;

export const home = () => {
    content = document.querySelector('.content')
  content.textContent = "";

   
    return content.append(header(), banner(), main_content(), footer())
}