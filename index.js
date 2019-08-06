const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');


const public_key = 'BJifbR0b9JnGidkXmq6VrI4JurMZ9t_qs1DcqqCdkP8thaEOtn-O3Y1M0MfhPN95-9xGJi9n3phlDBMPhO8V-2Q';
const private_key = '4qC1FE1CBYJq9fmzzFZ0_G8UV27X82PNjV-X4k_g1Wo';

webpush.setVapidDetails(
  "mailto:test@test.com",
  public_key,
  private_key
)

const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json())

app.post('/subscribe', (req, res) => {
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({ title: "Push sent" });

  webpush.sendNotification(subscription, payload).catch(err => console.log(err));
})

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
