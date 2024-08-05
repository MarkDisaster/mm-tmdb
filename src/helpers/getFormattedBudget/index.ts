export const getFormattedBudget = (numberValue: number) => {
   return numberValue.toLocaleString('cs-CZ', {
      useGrouping: true,
   });
};
