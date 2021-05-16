"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./user.entity");
const constant_1 = require("../auth/constant");
;
let UsersService = class UsersService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async signup(body) {
        try {
            const user = await this.userRepository.findOne({ email: body.email });
            if (user) {
                return new common_1.NotFoundException("INCORRECT USER");
            }
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(body.password, salt);
            body.password = hash;
            await this.userRepository.save(body);
            const newToken = await this.jwtService.sign({
                email: body.email,
                secret: constant_1.jwtConstants.secret
            });
            return {
                name: body.name,
                token: newToken,
                authenticated: true,
            };
        }
        catch (error) {
            return new Error("User Already exists");
        }
    }
    async login(body) {
        try {
            console.log(body);
            const user = await this.userRepository.findOne({ email: body.email });
            if (user) {
                const passwordChecked = bcrypt.compareSync(body.password, user.password);
                if (passwordChecked) {
                    const newToken = await this.jwtService.sign({
                        email: body.email,
                        secret: constant_1.jwtConstants.secret
                    });
                    return {
                        name: user.name,
                        token: newToken,
                        authenticated: true,
                    };
                }
                else {
                    return new common_1.NotFoundException("INCORRECT email OR PASSWORD");
                }
            }
            return new common_1.NotFoundException("INCORRECT email OR PASSWORD");
        }
        catch (error) {
            return new Error("USER DOES NOT EXISTS");
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_2.InjectRepository(user_entity_1.Users)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map