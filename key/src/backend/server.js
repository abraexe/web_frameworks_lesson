const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const creds = require("../../credentials.js");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));

const port = 3000;

const SUPABASE_URL = creds.url;
const SUPABASE_ANON_KEY = creds.key; 

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let next_id = 1;

app.listen(port, () => {
    console.log("Server running!");
});

app.get('', async (req, res) => {
  const {data, error} = await supabase.from('to_do').select();
  next_id = data[data.length-1].id+1;
  console.log(next_id);
  return res.json(data);
});

app.post('', async (req, res) => {
  const label = req.body.text;
  const { error } = await supabase
  .from('to_do')
  .insert({ id: next_id, text: label });
  next_id++;
});