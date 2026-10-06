export const ipoService = {
  submitApplication: async (_data: unknown): Promise<{id: string}> => {
    console.log("DEMO / INTEGRATION REQUIRED: Mocking IPO submission");
    return new Promise((resolve) => setTimeout(() => resolve({id: "IPO-" + Date.now()}), 1000));
  }
};