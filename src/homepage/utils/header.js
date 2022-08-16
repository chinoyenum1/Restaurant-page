export const li_home = document.createElement("li");
export const li_menu = document.createElement("li");
export const li_contact = document.createElement("li");

export const header = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  li_home.textContent = "Home";
  li_menu.textContent = "Menu";
  li_contact.textContent = "Contact";
  ul.append(li_home, li_menu, li_contact);
  nav.append(ul);
  header.append(nav);

  return header;
};
