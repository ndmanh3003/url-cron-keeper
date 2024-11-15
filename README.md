# 🌟 URL Cron Keeper

🔗 **URL Cron Keeper** is a lightweight repository designed to **cron job URLs** regularly to ensure they stay active and prevent them from being marked as inactive or "dead".

## 🚀 Features

- 🕒 Automatically fetches URLs at a defined interval.
- 🛠 Simple configuration using environment variables.
- 📜 Clear logs to monitor call status.
- 🎉 Success and error handling for each URL request.

## 📂 How It Works

This script:

1. Reads URLs from the `CALL` environment variable.
2. Fetches each URL at a configurable interval defined by the `PERIOD` environment variable.
3. Logs the result for each URL call (success or failure).

## 🛠 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ndmanh3003/url-cron-keeper.git
   cd url-cron-keeper
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables in a .env file:

   ```env
   CALL=https://example1.com, https://example2.com
   PERIOD=30000 # Interval in milliseconds (default is 30 seconds)
   ```

4. Run the script:
   ```bash
    npm start
   ```
