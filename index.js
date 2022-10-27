const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 6060

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/.well-known/apple-app-site-association', function(req, res) {
    res.json([{
      "applinks": {
        "details": [
          {
            "appIDs": [
              "TLTF7FJX27.com.bimtrack.bimtrack",
            ],
            "components": [
              {
                "/": "/*",
                "comment": "Matches any URL with a path that starts with /."
              },
            ]
          }
        ]
      },
      "webcredentials": {
        "apps": [
          "TLTF7FJX27.com.bimtrack.bimtrack"
        ]
      },
      "appclips": {
        "apps": []
      }
    }
  ]);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
