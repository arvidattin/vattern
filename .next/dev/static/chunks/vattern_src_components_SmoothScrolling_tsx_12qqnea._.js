(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vattern/src/components/SmoothScrolling.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScrolling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vattern$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vattern/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vattern$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vattern/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vattern$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vattern/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SmoothScrolling({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vattern$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScrolling.useEffect": ()=>{
            // Initialize Lenis
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$vattern$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScrolling.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScrolling.useEffect"]
            });
            // Request Animation Frame loop for Lenis
            const raf = {
                "SmoothScrolling.useEffect.raf": (time)=>{
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
            }["SmoothScrolling.useEffect.raf"];
            requestAnimationFrame(raf);
            // Cleanup on unmount
            return ({
                "SmoothScrolling.useEffect": ()=>{
                    lenis.destroy();
                }
            })["SmoothScrolling.useEffect"];
        }
    }["SmoothScrolling.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vattern$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vattern$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(SmoothScrolling, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScrolling;
var _c;
__turbopack_context__.k.register(_c, "SmoothScrolling");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vattern_src_components_SmoothScrolling_tsx_12qqnea._.js.map