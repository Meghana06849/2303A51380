export const logger = {
  info: (msg, data) => console.log("[INFO]", msg, data || ""),
  error: (msg, err) => console.log("[ERROR]", msg, err || ""),
};