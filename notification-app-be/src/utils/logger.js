export const logger = {
  info: (msg, data) => {
    console.log("[INFO]", msg, data || "");
  },

  error: (msg, error) => {
    console.error("[ERROR]", msg, error || "");
  },

  debug: (msg, data) => {
    console.log("[DEBUG]", msg, data || "");
  },
};