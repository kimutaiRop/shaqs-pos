import "./bootstrap";
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./components/${name}.jsx`,
            import.meta.glob("./components/**/*.jsx")
        ),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});
