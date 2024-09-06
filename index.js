const express = require("express");
const app = express();
const path = require("path");
const conversions = require('./conversions')
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post('/convert', (req,res)=>{
  const {value, fromUnit,toUnit,type} = req.body;
  if(!conversions[type]){
    return res.status(400).json({message: "Invalid conversion type."});
  }
  try {
    const convertedValue = conversions[type](value,fromUnit,toUnit)
    res.json({convertedValue});
  } catch (error) {
    res.status(400).json({message: "Invalid conversion"})
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
