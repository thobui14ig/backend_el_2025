"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayModules = void 0;
const common_1 = require("@nestjs/common");
const app_gateway_1 = require("./app.gateway");
const user_module_1 = require("../user/user.module");
let GatewayModules = class GatewayModules {
};
GatewayModules = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule],
        providers: [app_gateway_1.AppGateway],
        controllers: [],
    })
], GatewayModules);
exports.GatewayModules = GatewayModules;
//# sourceMappingURL=gateway.modules.js.map