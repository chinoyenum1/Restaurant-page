import '../../styles/home.css'
import { header } from "./utils/header";
import { banner } from "./utils/banner";
import { main_content } from "./utils/main-content";
import { footer } from "./utils/footer";

export let content = document.createElement('div');
content.classList.add('content')

export const home = () => {
    // content = document.querySelector('.content')
  // content.textContent = "";

  content.append(header(), banner(), main_content(), footer())
  document.body.append(content)
   
    return document.body.append(content)
}