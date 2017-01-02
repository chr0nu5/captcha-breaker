var tesseract = require('node-tesseract');

// Recognize text of any language in any format
['1204', '2793', '3325', '4203', '8696', '9942'].forEach((n) => {
    tesseract.process(__dirname + `/images/${n}.png`, function(err, text) {
        if (err) {
            console.error(err);
        } else {
            console.log(`${n}.png`, parseInt(text));
        }
    });
});
