import { useEffect, useState } from "react";
import { SHEET_API_URL } from "../constants";

const FALLBACK_MENU = [
  // ===== TEA =====
  { id: 1, category: "Tea", name: "Masala Chai", price: 10 },
  { id: 2, category: "Tea", name: "Adrak Chai", price: 15 },
  { id: 3, category: "Tea", name: "Chocolate Chai", price: 15 },
  { id: 4, category: "Tea", name: "Elaichi Chai", price: 20 },
  { id: 5, category: "Tea", name: "Lemon Tea", price: 20 },
  { id: 6, category: "Tea", name: "Green Tea", price: 40 },
  { id: 7, category: "Tea", name: "Black Tea", price: 20 },

  // ===== HOT COFFEE =====
  { id: 8, category: "Hot Coffee", name: "Hot Coffee", price: 20 },
  { id: 9, category: "Hot Coffee", name: "Choco Hot Coffee", price: 25 },
  { id: 10, category: "Hot Coffee", name: "Strong Hot Coffee", price: 25 },
  { id: 11, category: "Hot Coffee", name: "Hot Chocolate", price: 30 },
  { id: 12, category: "Hot Coffee", name: "Strong Choco Hot Coffee", price: 30 },
  { id: 13, category: "Hot Coffee", name: "Hazelnut Hot Coffee", price: 30 },
  { id: 14, category: "Hot Coffee", name: "Irish Hot Coffee", price: 30 },

  // ===== COLD COFFEE =====
  { id: 15, category: "Cold Coffee", name: "Cold Coffee", price: 70 },
  { id: 16, category: "Cold Coffee", name: "Strong Cold Coffee", price: 80 },
  { id: 17, category: "Cold Coffee", name: "Choco Cold Coffee", price: 70 },
  { id: 18, category: "Cold Coffee", name: "Strong Choco Cold Coffee", price: 80 },
  { id: 19, category: "Cold Coffee", name: "Hazelnut Cold Coffee", price: 80 },
  { id: 20, category: "Cold Coffee", name: "Irish Cold Coffee", price: 80 },
  { id: 21, category: "Cold Coffee", name: "Cold Coffee with Ice Cream", price: 80 },

  // ===== MAGGI =====
  { id: 22, category: "Maggi", name: "Masala Maggi", price: 50 },
  { id: 23, category: "Maggi", name: "Cheese Corn Maggi", price: 70 },
  { id: 24, category: "Maggi", name: "Vegetable Maggi", price: 70 },
  { id: 25, category: "Maggi", name: "Punjabi Tadka Maggi", price: 70 },
  { id: 26, category: "Maggi", name: "Paneer Schezwan Maggi", price: 80 },
  { id: 27, category: "Maggi", name: "COC Special Maggi", price: 90 },

  // ===== BURGERS =====
  { id: 28, category: "Burger", name: "Veggie Tikki Cheese Burger", price: 90 },
  { id: 29, category: "Burger", name: "Aloo Tikki Cheese Burger", price: 90 },
  { id: 30, category: "Burger", name: "Paneer Tikki Cheese Burger", price: 90 },
  { id: 31, category: "Burger", name: "Maharaja Burger", price: 110 },

  // ===== BITES =====
  { id: 32, category: "Bites", name: "Bun Maska", price: 25 },
  { id: 33, category: "Bites", name: "Chocolate Bun Maska", price: 35 },
  { id: 34, category: "Bites", name: "Jam Bun Maska", price: 35 },
  { id: 35, category: "Bites", name: "Bread Butter", price: 30 },
  { id: 36, category: "Bites", name: "Salted Fries", price: 80 },
  { id: 37, category: "Bites", name: "Peri Peri Fries", price: 90 },
  { id: 38, category: "Bites", name: "Cheesy Fries", price: 100 },
  { id: 39, category: "Bites", name: "Cheese Potato Shots", price: 90 },
  { id: 40, category: "Bites", name: "Potato Wedges", price: 90 },

  // ===== SANDWICHES =====
  { id: 41, category: "Sandwiches", name: "Veg Grilled Sandwich", price: 70 },
  { id: 42, category: "Sandwiches", name: "Cheese Corn Sandwich", price: 80 },
  { id: 43, category: "Sandwiches", name: "Bombay Special Sandwich", price: 90 },
  { id: 44, category: "Sandwiches", name: "Paneer Makhani Sandwich", price: 90 },
  { id: 45, category: "Sandwiches", name: "Paneer Schezwan Sandwich", price: 90 },
  { id: 46, category: "Sandwiches", name: "COC Special Sandwich", price: 100 },
  { id: 47, category: "Sandwiches", name: "Double Layer Sandwich", price: 120 },

  // ===== MOCKTAILS =====
  { id: 48, category: "Mocktails", name: "Virgin Mojito", price: 70 },
  { id: 49, category: "Mocktails", name: "Blue Lagoon", price: 70 },
  { id: 50, category: "Mocktails", name: "Mint Mojito", price: 70 },
  { id: 51, category: "Mocktails", name: "Peach Mojito", price: 70 },
  { id: 52, category: "Mocktails", name: "Strawberry", price: 70 },

  // ===== THICK SHAKES =====
  { id: 53, category: "Thick Shakes", name: "Oreo Shake", price: 80 },
  { id: 54, category: "Thick Shakes", name: "KitKat Shake", price: 80 },
  { id: 55, category: "Thick Shakes", name: "Bourbon Shake", price: 90 },
  { id: 56, category: "Thick Shakes", name: "Chocolate Shake", price: 80 },
  { id: 57, category: "Thick Shakes", name: "Strawberry Shake", price: 80 },
];


export default function useMenu() {
  const [items, setItems] = useState(FALLBACK_MENU);

  useEffect(() => {
    if (!SHEET_API_URL) return;

    fetch(SHEET_API_URL)
      .then((r) => r.json())
      .then((data) => {
        const normalized = (data || []).map((d, i) => ({
          id: Number(d.id ?? i + 1),
          category: d.Category ?? d.category ?? "Others",
          name: d.Item ?? d.name ?? "Item",
          price: d.Price ?? d.price ?? "—",
          image: d.ImageURL ?? "",
        }));

        if (normalized.length) setItems(normalized);
      })
      .catch(() => {});
  }, []);

  return items;
}