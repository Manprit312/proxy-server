import express from "express"
import fetch from "node-fetch"
import cors from"cors"
const app = express();
app.use(cors())
app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(7000, () => console.log("Proxy server running on port 3000"));
