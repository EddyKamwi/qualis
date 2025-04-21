const express = require("express")
require("dotenv").config()
const path = require("path")
const index = path.join(__dirname,"./index.html")
const app = express()
const OpenAI = require("openai")

app.use(express.static("./"))
app.use("/", (req,res) => {
    res.sendFile(index)
})

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'sk-49a347c3a3044ea087d4cf8c706f34a4'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();

app.listen(process.env.PORT, () => {
    console.log("app listening at http://localhost:"+process.env.PORT)
})