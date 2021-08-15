function remove(str, n) {
  for (i = 1; i <= n; i++) {
    str = str.replace('!', '');
  }
  return str;
}
