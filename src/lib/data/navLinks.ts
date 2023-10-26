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
    name: "Konto",
    href: (id: string) => `/user`,
  },
  {
    name: "Zamówienia",
    href: (id: string) => `/user/${id}`,
  },
  {
    name: "Ustawienia",
    href: (id: string) => `/user/${id}/settings`,
  },
];
