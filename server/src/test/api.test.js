"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = __importDefault(require("../src/app"));
const expect = chai_1.default.expect;
chai_1.default.use(chai_http_1.default);
describe('API Tests', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield chai_1.default.request(app_1.default).post('/items').send({ name: 'Test Item' });
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield chai_1.default.request(app_1.default).delete('/items');
    }));
    it('should get all items', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai_1.default.request(app_1.default).get('/items');
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
    }));
    it('should add a new item', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai_1.default.request(app_1.default).post('/items').send({ name: 'New Item' });
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name', 'New Item');
    }));
});
