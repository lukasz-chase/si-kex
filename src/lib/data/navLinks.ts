export const navEquipmentLinks = [
  {
    name: "Sprzęt Siłowy",
    href: "/equipment/strength",
  },
  {
    name: "Sprzęt Cardio",
    href: "/equipment/cardio",
  },
];
export const navUserLinks = [
  {
    name: "Zamówienia",
    href: (id: string) => `/user/${id}/orders`,
  },
  {
    name: "Ustawienia",
    href: (id: string) => `/user/${id}/settings`,
  },
];
