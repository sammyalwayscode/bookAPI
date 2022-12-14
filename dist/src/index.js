"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRouter_1 = __importDefault(require("../router/bookRouter"));
const PORT = process.env.PORT || 2442;
const app = (0, express_1.default)();
require("../config/db");
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server Up 🚀🚀🚀",
    });
});
app.use("/server", bookRouter_1.default);
app.listen(PORT, () => {
    console.log(`Server up on PORT: ${PORT}`);
});
