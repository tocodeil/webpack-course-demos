function isMobile() {
  return window.location.href.match(/\?.*mobile=1/);
}

export function twice(x) {
  const m = /*@__PURE__*/isMobile();
  return x * 2;
}

