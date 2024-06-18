/* A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff */

function heavyMetalUmlauts(t) {
  let res = "";
  const voc = {
    A: "Ä",
    O: "Ö",
    a: "ä",
    o: "ö",
    E: "Ë",
    U: "Ü",
    e: "ë",
    u: "ü",
    I: "Ï",
    Y: "Ÿ",
    i: "ï",
    y: "ÿ",
  };
  for (let i = 0; i < t.length; i++) {
    if (voc[t[i]]) res += voc[t[i]];
    else res += t[i];
  }
  return res;
}
