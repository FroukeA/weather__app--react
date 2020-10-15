// add styling and SCSS
export function createClass(item) {
  let c = ``;

  if (item.ref) {
    if (item.class.length > 0) {
      item.class.forEach((e) => {
        c = `${item.ref}__${item.type} ${item.ref}__${item.type}--${e.label}`;
      });
    } else {
      c = `${item.ref}__${item.type}`;
    }
  } else {
    if (item.class.length > 0) {
      item.class.forEach((e) => {
        c = `${item.type} ${item.type}--${e.label}`;
      });
    } else {
      c = `${item.type}`;
    }
  }

  return c;
}