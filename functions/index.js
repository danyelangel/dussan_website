var functions = require('firebase-functions'),
    getPixels = require('get-pixels'),
    getRgbaPalette = require('get-rgba-palette'),
    Promise = require('promise');

function chroma(rgb) {
  return "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
}

exports.getPalette = functions
  .database()
  .path('pages/{pageId}/cards/{cardId}/media')
  .on('write', function (event) {
    if (event.data.child('palette').val()) {
      return;
    } else if (event.data.child('url').val()) {
      var palette;
      return new Promise(function (resolve, reject) {
          getPixels(
            event.data.child('url').val(),
            function (err, pixels) {
              if (err) { return reject(err); }
              palette = getRgbaPalette(
                  pixels.data,
                  3
                ).map(function (rgba) {
                  return chroma(rgba)
                });
              console.log(palette);
              return event
                .data
                .ref
                .update({
                  palette: palette
                }).then(resolve);
            }
          );
        });
    } else {
      return;
    }
  });
