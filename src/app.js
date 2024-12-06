document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Sumba", img: "1.jpg", price: 20000 },
      { id: 2, name: "Arabika Blend", img: "2.jpg", price: 25000 },
      { id: 3, name: "Primo Passo", img: "3.jpg", price: 30000 },
      { id: 4, name: "Aceh Gayo", img: "4.jpg", price: 35000 },
      { id: 5, name: "Sumatra Mandheling", img: "5.jpg", price: 40000 },
      { id: 6, name: "Sumatra Mand", img: "6.jpg", price: 40000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const existingItem = this.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...newItem, quantity: 1 });
      }
      this.total += newItem.price;
      this.quantity += 1;
      console.log("Cart Updated:", this.items);
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
});
