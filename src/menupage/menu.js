import {  } from "../../styles/menu.css";
import { header } from "../homepage/utils/header";
import { footer } from "../homepage/utils/footer";
import { content } from "../homepage/home";
import { title } from "./utils/title";
import { menu_list as menuList } from "./utils/menu-list";

export const menu = () => {
  content.textContent = "";

  return content.append(header(), title(), menuList(), footer());
};
