// Parse a CSS declaration string into a React style object, cached by the
// full string. Lets the screen markup keep the design source's inline style
// strings verbatim instead of hand-converting thousands of declarations.
const cache = new Map();

function kebabToCamel(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function css(str) {
  const hit = cache.get(str);
  if (hit) return hit;
  const o = {};
  for (const decl of str.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    if (!prop) continue;
    o[prop.startsWith('--') ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
  }
  if (cache.size > 4000) cache.clear();
  cache.set(str, o);
  return o;
}
