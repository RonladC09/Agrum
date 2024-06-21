

export async function getBatchsService() {
  const response = await fetch(import.meta.env.VITE_API + "batchs")
  .then( async (response) => await response.json());
  return response;
}
