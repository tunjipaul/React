export const CATEGORIES = [
  "Food",
  "Transport",
  "Bills",
  "Entertainment",
  "Others",
];

export const categoryClassName = {
  Food: "category-food",
  Transport: "category-transport",
  Bills: "category-bills",
  Entertainment: "category-entertainment",
  Others: "category-others",
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
};
