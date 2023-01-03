const info = {
    name: 'cafe-menu',
    version: '1.0.0',
    description: 'Cafe Menu API',
}

const infoController = async (req, res) => {
    res.json({
        status: 200,
        message: 'app info',
        info: info
    });
}
    
module.exports = infoController