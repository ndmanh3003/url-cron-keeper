const axios = require('axios')

const cron = async () => {
  const callEnv = process.env.CALL
  if (!callEnv) return

  const urls = callEnv.split(', ')

  const fetchUrls = async (urls) => {
    for (const url of urls) {
      console.log(`\n🌐 Calling: ${url}`)
      try {
        await axios.get(url)
        console.log(`✅ 🎉 Successfully called 🎉 ✅`)
      } catch (error) {
        console.error(`❌ Fail with error: ${error.message}`)
      }
    }
  }

  setInterval(() => {
    fetchUrls(urls).catch(() => {})
  }, parseInt(process.env.PERIOD || '300000', 10))
}

module.exports = cron
