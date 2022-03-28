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
    contractAddress: getOrThrow('CONTRACT'),
    redirect_url: getOrThrow('REDIRECT_URL'),
    rpc: getOrThrow('RPC'),
    port: getOrThrow('PORT'),
    fileName: getOrThrow('FILE_NAME'),
    messageToSign: getOrThrow('MESSAGE_TO_SIGN'),
    tokenList: Array.from(Array(Number(getOrThrow('TOKENS_NUMBER'))).keys()),
    bot: getOrThrow('BOT_TOKEN'),
    mongo: getOrThrow('MONGO_URI')
  
}

