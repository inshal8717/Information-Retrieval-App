"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import Request & Response from express
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Dummy data
const results = [
    { id: 1, title: 'Angular', description: 'A popular frontend framework by Google.' },
    { id: 2, title: 'Express', description: 'A minimal backend framework for Node.js.' },
    { id: 3, title: 'TypeScript', description: 'A typed superset of JavaScript.' }
];
// Search endpoint
app.post('/api/search', (req, res) => {
    var _a;
    const query = (_a = req.body.query) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (!query) {
        res.status(400).json({ message: 'Query is required' });
    }
    const filteredResults = results.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));
    res.json(filteredResults); // This line was previously empty, now correctly returning results
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
