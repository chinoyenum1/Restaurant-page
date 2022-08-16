import { home } from "../src/homepage/home";
import { menu } from "../src/menupage/menu";
import { contact } from "../src/contactpage/contact";
import { li_home } from "../src/homepage/utils/header";
import { li_menu } from "../src/homepage/utils/header";
import { li_contact } from "../src/homepage/utils/header";


home()

li_home.addEventListener('click', home)
li_menu.addEventListener('click', menu)
li_contact.addEventListener('click', contact)