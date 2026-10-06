export const uploadService = {
  uploadFile: async (file: File): Promise<string> => {
    console.log("DEMO / INTEGRATION REQUIRED: Mocking file upload");
    return new Promise((resolve) => setTimeout(() => resolve("mock-url-" + file.name), 1000));
  }
};