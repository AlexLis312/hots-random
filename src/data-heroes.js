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
import zaryaIcon from "./img/zarya.jpg";
import medivhIcon from "./img/medivh.jpg";
import vikingsIcon from "./img/the-lost-vikings.jpg";
import alarakIcon from "./img/alarak.jpg";
import alexstraszaIcon from "./img/alexstrasza.jpg";
import anaIcon from "./img/ana.jpg";
import anduinIcon from "./img/anduin.jpg";
import anubarakIcon from "./img/anubarak.jpg";
import artanisIcon from "./img/artanis.jpg";
import arthasIcon from "./img/arthas.jpg";
import azmodanIcon from "./img/azmodan.jpg";
import brightwingIcon from "./img/brightwing.jpg";
import cassiaIcon from "./img/cassia.jpg";
import chenIcon from "./img/chen.jpg";
import choIcon from "./img/cho.jpg";
import chromieIcon from "./img/chromie.jpg";
import deathwingIcon from "./img/deathwing.jpg";
import deckardIcon from "./img/deckard.jpg";
import dehakaIcon from "./img/dehaka.jpg";
import diabloIcon from "./img/diablo.jpg";
import dvaIcon from "./img/dva.jpg";
import etcIcon from "./img/e-t-c.jpg";
import falstadIcon from "./img/falstad.jpg";
import fenixIcon from "./img/fenix.jpg";
import gallIcon from "./img/gall.jpg";
import garroshIcon from "./img/garrosh.jpg";
import gazloweIcon from "./img/gazlowe.jpg";
import genjiIcon from "./img/genji.jpg";
import greymaneIcon from "./img/greymane.jpg";
import guldanIcon from "./img/guldan.jpg";
import hanzoIcon from "./img/hanzo.jpg";
import hoggerIcon from "./img/hogger.jpg";
import imperiusIcon from "./img/imperius.jpg";
import jainaIcon from "./img/jaina.jpg";
import johannaIcon from "./img/johanna.jpg";
import junkratIcon from "./img/junkrat.jpg";
import kaelthasIcon from "./img/kaelthas.jpg";
import kelthuzadIcon from "./img/kel-thuzad.jpg";
import kerriganIcon from "./img/kerrigan.jpg";
import kharazimIcon from "./img/kharazim.jpg";
import limingIcon from "./img/li-ming.jpg";
import moralesIcon from "./img/lt-morales.jpg";
import lucioIcon from "./img/lucio.jpg";
import lunaraIcon from "./img/lunara.jpg";
import maievIcon from "./img/maiev.jpg";
import malfurionIcon from "./img/malfurion.jpg";
import malganisIcon from "./img/malganis.jpg";
import malthaelIcon from "./img/malthael.jpg";
import meiIcon from "./img/mei.jpg";
import mephistoIcon from "./img/mephisto.jpg";
import murkyIcon from "./img/murky.jpg";
import nazeeboIcon from "./img/nazeebo.jpg";
import novaIcon from "./img/nova.jpg";
import orpheaIcon from "./img/orphea.jpg";
import probiusIcon from "./img/probius.jpg";
import qhiraIcon from "./img/qhira.jpg";
import raynorIcon from "./img/raynor.jpg";
import rehgarIcon from "./img/rehgar.jpg";
import rexxarIcon from "./img/rexxar.jpg";
import hammerIcon from "./img/sgt-hammer.jpg";
import sonyaIcon from "./img/sonya.jpg";
import stitchesIcon from "./img/stitches.jpg";
import stukovIcon from "./img/stukov.jpg";
import samuroIcon from "./img/samuro.jpg";
import sylvanasIcon from "./img/sylvanas.jpg";
import tassadarIcon from "./img/tassadar.jpg";
import butcherIcon from "./img/the-butcher.jpg";
import thrallIcon from "./img/thrall.jpg";
import tracerIcon from "./img/tracer.jpg";
import tychusIcon from "./img/tychus.jpg";
import tyraelIcon from "./img/tyrael.jpg";
import tyrandeIcon from "./img/tyrande.jpg";
import utherIcon from "./img/uther.jpg";
import varianIcon from "./img/varian.jpg";
import whitemaneIcon from "./img/whitemane.jpg";
import xulIcon from "./img/xul.jpg";
import zagaraIcon from "./img/zagara.jpg";
import zeratulIcon from "./img/zeratul.jpg";
import zuljinIcon from "./img/zuljin.jpg";

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
  ),
  new heroClass(
    "zarya",
    "utility",
    "none",
    "https://www.icy-veins.com/heroes/zarya-build-guide",
    zaryaIcon
  ),
  new heroClass(
    "medivh",
    "utility",
    "none",
    "https://www.icy-veins.com/heroes/medivh-build-guide",
    medivhIcon
  ),
  new heroClass(
    "vikings",
    "utility",
    "none",
    "https://www.icy-veins.com/heroes/the-lost-vikings-build-guide",
    vikingsIcon
  ),
  new heroClass(
    "alarak",
    "dd",
    "none",
    "https://www.icy-veins.com/heroes/alarak-build-guide",
    alarakIcon
  ),
  new heroClass(
    "alexstrasza",
    "heal",
    "melee",
    "https://www.icy-veins.com/heroes/alexstrasza-build-guide",
    alexstraszaIcon
  ),
  new heroClass("ana", "heal", "none", "https://www.icy-veins.com/heroes/ana-build-guide", anaIcon),
  new heroClass(
    "anduin",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/anduin-build-guide",
    anduinIcon
  ),
  new heroClass(
    "anubarak",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/anubarak-build-guide",
    anubarakIcon
  ),
  new heroClass(
    "artanis",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/artanis-build-guide",
    artanisIcon
  ),
  new heroClass(
    "arthas",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/arthas-build-guide",
    arthasIcon
  ),
  new heroClass(
    "azmodan",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/azmodan-build-guide",
    azmodanIcon
  ),
  new heroClass(
    "brightwing",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/brightwing-build-guide",
    brightwingIcon
  ),
  new heroClass(
    "cassia",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/cassia-build-guide",
    cassiaIcon
  ),
  new heroClass(
    "chen",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/chen-build-guide",
    chenIcon
  ),
  new heroClass("cho", "tank", "none", "https://www.icy-veins.com/heroes/cho-build-guide", choIcon),
  new heroClass(
    "chromie",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/chromie-build-guide",
    chromieIcon
  ),
  new heroClass(
    "deathwing",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/deathwing-build-guide",
    deathwingIcon
  ),
  new heroClass(
    "deckard",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/deckard-build-guide",
    deckardIcon
  ),
  new heroClass(
    "dehaka",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/dehaka-build-guide",
    dehakaIcon
  ),
  new heroClass(
    "diablo",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/diablo-build-guide",
    diabloIcon
  ),
  new heroClass(
    "dva",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/dva-build-guide",
    dvaIcon
  ),
  new heroClass(
    "etc",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/e-t-c-build-guide",
    etcIcon
  ),
  new heroClass(
    "falstad",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/falstad-build-guide",
    falstadIcon
  ),
  new heroClass(
    "fenix",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/fenix-build-guide",
    fenixIcon
  ),
  new heroClass(
    "gall",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/gall-build-guide",
    gallIcon
  ),
  new heroClass(
    "garrosh",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/garrosh-build-guide",
    garroshIcon
  ),
  new heroClass(
    "gazlowe",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/gazlowe-build-guide",
    gazloweIcon
  ),
  new heroClass(
    "genji",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/genji-build-guide",
    genjiIcon
  ),
  new heroClass(
    "greymane",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/greymane-build-guide",
    greymaneIcon
  ),
  new heroClass(
    "guldan",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/guldan-build-guide",
    guldanIcon
  ),
  new heroClass(
    "hanzo",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/hanzo-build-guide",
    hanzoIcon
  ),
  new heroClass(
    "hogger",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/hogger-build-guide",
    hoggerIcon
  ),
  new heroClass(
    "imperius",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/imperius-build-guide",
    imperiusIcon
  ),
  new heroClass(
    "jaina",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/jaina-build-guide",
    jainaIcon
  ),
  new heroClass(
    "johanna",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/johanna-build-guide",
    johannaIcon
  ),
  new heroClass(
    "junkrat",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/junkrat-build-guide",
    junkratIcon
  ),
  new heroClass(
    "kaelthas",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/kaelthas-build-guide",
    kaelthasIcon
  ),
  new heroClass(
    "kelthuzad",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/kel-thuzad-build-guide",
    kelthuzadIcon
  ),
  new heroClass(
    "kerrigan",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/kerrigan-build-guide",
    kerriganIcon
  ),
  new heroClass(
    "kharazim",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/kharazim-build-guide",
    kharazimIcon
  ),
  new heroClass(
    "liming",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/li-ming-build-guide",
    limingIcon
  ),
  new heroClass(
    "morales",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/lt-morales-build-guide",
    moralesIcon
  ),
  new heroClass(
    "lucio",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/lucio-build-guide",
    lucioIcon
  ),
  new heroClass(
    "lunara",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/lunara-build-guide",
    lunaraIcon
  ),
  new heroClass(
    "maiev",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/maiev-build-guide",
    maievIcon
  ),
  new heroClass(
    "malfurion",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/malfurion-build-guide",
    malfurionIcon
  ),
  new heroClass(
    "malganis",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/malganis-build-guide",
    malganisIcon
  ),
  new heroClass(
    "malthael",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/malthael-build-guide",
    malthaelIcon
  ),
  new heroClass("mei", "tank", "none", "https://www.icy-veins.com/heroes/mei-build-guide", meiIcon),
  new heroClass(
    "mephisto",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/mephisto-build-guide",
    mephistoIcon
  ),
  new heroClass(
    "murky",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/murky-build-guide",
    murkyIcon
  ),
  new heroClass(
    "nazeebo",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/nazeebo-build-guide",
    nazeeboIcon
  ),
  new heroClass(
    "nova",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/nova-build-guide",
    novaIcon
  ),
  new heroClass(
    "orphea",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/orphea-build-guide",
    orpheaIcon
  ),
  new heroClass(
    "probius",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/probius-build-guide",
    probiusIcon
  ),
  new heroClass(
    "qhira",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/qhira-build-guide",
    qhiraIcon
  ),
  new heroClass(
    "raynor",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/raynor-build-guide",
    raynorIcon
  ),
  new heroClass(
    "rehgar",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/rehgar-build-guide",
    rehgarIcon
  ),
  new heroClass(
    "rexxar",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/rexxar-build-guide",
    rexxarIcon
  ),
  new heroClass(
    "samuro",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/samuro-build-guide",
    samuroIcon
  ),
  new heroClass(
    "hammer",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/sgt-hammer-build-guide",
    hammerIcon
  ),
  new heroClass(
    "sonya",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/sonya-build-guide",
    sonyaIcon
  ),
  new heroClass(
    "stitches",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/stitches-build-guide",
    stitchesIcon
  ),
  new heroClass(
    "stukov",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/stukov-build-guide",
    stukovIcon
  ),
  new heroClass(
    "sylvanas",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/sylvanas-build-guide",
    sylvanasIcon
  ),
  new heroClass(
    "tassadar",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/tassadar-build-guide",
    tassadarIcon
  ),
  new heroClass(
    "butcher",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/the-butcher-build-guide",
    butcherIcon
  ),
  new heroClass(
    "thrall",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/thrall-build-guide",
    thrallIcon
  ),
  new heroClass(
    "tracer",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/tracer-build-guide",
    tracerIcon
  ),
  new heroClass(
    "tychus",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/tychus-build-guide",
    tychusIcon
  ),
  new heroClass(
    "tyrael",
    "tank",
    "none",
    "https://www.icy-veins.com/heroes/tyrael-build-guide",
    tyraelIcon
  ),
  new heroClass(
    "tyrande",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/tyrande-build-guide",
    tyrandeIcon
  ),
  new heroClass(
    "uther",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/uther-build-guide",
    utherIcon
  ),
  new heroClass(
    "varian",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/varian-build-guide",
    varianIcon
  ),
  new heroClass(
    "whitemane",
    "heal",
    "none",
    "https://www.icy-veins.com/heroes/whitemane-build-guide",
    whitemaneIcon
  ),
  new heroClass(
    "xul",
    "bruiser",
    "none",
    "https://www.icy-veins.com/heroes/xul-build-guide",
    xulIcon
  ),
  new heroClass(
    "zagara",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/zagara-build-guide",
    zagaraIcon
  ),
  new heroClass(
    "zeratul",
    "dd",
    "melee",
    "https://www.icy-veins.com/heroes/zeratul-build-guide",
    zeratulIcon
  ),
  new heroClass(
    "zuljin",
    "dd",
    "range",
    "https://www.icy-veins.com/heroes/zuljin-build-guide",
    zuljinIcon
  )
);
