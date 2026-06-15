export async function fetchCoffee() {

  const hotRes = await fetch(
    "https://api.sampleapis.com/coffee/hot"
  );

  const coldRes = await fetch(
    "https://api.sampleapis.com/coffee/iced"
  );

  const hotData = await hotRes.json();
  const coldData = await coldRes.json();

  const hotCoffee = hotData.map(item => ({
    ...item,
    category: "Hot Coffee"
  }));

  const coldCoffee = coldData.map(item => ({
    ...item,
    category: "Cold Coffee"
  }));

  return [...hotCoffee, ...coldCoffee].map(
    (item, index) => ({
      ...item,
      id: index + 1,

      // Stable price
      price: 100 + (index * 25)
    })
  );
}