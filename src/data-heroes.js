import heroClass from "./heroCreate";

import vallaIcon from "./img/valla.jpg";
import valeeraIcon from "./img/valeera.jpg";
import illidanIcon from "./img/illidan.jpg";
import muradinIcon from "./img/muradin.jpg";
import yrelIcon from "./img/yrel.jpg";
import aurielIcon from "./img/auriel.jpg";
import liliIcon from "./img/lili.jpg";
import blazeIcon from "./img/blaze.jpg";
import leoricIcon from "./img/leoric.jpg";
import abathurIcon from "./img/abathur.jpg";

const iconsList = { vallaIcon, valeeraIcon, illidanIcon };

export const heroList = [];
heroList.push(
  new heroClass(
    "valla",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/valla-build-guide",
    vallaIcon
  ),
  new heroClass(
    "valeera",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/valeera-build-guide",
    valeeraIcon
  ),
  new heroClass(
    "muradin",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/muradin-build-guide",
    muradinIcon
  ),
  new heroClass(
    "yrel",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/yrel-build-guide",
    yrelIcon
  ),
  new heroClass(
    "illidan",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/illidan-build-guide",
    illidanIcon
  ),
  new heroClass(
    "lili",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/lili-build-guide",
    liliIcon
  ),
  new heroClass(
    "blaze",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/blaze-build-guide",
    blazeIcon
  ),
  new heroClass(
    "leoric",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/leoric-build-guide",
    leoricIcon
  ),
  new heroClass(
    "auriel",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/auriel-build-guide",
    aurielIcon
  ),
  new heroClass(
    "abathur",
    "utility",
    "none",
    "https://www.icy-veins.com/heroes/auriel-build-guide",
    abathurIcon
  )
);
