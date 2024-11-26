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
app.get('/productData', async (req, res) => {
  const { url } = req.query; // Get the URL parameter from the query string
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    const response = await fetch(url); // Make the request to the external API
    const data = await response.json(); // Parse the JSON response
    res.json(data); // Send the data back to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});
pp.get('/myntra' ,async (req, res) => {
  const affiliateURL = "https://track.vcommission.com/click?campaign_id=10882&pub_id=111864";
  try {
    const response = await fetch(affiliateURL);
    const data = await response.json();
    res.json(data); // Return the affiliate data from Myntra
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Myntra affiliate data' });
  }
});

app.get('/ajio', async (req, res) => {
  const affiliateURL = "https://track.vcommission.com/click?campaign_id=10364&pub_id=111864";
  try {
    const response = await fetch(affiliateURL);
    const data = await response.json();
    res.json(data); // Return the affiliate data from Ajio
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Ajio affiliate data' });
  }
});

app.get('/tata', async (req, res) => {
  const affiliateURL = "https://track.vcommission.com/click?campaign_id=10240&pub_id=111864";
  try {
    const response = await fetch(affiliateURL);
    const data = await response.json();
    res.json(data); // Return the affiliate data from Tata Cliq
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Tata Cliq affiliate data' });
  }
});

app.listen(7000, () => console.log("Proxy server running on port 3000"));
