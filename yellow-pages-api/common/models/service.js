'use strict';

module.exports = function(Service) {
Service.beforeRemote('create', function(ctx,instance,next){
ctx.args.ownerId = ctx.req.accessToken.userId})

};
