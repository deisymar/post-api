"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var v1_1 = require("./router/v1");
var main_1 = require("./config/main");
//init express
var app = express();
//init moongose
mongoose.connect(main_1.default.db);
//express middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
//router
v1_1.default(app);
//init server
var server;
if (process.env.NODE_ENV !== main_1.default.test_env) {
    server = app.listen(main_1.default.port, function () {
        console.log('sever listening on port ${config.port}');
    });
}
else {
    server = app.listen(main_1.default.test_port, function () {
        console.log('sever listening on port ${config.test_port}');
    });
}
//export
exports.default = server;
//# sourceMappingURL=server.js.map