import {  } from "../../styles/menu.css";
import { header } from "../homepage/utils/header";
import { footer } from "../homepage/utils/footer";
import { content } from "../homepage/home";
import { title } from "./utils/title";
import { menu_list as menuList } from "./utils/menu-list";

export const menu = () => {
  document.body.textContent = ``
  const content = document.createElement('div');

  content.append(header(), title(), menuList(), footer());
  return document.body.append(content);
};
