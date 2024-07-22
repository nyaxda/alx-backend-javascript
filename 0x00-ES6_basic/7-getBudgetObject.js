export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  const { a, b, c } = budget; // eslint-disable-line no-unused-vars
  return budget;
}
