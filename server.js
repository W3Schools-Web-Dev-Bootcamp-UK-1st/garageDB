const express = require('express');
const ownerRoutes = require("./router/ownerRoutes");
const { testConnection } = require('./models/conn')

const app = express();
testConnection();

app.use(express.json());
app.use("/owner", ownerRoutes);

app.listen(3000, async () => {
  console.log('Server is running on port 3000');
}); 
