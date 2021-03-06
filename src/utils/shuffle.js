function shuffle(upto) {
  const items = [];

  while (items.length !== 12) {
    const value = Math.floor(Math.random() * upto) + 1;
    if (items.includes(value)) continue;
    items.push(value);
  }

  return items;
}

export default shuffle;
