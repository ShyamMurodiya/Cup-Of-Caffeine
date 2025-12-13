import { useEffect, useState } from "react";
import { SHEET_API_URL } from "../constants";

const FALLBACK_MENU = [
  { id: 1, category: "Tea", name: "Special Tea", price: 15 },
  { id: 2, category: "Tea", name: "Masala Tea", price: 20 },
  { id: 3, category: "Coffee", name: "Hot Coffee", price: 40 },
  { id: 4, category: "Coffee", name: "Cold Coffee", price: 70 },
  { id: 5, category: "Snacks", name: "Sandwich", price: 40 },
  { id: 6, category: "Maggi", name: "Masala Maggi", price: 50 },
  { id: 7, category: "Burger", name: "Veg Burger", price: 60 },
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