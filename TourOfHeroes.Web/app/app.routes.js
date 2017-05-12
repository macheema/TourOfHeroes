"use strict";
var index_1 = require('./dashboard/index');
var index_2 = require('./shared/index');
var index_3 = require('./heroes/index');
exports.routes = index_1.DashboardRoutes.concat(index_2.HeroDetailRoutes, index_3.HeroesRoutes, [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]);
//# sourceMappingURL=app.routes.js.map