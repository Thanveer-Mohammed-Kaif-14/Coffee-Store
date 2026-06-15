export async function fetchCoffee() {
  const hotRes = await fetch("https://api.sampleapis.com/coffee/hot");
  const coldRes = await fetch("https://api.sampleapis.com/coffee/iced");

  const hotData = await hotRes.json();
  const coldData = await coldRes.json();

  const hotCoffee = hotData.map(item => ({
    ...item,
    category: "Hot Coffee",
    price: Math.floor(Math.random() * 200) + 150
  }));

  const coldCoffee = coldData.map(item => ({
    ...item,
    category: "Cold Coffee",
    price: Math.floor(Math.random() * 200) + 150
  }));

  return [...hotCoffee, ...coldCoffee].map((item, index) => ({
    ...item,
    id: index + 1
  }));
}