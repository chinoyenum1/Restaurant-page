import {} from "../../styles/contact.css";
import { content } from "../homepage/home";
import { header } from "../homepage/utils/header";
import { footer } from "../homepage/utils/footer";
import { location } from "../contactpage/utils/location";
import { form } from "../contactpage/utils/contact-form";


export const contact = () => {
    content.textContent = "";
    const wrapper = document.createElement('div')
    const page_title = document.createElement('h1')
    page_title.textContent = `Contact Us`

    wrapper.classList.add('wrapper')

    wrapper.append(page_title, location(), form())


  return content.append(header(), wrapper, footer());

}