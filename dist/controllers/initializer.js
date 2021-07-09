"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
/*
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mMMMMMMMMMNNNmmNNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNMMMMNNNNNmmmddhdddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mddNMMNy:/odNmmddmmNNmdhhddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmdNMNd:--+dNmmddhhddmmhsyhhmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNmdNmy:.-oyNmmmhmdhho+sososyhhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmNdh+-`.:oyNNdmmdmmdo-://oysssyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nmmmoyyyo+osdNmdmmddNNhs+/::/+osyssydyhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNmhsymMMNmmmmdmdNNddNmsso+++////ossssyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mhhhmNNMNNNhssshhmmddmmssyooooso/::+oysshhhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmdhdddNNdyoosyhdmddmmmsoooooyysyys/::/oyyhhhyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdddhddmhsooshdmdmdhhyyyysso/ooo+syhhs/-/+shyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dyyhdmd+ososhdmdmyyhhhhhhhyo++o/+///+ohhso++sdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dhdmNNdsossyhmdmsydhssssyhhs/++o/o+//:++yhhy+/hNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdmNNNNmhysshddyshdyyy/oss+s::/:://++///++++/::hmNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNMNNNmmNNdymNNhshdshdyhdysh+sy+-:++osssosss++yNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNNNmdNNmNmmmNmyyddyyhdhydyohys/-oo+osssysyyohNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNhdNmmNNmNMMNhyyhhhdhyyhmmyh+-/s+sysssyyhyydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mNMMMhdNdmMNMMMMMNNmdhdddmhdmmNho/-osoyyo++oyddhhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NMMMNmhNdNMNMNMMNmNNNmmmdyoohmhoyo::hsooo++oooydhymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNhmNNMmmNMNNmmmmdmmdyhhoyddddoo++yoyysooossyhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNmmNNNmdNdNmmddhhhdNNhsmNssdooo/dso++osyyysoymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMNNNNmNNNNNmddmmNhshNmmmNmNMdhNsh/ohho++/:++MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MNNNMMNNNNmmmhhhhdyosdNmdmMMhoNmhdmys+ooo++/+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNMMNNNNmddmdoodmMMNmmNNhssdmNMMMNdNd/osomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNdhMNmNNMNmdNddohmMMNNNmdmdddNMMMMMMMMmMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNhmMmmmmNNmdNyoNMNmNmdhyyyhdhoyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdmMmmddddNmmdys+hmMMMmmhysssyy++dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdNMMdmdddmmNNyshmNNNNNNNdhhs+yy//dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMMdmdddmmMNysdmNNMMMNhhNdhs+y+/:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNhmmddNNNMdyydmMMMNdyshNhyoss+:/MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMddmmmmNMNMNdsymNNmdhhdNMNdhsss+:yMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMdhmmmmmNMNNMmshNMMMmmMMMMMmNdyo+//NMMMMMMMMMMMMMMMhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMmhmmmmmmNMMNNMyshdhhhyhNMMMMMMdhso+sMMMMMMMMMMMMMMMhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMmdmmmmmmmNMMMmNm+ys++oyyNMMMMMMNmmyyoyNMMMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmmmmmmmmmmNMNNmNNyyo+/oohNMMMMMMMMdhhsshmMMMMMMMMMMMyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNNNNmmmmNMMNmmddNmmdhhdmMMMMMMMMMNddhssshmmNNNmmdhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNNmNNNNMMMMMNomMMMMMMMMMNNmdhhyyyyyyyhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nd+oNMMMMMMMmodo++++++++++m..yNMMMMMNo+mNMMmhssshdNMMNhNMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MN+ /NMMMMMm: d` -ssssss+`d. `+mMMMMN. dNm+:+syso//hNN--yNMMMMMMMd+`yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMN+ /NMMMm: oM` +NMMMMMNdN. /`.yNMMN. dh.omMMMMMNy.oM- `:hNMMMm+.  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMN/ /NMm: oNy` :sssmMMMMN. dh-`/mMN. d-/NMMMMMMMMy`m- y/`/dmo..o: yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMN/ /m: +NNy. /yyyNMMMMN. dNNo`.yN- d.oNMMMMMMMMd d- mNh-`.`+mN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMN/ . +NMMN- oNMMMMMNdN. dMMMd:`/. ds.dNMMMMMMm::M- dMMNy/dMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMN/ +NMMMN- /yyyyyys d. dMMMMNo`  dNy-+ymmmho-+NN- dMMMMMMMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMNyNMMMMN+::::::::::m+/mMMMMMMd: dMMNho///+ymMMN+/mMMMMMMMMNs/hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNsmMMMMMMMMMMMMMMNNNNMMNNNMMNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
var fs_1 = require("fs");
var whatsapp_1 = require("../api/whatsapp");
var create_config_1 = require("../config/create-config");
var auth_1 = require("./auth");
var browser_1 = require("./browser");
var welcome_1 = require("./welcome");
var spinnies_1 = require("../utils/spinnies");
var enum_1 = require("../api/model/enum");
var helpers_1 = require("../api/helpers");
var check_token_file_1 = require("../api/helpers/check-token-file");
function create(sessionOrOption, catchQR, statusFind, options, browserSessionToken, browserInstance) {
    return __awaiter(this, void 0, void 0, function () {
        var session, browserToken, spinnies, mergedOptions, ver, browser, page_1, client_1, isLogged, waitLoginPromise_1, debugURL;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = 'session';
                    if (typeof sessionOrOption === 'string' &&
                        sessionOrOption.replace(/\s/g, '').length) {
                        session = sessionOrOption.replace(/\s/g, '');
                    }
                    else if (typeof sessionOrOption === 'object') {
                        session = sessionOrOption.session;
                        catchQR = sessionOrOption.catchQR || catchQR;
                        statusFind = sessionOrOption.statusFind || statusFind;
                        browserSessionToken =
                            sessionOrOption.browserSessionToken || browserSessionToken;
                        browserInstance = sessionOrOption.browserInstance || browserInstance;
                        options = sessionOrOption;
                    }
                    spinnies = spinnies_1.getSpinnies({
                        disableSpins: options ? options.disableSpins : false,
                    });
                    mergedOptions = __assign(__assign({}, create_config_1.defaultOptions), options);
                    if (!mergedOptions.disableWelcome) {
                        welcome_1.welcomeScreen();
                    }
                    if (!mergedOptions.updatesLog) return [3 /*break*/, 2];
                    return [4 /*yield*/, welcome_1.checkUpdates(spinnies)];
                case 1:
                    ver = _a.sent();
                    if (ver === false) {
                        throw "Unable to access: \"https://www.npmjs.com\", check your internet";
                    }
                    _a.label = 2;
                case 2:
                    // Initialize whatsapp
                    if (mergedOptions.browserWS) {
                        spinnies.add("browser-" + session, {
                            text: "Waiting... checking the wss server...",
                        });
                    }
                    else {
                        spinnies.add("browser-" + session, {
                            text: 'Waiting... checking the browser...',
                        });
                    }
                    return [4 /*yield*/, browser_1.initBrowser(session, mergedOptions)];
                case 3:
                    browser = _a.sent();
                    // Erro of connect wss
                    if (typeof browser === 'string' && browser === 'connect') {
                        spinnies.fail("browser-" + session, {
                            text: "Error when try to connect " + mergedOptions.browserWS,
                        });
                        statusFind && statusFind('serverWssNotConnected', this.session);
                        throw "Error when try to connect " + mergedOptions.browserWS;
                    }
                    // Erro open browser
                    if (typeof browser === 'string' && browser === 'launch') {
                        spinnies.fail("browser-" + session, {
                            text: "Error no open browser....",
                        });
                        statusFind && statusFind('noOpenBrowser', this.session);
                        throw "Error no open browser....";
                    }
                    if (mergedOptions.browserWS) {
                        spinnies.succeed("browser-" + session, {
                            text: "Has been properly connected to the wss server",
                        });
                    }
                    else {
                        spinnies.succeed("browser-" + session, {
                            text: "Browser successfully opened",
                        });
                    }
                    if (!mergedOptions.browserWS) {
                        spinnies.add("browser-" + session, {
                            text: 'checking headless...',
                        });
                        if (mergedOptions.headless) {
                            spinnies.succeed("browser-" + session, {
                                text: 'headless option is active, browser hidden',
                            });
                        }
                        else {
                            spinnies.succeed("browser-" + session, {
                                text: 'headless option is disabled, browser visible',
                            });
                        }
                    }
                    if (!(typeof browser === 'object')) return [3 /*break*/, 9];
                    if (!mergedOptions.browserWS && browser['_process']) {
                        browser['_process'].once('close', function () {
                            browser['isClose'] = true;
                        });
                    }
                    helpers_1.checkingCloses(browser, mergedOptions, function (result) {
                        statusFind && statusFind(result, session);
                    }).catch(function () {
                        throw 'The client has been closed';
                    });
                    if (auth_1.SessionTokenCkeck(browserSessionToken)) {
                        browserToken = browserSessionToken;
                    }
                    spinnies.add("whatzapp-" + session, {
                        text: 'Checking page...',
                    });
                    return [4 /*yield*/, browser_1.initWhatsapp(session, mergedOptions, browser, browserToken)];
                case 4:
                    page_1 = _a.sent();
                    if (browserInstance) {
                        browserInstance(browser, page_1);
                    }
                    if (page_1 === false) {
                        spinnies.fail("whatzapp-" + session, {
                            text: 'Error accessing the page: "https://web.whatsapp.com"',
                        });
                        throw 'Error when trying to access the page: "https://web.whatsapp.com"';
                    }
                    spinnies.succeed("whatzapp-" + session, {
                        text: 'Page successfully accessed',
                    });
                    client_1 = new whatsapp_1.Whatsapp(page_1, session, mergedOptions);
                    client_1.onStreamChange(function (stateStream) { return __awaiter(_this, void 0, void 0, function () {
                        var onQR;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (stateStream === enum_1.SocketStream.CONNECTED) {
                                        statusFind && statusFind('chatsAvailable', session);
                                    }
                                    if (!(stateStream === enum_1.SocketStream.DISCONNECTED)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, page_1.evaluate(function () {
                                            if (document.querySelector('canvas') &&
                                                document.querySelectorAll('#startup').length == 0) {
                                                return true;
                                            }
                                            else {
                                                return false;
                                            }
                                        })];
                                case 1:
                                    onQR = _a.sent();
                                    if (onQR === true && check_token_file_1.checkFileJson(mergedOptions, session)) {
                                        if (statusFind) {
                                            statusFind('desconnectedMobile', session);
                                        }
                                        helpers_1.deleteFiles(mergedOptions, session, spinnies);
                                    }
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                    client_1.onStateChange(function (state) {
                        if (state === enum_1.SocketState.PAIRING) {
                            var device = page_1.evaluate(function () {
                                if (document.querySelectorAll('#startup').length) {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            });
                            if (device) {
                                if (statusFind) {
                                    statusFind('deviceNotConnected', session);
                                }
                            }
                        }
                        if (mergedOptions.createPathFileToken) {
                            if (state === enum_1.SocketState.CONNECTED) {
                                setTimeout(function () {
                                    auth_1.saveToken(page_1, session, mergedOptions).catch(function (e) {
                                        spinnies.update("browser-" + session, {
                                            text: e,
                                        });
                                    });
                                }, 1000);
                            }
                        }
                    });
                    if (!mergedOptions.waitForLogin) return [3 /*break*/, 6];
                    return [4 /*yield*/, client_1.waitForLogin(catchQR, statusFind)];
                case 5:
                    isLogged = _a.sent();
                    if (!isLogged) {
                        throw 'Not Logged';
                    }
                    waitLoginPromise_1 = null;
                    client_1.onStateChange(function (state) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(state === enum_1.SocketState.UNPAIRED ||
                                        state === enum_1.SocketState.UNPAIRED_IDLE)) return [3 /*break*/, 2];
                                    if (!waitLoginPromise_1) {
                                        waitLoginPromise_1 = client_1
                                            .waitForLogin(catchQR, statusFind)
                                            .catch(function () { })
                                            .finally(function () {
                                            waitLoginPromise_1 = null;
                                        });
                                    }
                                    return [4 /*yield*/, waitLoginPromise_1];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                    _a.label = 6;
                case 6:
                    if (mergedOptions.debug) {
                        debugURL = "http://localhost:" + fs_1.readFileSync("./" + session + "/DevToolsActivePort").slice(0, -54);
                        console.log("\nDebug: \u001B[34m" + debugURL + "\u001B[0m");
                    }
                    return [4 /*yield*/, page_1.waitForSelector('#app .two', { visible: true }).catch(function () { })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page_1.waitForFunction(function () {
                            if (window.Store &&
                                window.Store.WidFactory &&
                                window.Store.WidFactory.createWid) {
                                return true;
                            }
                        }, {
                            timeout: 0,
                            polling: 100,
                        })];
                case 8:
                    _a.sent();
                    return [2 /*return*/, client_1];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
//# sourceMappingURL=initializer.js.map