const express = require("express");
const cors = require("cors"); // Import cors
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require('./models/url');
require('dotenv').config();

const app = express();

const PORT = 8001;

// Enable CORS for all origins
app.use(cors()); // Use CORS middleware

app.use(cors({
    origin: 'http://localhost:5173',  // Frontend URL
  }));
  
connectToMongoDB(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected"));

app.use(express.json());
app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
  
    try {
      const entry = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitHistory: {
              timestamp: Date.now(),
            },
          },
        }
      );
  
      // Check if the entry exists and if there's a redirectURL
      if (!entry || !entry.redirectURL) {
        return res.status(404).json({ error: 'URL not found' });
      }
  
      // Perform the redirection to the target URL
      return res.redirect(entry.redirectURL);
    } catch (error) {
      console.error('Error during redirection:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));
