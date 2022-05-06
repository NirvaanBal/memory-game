function shuffle(upto) {
  const items = [];

  while (items.length !== upto) {
    const value = Math.floor(Math.random() * upto) + 1;
    if (items.includes(value)) continue;
    items.push(value);
  }

  return items.slice(0, 12);
}

export default shuffle;
