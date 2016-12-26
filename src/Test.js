"use strict";
const React = require("react");
class Test extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("h1", null, "My little tester class ")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Test;
