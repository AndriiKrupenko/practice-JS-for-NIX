function switcheroo(str) {
    str = str.replace(/[ab]/g, c => c == 'a' ? 'b' : 'a');
  return str;
}