import ts from "typescript";
import { TsTransformPathsConfig } from "../types";
declare type NXTransformer = (config?: Omit<TsTransformPathsConfig, "transform">, program?: ts.Program) => ts.TransformerFactory<ts.SourceFile>;
export interface NXTransformerPlugin {
    before: NXTransformer;
    afterDeclarations: NXTransformer;
}
export declare const nxTransformerPlugin: NXTransformerPlugin;
export {};
