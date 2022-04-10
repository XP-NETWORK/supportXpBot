import dotenv from "dotenv";

dotenv.config({ path: ".env" });

function getOrThrow(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing env var ${key}`);
  }
  return value;
}

export default  {
    port: getOrThrow('PORT'),
    bot: getOrThrow('BOT_TOKEN'),
    mongo: getOrThrow('MONGO_URI'),
    backend: getOrThrow('BACKEND_URL'),
    chat: getOrThrow('CHAT_ID'),
    target: getOrThrow('TARGET_CHAT')
}

