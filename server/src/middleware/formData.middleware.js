const multiparty = require('multiparty');

//middleware for parsing multipart/form-data
const formData = (async (req, res, next) => {

    if (req != null && req.headers != null && req.headers['content-type'] != null) {
        if (req.headers['content-type'].search('multipart/form-data') != -1) {

            const form = new multiparty.Form();

            await new Promise((resolve) => {
                form.parse(req, async (err, fields, files) => {
                    if (err) {
                        return res.status(500).json({
                            status: 500,
                            message: err.message
                        });
                    }

                    let body = {};
                    Object.keys(fields).forEach((key) => {
                        body[key] = fields[key].length <= 1 ? fields[key][0] : fields[key];
                    });
                    req.body = body;
                    req.files = files;

                    resolve();
                })
            });
        }
    }
    next();
});

module.exports = formData;