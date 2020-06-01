let config = require('./config/config.json')[process.env.NODE_ENV];

let api = require('./api/app');
api.set('port', config.api.port || 8002);

api.listen(api.get('port'), function() {
    console.log('API server listening on port ' + api.get('port') + ' in ' + api.get('env') + ' mode');
});

let www = require('./www/src/app');
www.set('port', config.www.port || 8001);

www.listen(www.get('port'), function() {
    console.log('Client server listening on port ' + www.get('port') + ' in ' + www.get('env') + ' mode');
})
