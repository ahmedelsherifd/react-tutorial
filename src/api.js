export function fetchMockData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Ahmed Elsherif",
        },
        {
          name: "Mahmoud Mostafa",
        },
        {
          name: "Mohamed Negm",
        },
      ]);
    }, 2000);
  });
}
