import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from "clsx";
export function Card({ children, className }) {
    return (_jsx("div", { className: clsx("rounded border bg-white shadow-sm", className), children: children }));
}
