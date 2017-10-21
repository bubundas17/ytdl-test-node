var express = require('express')
var ytdl    = require('ytdl-core')
var app = express()

app.get('/', (req, res) => {
  ytdl.getInfo(req.query.id, (err, info) => {
    if (err) {
      return res.json({
        success: false,
        response: err
      })
    }

    res.json({
      success: true,
      response: info
    })

  })
})

app.listen(3000)
