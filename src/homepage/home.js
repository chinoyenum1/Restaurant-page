import '../../styles/home.css'
import { header } from "./utils/header";
import { banner } from "./utils/banner";
import { main_content } from "./utils/main-content";
import { footer } from "./utils/footer";

// content.classList.add('content')

export const home = () => {
  document.body.textContent = ``
  const content = document.createElement('div');
  content.classList.add('content');

  content.append(header(), banner(), main_content(), footer())
  document.body.append(content)
   
    return document.body.append(content)
}