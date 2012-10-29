angular.module('mongolab', ['ngResource'])
       .factory('Character', function($resource) {

			// https://api.mongolab.com/api/1/databases?apiKey=<your-api-key>
            var Character = $resource('https://api.mongolab.com/api/1/databases/zg/collections/characters/:id',
                    { apiKey: '5082a4d4e4b0940f2c2e5be9' },
                    {
                        update: { method: 'PUT' }
                    });
            
            Character.prototype.query = function(cb) {
                return Character.query(cb);
            }

			// Character.prototype is used for creating new object
			// Character.update is resource function
			// Character.prototype.update != Character.update
            Character.prototype.update = function(cb) {
                return Character.update({id: this._id.$oid},angular.extend({}, this, {_id:undefined}), cb);
            };

            Character.prototype.destroy = function(cb) {
                return Character.remove({id: this._id.$oid}, cb);
            };

            return Character;
       });