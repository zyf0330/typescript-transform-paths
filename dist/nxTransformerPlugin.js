"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nxTransformerPlugin = void 0;
const transformer_1 = __importDefault(require("./transformer"));
function getNxTransformer(phase) {
    return (pluginConfig, program) => {
        const config = Object.assign({}, pluginConfig);
        delete config.before;
        if (phase === "before" && ((pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.before) || !(pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.afterDeclarations))) {
            return transformer_1.default(program, Object.assign(Object.assign({}, config), { afterDeclarations: false }));
        }
        else if (phase === "afterDeclarations" && (pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.afterDeclarations)) {
            return transformer_1.default(program, Object.assign(Object.assign({}, config), { afterDeclarations: true }));
        }
        else {
            return () => (sourceFile) => sourceFile;
        }
    };
}
exports.nxTransformerPlugin = {
    before: getNxTransformer("before"),
    afterDeclarations: getNxTransformer("afterDeclarations"),
};
