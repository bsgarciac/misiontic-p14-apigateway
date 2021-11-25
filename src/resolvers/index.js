const accountResolver = require("./account_resolver");
const authResolver = require("./auth_resolver");

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, authResolver);

module.exports = resolvers;
