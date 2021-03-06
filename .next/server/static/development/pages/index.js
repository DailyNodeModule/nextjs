module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/display.js":
/*!*******************************!*\
  !*** ./components/display.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/zachary/Projects/dnm/nextjs/components/display.js";



var Display =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Display, _Component);

  function Display() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Display);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Display).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Display, [{
    key: "render",
    value: function render() {
      if (!this.props.item) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      });
      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'fixed',
          right: '0',
          top: '0',
          width: '400px',
          height: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        style: {
          width: '100%',
          height: '200px',
          backgroundImage: "url(/static/images/".concat(this.props.item.name, ".jpg)"),
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPositionY: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: "rgba(0,0,0,0.5)",
          height: '100%',
          width: '100%',
          color: 'white',
          verticalAlign: 'middle',
          textAlign: 'center',
          lineHeight: '200px',
          fontSize: '2em',
          textShadow: '0px 0px 5px rgba(0,0,0,0.75)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, item.label)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        style: {
          padding: '1em 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, item.text), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "This text is from a ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Wikipedia article"), " which is released under the ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://creativecommons.org/licenses/by-sa/3.0/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Creative Commons Attribution-Share-Alike License 3.0")));
    }
  }]);

  return Display;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./components/items.js":
/*!*****************************!*\
  !*** ./components/items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "label": "Cologne",
  "name": "cologne",
  "text": "Cologne (English:  /kəˈloʊn/; German: Köln, pronounced [kœln] (listen), Ripuarian: Kölle [ˈkœlə] (listen)) is the largest city of Germany's most populous federal state of North Rhine-Westphalia, and its 1 million+ (2016) inhabitants make it the fourth most populous city in Germany after Berlin, Hamburg, and Munich. The largest city on the Rhine, it is also the most populous city both of the Rhine-Ruhr Metropolitan Region, which is Germany's largest and one of Europe's major metropolitan areas, and of the Rhineland. Centred on the left bank of the Rhine, Cologne is about 45 kilometres (28 mi) southeast of North Rhine-Westphalia's capital of Düsseldorf and 25 kilometres (16 mi) northwest of Bonn. It is the largest city in the Central Franconian and Ripuarian dialect areas.\nIn the Roman Empire the city was large and rich with a population of 40,000 in 100–200 AD.[35] The city was home to around 20,000 people in 1000 AD, growing to 50,000 in 1200 AD. The Rhineland metropolis still had 50,000 residents in 1300 AD.[36][37]\n",
  "url": "https://en.wikipedia.org/wiki/Cologne"
}, {
  "label": "Aachen",
  "name": "aachen",
  "text": "Aachen (/ˈɑːxən, ˈɑːkən/,[3][4] German: [ˈaːxn̩] (listen); Ripuarian: Oche [ˈɔːxə]), also known as Bad Aachen (\"Aachen Spa\"), and in French and traditional English as Aix-la-Chapelle,[a] is a spa and border city[6] in North Rhine-Westphalia, Germany. Aachen developed from a Roman settlement and spa, subsequently becoming the preferred medieval Imperial residence of Charlemagne,[7] and, from 936 to 1531, the place where 31 Holy Roman Emperors were crowned Kings of the Germans.[8]\nBoroughs[edit]",
  "url": "https://en.wikipedia.org/wiki/Aachen"
}, {
  "label": "Free Imperial City of Aachen",
  "name": "free-imperial-city-of-aachen",
  "text": "The Free Imperial City of Aachen, also known in English by its French name of Aix-la-Chapelle, was a Free Imperial City and spa of the Holy Roman Empire west of Cologne[1] and southeast of the Low Countries, in the Lower Rhenish–Westphalian Circle.[2] The pilgrimages, the Coronation of the Holy Roman Emperor, flourishing industries and the privileges conferred by various emperors made it one of the most prosperous market towns of the Holy Roman Empire.[1]\n",
  "url": "https://en.wikipedia.org/wiki/Free_Imperial_City_of_Aachen"
}, {
  "label": "Free City of Lübeck",
  "name": "free-city-of-l%C3%BCbeck",
  "text": "The Free and Hanseatic City of Lübeck (German: Freie und Hansestadt Lübeck, Danish: Lybæk) was a city-state from 1226 to 1937, in what is now the German states of Schleswig-Holstein and Mecklenburg-Vorpommern.\n",
  "url": "https://en.wikipedia.org/wiki/Free_City_of_L%C3%BCbeck"
}, {
  "label": "Worms, Germany",
  "name": "worms%2C-germany",
  "text": "  The restored Cathedral of Worms  Map of Worms in 1630. The Jewish Ghetto is marked in yellow.",
  "url": "https://en.wikipedia.org/wiki/Worms,_Germany"
}, {
  "label": "Speyer",
  "name": "speyer",
  "text": "Speyer (German pronunciation: [ˈʃpaɪ̯ɐ], older spelling Speier, known as Spire in French and formerly as Spires in English) is a town in Rhineland-Palatinate, Germany, with approximately 50,000 inhabitants. Located beside the river Rhine, Speyer is 25 km (16 miles) south of Ludwigshafen and Mannheim. Founded by the Romans, it is one of Germany's oldest cities. \nSpeyer is dominated by the Speyer Cathedral, a number of churches and the Altpörtel (old gate). In the cathedral, beneath the high altar, are the tombs of eight Holy Roman Emperors and German kings.\nMain article: History of Speyer",
  "url": "https://en.wikipedia.org/wiki/Speyer"
}, {
  "label": "Free City of Frankfurt",
  "name": "free-city-of-frankfurt",
  "text": "For almost five centuries, the German city of Frankfurt was a city-state within two major Germanic entities:\n",
  "url": "https://en.wikipedia.org/wiki/Free_City_of_Frankfurt"
}, {
  "label": "Goslar",
  "name": "goslar",
  "text": "GoslarUNESCO World Heritage SiteView to the North with the Hildesheim downs in the background. Photograph taken from the Maltermeister TowerPart ofMines of Rammelsberg, Historic Town of Goslar and Upper Harz Water Management SystemCriteriaCultural: i, ivReference623-001Inscription1992 (16th Session)Extensions2010Area363.3 haBuffer zone376.1 haGoslar is a historic town in Lower Saxony, Germany. It is the administrative centre of the district of Goslar and located on the northwestern slopes of the Harz mountain range. The Old Town of Goslar and the Mines of Rammelsberg are UNESCO World Heritage Sites.\n",
  "url": "https://en.wikipedia.org/wiki/Goslar"
}, {
  "label": "Bremen (state)",
  "name": "bremen-(state)",
  "text": "Bremen (pronounced [ˈbʁeːmn̩] (listen)), officially the Free Hanseatic City of Bremen (German: Freie Hansestadt Bremen), is the smallest and least populous of Germany's 16 states. It is informally called Land Bremen (\"State of Bremen\"), although this is sometimes used in official contexts. The state consists of the city of Bremen as well as the small exclave of Bremerhaven in Northern Germany, surrounded by the larger state of Lower Saxony.\n",
  "url": "https://en.wikipedia.org/wiki/Bremen_(state)"
}, {
  "label": "Hamburg",
  "name": "hamburg",
  "text": "  Official logo of the Free and Hanseatic City of HamburgOn 31 December 2016, there were 1,860,759 people registered as living in Hamburg in an area of 755.3 km2 (291.6 sq mi). The population density was 2,464/km2 (6,380/sq mi).[34] The metropolitan area of the Hamburg region (Hamburg Metropolitan Region) is home to 5,107,429 living on 196/km2 (510/sq mi).[35]\n",
  "url": "https://en.wikipedia.org/wiki/Hamburg"
}, {
  "label": "Mühlhausen",
  "name": "m%C3%BChlhausen",
  "text": "Mühlhausen is a city in the north-west of Thuringia, Germany, 5 km (3 miles) north of Niederdorla, the country's geographical centre, 50 km (31 miles) north-west of Erfurt, 65 km (40 miles) east of Kassel and 50 km (31 miles) south-east of Göttingen.\n",
  "url": "https://en.wikipedia.org/wiki/M%C3%BChlhausen"
}, {
  "label": "Nordhausen",
  "name": "nordhausen",
  "text": "Nordhausen is a city in Thuringia, Germany. It is the capital of the Nordhausen district and the urban centre of northern Thuringia and the southern Harz region; its population is 42,000. Nordhausen is located approximately 60 km (37 miles) north of Erfurt, 80 km (50 miles) west of Halle, 85 km (53 miles) south of Braunschweig and 60 km (37 miles) east of Göttingen.\nMiddle Ages[edit]",
  "url": "https://en.wikipedia.org/wiki/Nordhausen"
}, {
  "label": "Dortmund",
  "name": "dortmund",
  "text": "Dortmund ([ˈdɔɐ̯tmʊnt] (listen); Low German: Düörpm: [ˈdyːœɐ̯pm̩];  Latin: Tremonia) is, with a population of 586,600 (2017), the third largest city of Germany's most populous federal state of North Rhine-Westphalia after Cologne and Düsseldorf, and Germany's eighth largest city. It is the largest city (by area and population) of the Ruhr, Germany's largest urban area with some 5.1 million (2011) inhabitants, as well as the largest city of Westphalia. On the Emscher and Ruhr rivers (tributaries of the Rhine), it lies in the Rhine-Ruhr Metropolitan Region and is considered the administrative, commercial and cultural centre of the eastern Ruhr.\n",
  "url": "https://en.wikipedia.org/wiki/Dortmund"
}, {
  "label": "Friedberg, Hesse",
  "name": "friedberg%2C-hesse",
  "text": "Friedberg (Friedberg in der Wetterau) is a town and the capital of the Wetteraukreis district, in Hesse, Germany. It is located 16 miles (26 kilometers) north of Frankfurt am Main. In 1966, the town hosted the sixth Hessentag state festival, in 1979 the 19th.\n",
  "url": "https://en.wikipedia.org/wiki/Friedberg,_Hesse"
}, {
  "label": "Wetzlar",
  "name": "wetzlar",
  "text": "Wetzlar is a city in the state of Hesse, Germany. It is a former free imperial city that owed much of its fame to being the seat of the Imperial Supreme Court (Reichskammergericht) of the Holy Roman Empire. Located at 8° 30′ E, 50° 34′ N, Wetzlar straddles the river Lahn and is on the German Timber-Frame Road which passes mile upon mile of half-timbered houses. Historically, the city has acted as the hub of the Lahn-Dill-Kreis on the north edge of the Taunus. The city is known for its ancient town and its medieval cathedral.\n  Territory of the Free Imperial City in the 18th century",
  "url": "https://en.wikipedia.org/wiki/Wetzlar"
}, {
  "label": "Regensburg",
  "name": "regensburg",
  "text": "Regensburg (German pronunciation: [ˈʁeːɡŋ̍sbʊɐ̯k] (listen); Latin: Castra-Regina; Polish: Ratyzbona; Czech: Řezno; French: Ratisbonne; older English: Ratisbon; Bavarian: Rengschburg or Rengschburch) is a city in south-east Germany, at the confluence of the Danube, Naab and Regen rivers. With more than 150,000 inhabitants, Regensburg is the fourth-largest city in the State of Bavaria after Munich, Nuremberg and Augsburg. The city is the political, economic and cultural centre and capital of the Upper Palatinate.\n  Territory of Regensburg on an 18th-century map",
  "url": "https://en.wikipedia.org/wiki/Regensburg"
}, {
  "label": "Augsburg",
  "name": "augsburg",
  "text": "  Lord Mayor Kurt Gribl, 2010Augsburg was granted the status of a Free Imperial City on March 9, 1276 and from then until 1803, it was independent of its former overlord, the Prince-Bishop of Augsburg. Frictions between the city-state and the prince-bishops were to remain frequent however, particularly after Augsburg became Protestant and curtailed the rights and freedoms of Catholics.\nPartner cities[edit]",
  "url": "https://en.wikipedia.org/wiki/Augsburg"
}, {
  "label": "Nuremberg",
  "name": "nuremberg",
  "text": "Nuremberg (/ˈnjʊərəmbɜːrɡ/; German: Nürnberg; pronounced [ˈnʏɐ̯nbɛɐ̯k] (listen); Nuremberg dialect: Närmberch; East Franconian: Närrnberch or Nämberch) is the second-largest city of the German federal state of Bavaria after its capital Munich, and its 511,628 (2016) inhabitants make it the 14th largest city in Germany. On the Pegnitz River (from its confluence with the Rednitz in Fürth onwards: Regnitz, a tributary of the River Main) and the Rhine–Main–Danube Canal, it lies in the Bavarian administrative region of Middle Franconia, and is the largest city and the unofficial capital of Franconia. Nuremberg forms a continuous conurbation with the neighbouring cities of Fürth, Erlangen and Schwabach with a total population of 787,976 (2016), while the larger Nuremberg Metropolitan Region has approximately 3.5 million inhabitants. The city lies about 170 kilometres (110 mi) north of Munich. It is the largest city in the East Franconian dialect area (colloquially: \"Franconian\"; German: Fränkisch).\n",
  "url": "https://en.wikipedia.org/wiki/Nuremberg"
}, {
  "label": "Ulm",
  "name": "ulm",
  "text": "Ulm (German pronunciation: [ˈʊlm] (listen)) is a city in the federal German state of Baden-Württemberg, situated on the River Danube. The city, whose population is estimated at almost 120,000 (2015), forms an urban district of its own (German: Stadtkreis) and is the administrative seat of the Alb-Donau district. Founded around 850, Ulm is rich in history and traditions as a former free imperial city (German: freie Reichsstadt). Today, it is an economic centre due to its varied industries, and it is the seat of the University of Ulm. Internationally, Ulm is primarily known for having the church with the tallest steeple in the world (161.53 m or 529.95 ft), the Gothic minster (Ulm Minster, German: Ulmer Münster), and as the birthplace of Albert Einstein.\nEconomy[edit]",
  "url": "https://en.wikipedia.org/wiki/Ulm"
}, {
  "label": "Esslingen am Neckar",
  "name": "esslingen-am-neckar",
  "text": "Esslingen am Neckar is a city in the Stuttgart Region of Baden-Württemberg in southern Germany, seat of the District of Esslingen as well as the largest city in the district.\n",
  "url": "https://en.wikipedia.org/wiki/Esslingen_am_Neckar"
}, {
  "label": "Reutlingen",
  "name": "reutlingen",
  "text": "Reutlingen (German pronunciation: [ˈʁɔʏtlɪŋən] (listen); Swabian: Reitlenga) is a city in Baden-Württemberg, Germany. It is the capital of the eponymous district of Reutlingen. As of June 2018, it has a population of 115,818.[4]\nReutlingen has a university of applied sciences, which was founded in 1855, originally as a weavers' school.  Today Reutlingen is home to an established textile industry and also houses machinery, leather goods and steel manufacturing facilities. It has the narrowest street in the world, Spreuerhofstraße (width 31 cm).[5]\n  View of Reutlingen from the forest register books created by Andreas KieserLord Mayors[edit]",
  "url": "https://en.wikipedia.org/wiki/Reutlingen"
}, {
  "label": "Nördlingen",
  "name": "n%C3%B6rdlingen",
  "text": "Nördlingen is a town in the Donau-Ries district, in Swabia, Bavaria, Germany, with a population of approximately 19,190. It was built in an impact crater, and was first mentioned in recorded history in 898, and in 1998 the town celebrated its 1100th anniversary. The town was the location of two battles during the Thirty Years' War, which took place between 1618–1648. Today it is one of only three towns in Germany that still has a completely intact city wall, the other two being Rothenburg ob der Tauber and Dinkelsbühl.\n",
  "url": "https://en.wikipedia.org/wiki/N%C3%B6rdlingen"
}, {
  "label": "Rothenburg ob der Tauber",
  "name": "rothenburg-ob-der-tauber",
  "text": "Rothenburg ob der Tauber (German pronunciation: [ˈʁoːtn̩bʊɐ̯k ɔp deːɐ̯ ˈtaʊbɐ] (listen)) is a town in the district of Ansbach of Mittelfranken (Middle Franconia), the Franconia region of Bavaria, Germany. It is well known for its well-preserved medieval old town, a destination for tourists from around the world. It is part of the popular Romantic Road through southern Germany.\nIn 950, the weir system in today's castle garden was constructed by the Count of Comburg-Rothenburg.\n",
  "url": "https://en.wikipedia.org/wiki/Rothenburg_ob_der_Tauber"
}, {
  "label": "Schwäbisch Hall",
  "name": "schw%C3%A4bisch-hall",
  "text": "Schwäbisch Hall (German pronunciation: [ˈʃvɛːbɪʃ ˈhal]), or (in the vernacular called) Hall for short[3] is a town in the German state of Baden-Württemberg and capital of the district of Schwäbisch Hall. The town is located in the valley of the Kocher river in the north-eastern part of Baden-Württemberg.\n  St Michael's Church, Schwäbisch Hall",
  "url": "https://en.wikipedia.org/wiki/Schw%C3%A4bisch_Hall"
}, {
  "label": "Rottweil",
  "name": "rottweil",
  "text": "Rottweil (German: [ˈʁɔtvaɪl] (listen); Swabian: Rautweil) is a town in southwest Germany in the state of Baden-Württemberg. Rottweil was a Free Imperial City for nearly 600 years.\nImperial Abbey of RottenmünsterReichskloster Rottenmünster1237–1802StatusImperial AbbeyCapitalRottenmünsterGovernmentImperial AbbeyHistorical eraMiddle Ages• Founded 9 May 1224• Gained Imp. immediacy 1237• Razed by Württemberg in Thirty Years' War 1643• Mediatised to Württemberg 23 November 1802• Abbey abandoned 1850\n\n\n\n\n Preceded by\nSucceeded by\n\n\n\n\n\n\n\n\nImperial City of Rottweil\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDuchy of Württemberg\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nRottweil was founded by the Romans in AD 73 as Arae Flaviae and became a municipium, but there are traces of human settlement going back to 2000 BC. Roman baths and an Orpheus mosaic of c. AD 180, date from the time of Roman settlement. The present town became a ducal and a royal court before 771 and in the Middle Ages it became a Free Imperial City in 1268.\n",
  "url": "https://en.wikipedia.org/wiki/Rottweil"
}, {
  "label": "Überlingen",
  "name": "%C3%BCberlingen",
  "text": "  location of Überlingen within the BodenseekreisThe city flourished in the 13th to 16th centuries mainly due to widespread grapevine cultivation on the south-facing slopes of the Lake Constance and its salubrious climate, which gave rise to a profitable spital (hospital) industry. The Holy Ghost Spital in Überlingen held large landholdings in Upper and Lower Linzgau, and in the Hegau. The city's affluence encouraged the construction of an impressive religious building: the St Nikolaus Munster in the late 15th century;[14] a City Hall in the late 15th century;[15] and impressive residences for the family of the spital doctors.[16] The relative affluence of the city has been documented in its art and architecture, and the size and solidity of its physical plant, especially its fortifications.[17]\n",
  "url": "https://en.wikipedia.org/wiki/%C3%9Cberlingen"
}, {
  "label": "Heilbronn",
  "name": "heilbronn",
  "text": "Heilbronn (German pronunciation: [haɪlˈbʁɔn] (listen)) is a city in northern Baden-Württemberg, Germany. It is surrounded by Heilbronn County and, with approximately 123,000 residents, it is the sixth-largest city in the state.\n",
  "url": "https://en.wikipedia.org/wiki/Heilbronn"
}, {
  "label": "Schwäbisch Gmünd",
  "name": "schw%C3%A4bisch-gm%C3%BCnd",
  "text": "Schwäbisch Gmünd (German pronunciation: [ˈʃvɛːbɪʃ ˈɡmʏnt], until 1934: Gmünd) is a town in the eastern part of the German state of Baden-Württemberg. With a population of around 60,000, the town is the second largest in the Ostalb district and the whole East Württemberg region after Aalen. The town is a Große Kreisstadt since 1956, i.e. a chief town under district administration; it was the administrative capital of its own rural district until the local government reorganisation on 1 January 1973.\nThe town of Gmünd was first mentioned in an 1162 deed issued at nearby Lorch Abbey, then under the rule of the Hohenstaufen emperor Frederick Barbarossa. The self-proclaimed Stauferstadt achieved the status of an Imperial City in 1268, which it held until 1802, when it was mediatised to the Electorate of Württemberg.\n",
  "url": "https://en.wikipedia.org/wiki/Schw%C3%A4bisch_Gm%C3%BCnd"
}, {
  "label": "Memmingen",
  "name": "memmingen",
  "text": "Memmingen is a town in Swabia, Bavaria, Germany. It is the economic, educational and administrative centre of the Danube-Iller region. To the west the town is flanked by the Iller, the river that marks the Baden-Württemberg border. To the north, east and south the town is surrounded by the district of Unterallgäu (Lower Allgäu).\n",
  "url": "https://en.wikipedia.org/wiki/Memmingen"
}, {
  "label": "Lindau",
  "name": "lindau",
  "text": "Lindau (German: Lindau (Bodensee), formerly Lindau im Bodensee) is a major town and island on the eastern side of Lake Constance (Bodensee in German) in Bavaria, Germany. It is the capital of the county (Landkreis) of Lindau, Bavaria and is near the borders of the Austrian state of (Vorarlberg) and the Swiss cantons of (St. Gallen and Thurgau). The coat of arms of Lindau town is a linden tree, referring to the supposed origin of the town's name (Linde means linden tree in German). The historic town of Lindau is located on the 0.68-square-kilometre (0.26 sq mi) island of the same name which is connected with the mainland by a road bridge and a railway dam leading to Lindau station.\n",
  "url": "https://en.wikipedia.org/wiki/Lindau"
}, {
  "label": "Dinkelsbühl",
  "name": "dinkelsb%C3%BChl",
  "text": "Dinkelsbühl is a historic town in Central Franconia, a region of Germany that is now part of the state of Bavaria, in southern Germany. Dinkelsbühl is a former Free imperial city of the Holy Roman Empire. In local government terms, Dinkelsbühl lies near the western edge of the Landkreis (or local government district) of district of Ansbach, north of Aalen.\nFortified by Emperor Henry V, in 1305 Dinkelsbühl received the same municipal rights as Ulm, and in 1351 was raised to the position of a Free Imperial City. Its municipal code, the Dinkelsbühler Recht, published in 1536, and revised in 1738, contained a very extensive collection of public and private laws.[4]\n",
  "url": "https://en.wikipedia.org/wiki/Dinkelsb%C3%BChl"
}, {
  "label": "Biberach an der Riss",
  "name": "biberach-an-der-riss",
  "text": "Biberach (German pronunciation: [ˈbiːbəʁax]) is a town in the south of Germany. It is the capital of Biberach district, in the Upper Swabia region of the German state (Land) of Baden-Württemberg. To distinguish it from the other towns of the same name it is called Biberach an der Riss (German: Biberach an der Riß) after the small river Riss which flows through the city (the Riss also gave its name to the Riss glaciation period).\nFor many centuries, Biberach was an Imperial Free City (German: Freie Reichsstadt) in the Holy Roman Empire. In that role it participated in the 1792 Reichstag.\n",
  "url": "https://en.wikipedia.org/wiki/Biberach_an_der_Riss"
}, {
  "label": "Ravensburg",
  "name": "ravensburg",
  "text": "Ravensburg is a town in Upper Swabia in Southern Germany, capital of the district of Ravensburg, Baden-Württemberg.\nWith the death of Conradin 1268 in Naples the Hohenstaufen line became extinct. Their former estates became imperial property of the Holy Roman Empire. Like many other cities in Swabia, at the end of the 13th century Ravensburg became an Imperial Free City in 1276.\n",
  "url": "https://en.wikipedia.org/wiki/Ravensburg"
}, {
  "label": "Schweinfurt",
  "name": "schweinfurt",
  "text": "Schweinfurt (in German literally 'swine ford') is a city in the Lower Franconia region of Bavaria in Germany on the right bank of the navigable Main River, which is spanned by several bridges here, 27 km northeast of Würzburg.\nAround 1250 Schweinfurt was totally destroyed during a feud between the Count of Henneberg and the Prince-Bishop of Würzburg. In the following years it was reconstructed. A document from 1282 signed by Rudolf I of Habsburg states that Schweinfurt was a free city within the Holy Roman Empire. At least since then the coat of arms of Schweinfurt has been an imperial white eagle.[citation needed]\n",
  "url": "https://en.wikipedia.org/wiki/Schweinfurt"
}, {
  "label": "Free Imperial City of Kempten",
  "name": "free-imperial-city-of-kempten",
  "text": "The Free Imperial City of Kempten was a Free Imperial City in the Swabian Circle.[1]\n",
  "url": "https://en.wikipedia.org/wiki/Kempten_(Imperial_Free_City)"
}, {
  "label": "Windesheim, Germany",
  "name": "windesheim%2C-germany",
  "text": "Windesheim is a municipality in the district of Bad Kreuznach in Rhineland-Palatinate, in western Germany.\n",
  "url": "https://en.wikipedia.org/wiki/Windesheim,_Germany"
}, {
  "label": "Kaufbeuren",
  "name": "kaufbeuren",
  "text": "  Fünfknopfturm",
  "url": "https://en.wikipedia.org/wiki/Kaufbeuren"
}, {
  "label": "Weil der Stadt",
  "name": "weil-der-stadt",
  "text": "Weil der Stadt (Swabian: Weil dr Stadt) is a town of about 19,000 inhabitants, located in the Stuttgart Region of the German state of Baden-Württemberg. It is about 30 km (19 mi) west of Stuttgart city center, and is often called \"Gate to the Black Forest\". The town is located in the beautiful valley of the river Würm.\nIn 1075 A.D., the village \"Wile\" was first mentioned in a document as the property of the famous monastery Hirsau. Weil der Stadt became a Free Imperial City in the 13th century, but had existed for centuries before as an important trading place.\n",
  "url": "https://en.wikipedia.org/wiki/Weil_der_Stadt"
}, {
  "label": "Wangen im Allgäu",
  "name": "wangen-im-allg%C3%A4u",
  "text": "Wangen im Allgäu is a historic city in southeast Baden-Württemberg, Germany. It lies north-east of Lake Constance in the Westallgäu. It is the second-largest city (Population: 27,157 in 2005) in the Ravensburg district and is a nexus for the surrounding communities. From 1938 to 1972, Wangen was the county seat of the Wangen rural district.\nThe city was first mentioned in 815 under the name \"Wangun\" in a monastery document.\n",
  "url": "https://en.wikipedia.org/wiki/Wangen_im_Allg%C3%A4u"
}, {
  "label": "Isny im Allgäu",
  "name": "isny-im-allg%C3%A4u",
  "text": "Isny im Allgäu is a town in south-eastern Baden-Württemberg, Germany. It is part of the district of Ravensburg, in the western, Württembergish part of the Allgäu region.\nDuring the three centuries following its origin in 1042, it was a commercial center controlled and exploited by various competing feudal lords. In the 13th century, Isny's merchants built a fortification system to protect the town from marauders and rival feudal rulers. The town is still partially surrounded by the city walls and moat that were built during these early turbulent times.\n",
  "url": "https://en.wikipedia.org/wiki/Isny_im_Allg%C3%A4u"
}, {
  "label": "Pfullendorf",
  "name": "pfullendorf",
  "text": "Pfullendorf is a small town of about 13,000 inhabitants located 25 km (16 mi) north of Lake Constance in Baden-Württemberg, Germany. It was a Free Imperial City of the Holy Roman Empire for nearly 600 years.\n  Political map of the Linzgau, 18th century",
  "url": "https://en.wikipedia.org/wiki/Pfullendorf"
}, {
  "label": "Offenburg",
  "name": "offenburg",
  "text": "Offenburg (\"open borough\" - coat of arms showing open gates; Fr. Offenbourg) is a city located in the state of Baden-Württemberg, Germany. With about 57,000 inhabitants (2013), it is the largest city and the administrative capital of the Ortenaukreis.\nIn recent times the remainders of Roman settlements have been found within the city's territory. Offenburg was first mentioned in historical documents dating from 1148. By 1240 Offenburg had already been declared a Free Imperial City. In September 1689 the city - with the exception of two buildings - was totally destroyed during the Nine Years War by French troops. Due to Napoleon's dissolution of the Holy Roman Empire in 1803 and reorganization of the German states, in 1803 Offenburg lost its status as a Free Imperial City and fell under the rule of the Grand Duchy of Baden.\n",
  "url": "https://en.wikipedia.org/wiki/Offenburg"
}, {
  "label": "Leutkirch im Allgäu",
  "name": "leutkirch-im-allg%C3%A4u",
  "text": "Leutkirch im Allgäu is a former Free Imperial City located in south-eastern Baden-Württemberg, Germany. It is part of the district of Ravensburg, in the western Allgäu region and belongs to the administrative region (Regierungsbezirk) of Tübingen.\n",
  "url": "https://en.wikipedia.org/wiki/Leutkirch_im_Allg%C3%A4u"
}, {
  "label": "Bad Wimpfen",
  "name": "bad-wimpfen",
  "text": "Bad Wimpfen (help·info) is a historic spa town in the district of Heilbronn in the Baden-Württemberg region of southern  Germany. It lies north of the city of Heilbronn, on the river Neckar.\n  Wall drawings in the Duttenberg chapel from the 15th century show the oldest known view of Wimpfen",
  "url": "https://en.wikipedia.org/wiki/Bad_Wimpfen"
}, {
  "label": "Weißenburg in Bayern",
  "name": "wei%C3%9Fenburg-in-bayern",
  "text": "Imperial City of Weißenburg im NordgauReichsstadt Weißenburg im Nordgau1296–1803StatusFree Imperial City of the Holy Roman EmpireCapitalWeißenburg im NordgauGovernmentRepublicHistorical eraMiddle Ages• Founded before 867• Gained Reichsfreiheit 1296• Mediatised to Bavaria 1803\n\n\n\n\n Preceded by\nSucceeded by\n\n\n\n\n\n\n\n\nBishopric of Würzburg\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nElectorate of Bavaria\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
  "url": "https://en.wikipedia.org/wiki/Wei%C3%9Fenburg_im_Nordgau"
}, {
  "label": "Giengen",
  "name": "giengen",
  "text": "Giengen (full name: Giengen an der Brenz) is a former Free Imperial City in eastern Baden-Württemberg near the border with Bavaria in southern Germany. The town is located in the district of Heidenheim at the eastern edge of the Swabian Alb, about 30 kilometers northeast of Ulm on the Brenz River.\n",
  "url": "https://en.wikipedia.org/wiki/Giengen"
}, {
  "label": "Gengenbach",
  "name": "gengenbach",
  "text": "Gengenbach is a town in the district of Ortenau, Baden-Württemberg, Germany and a popular tourist destination on the western edge of the Black Forest with about 11,000 inhabitants.\nGengenbach is well known for its traditional Alemanic \"fasnacht\", (\"Fasend\"), a kind of historically influenced celebration of carnival, where tradition is followed, from wearing costumes with carved wooden masks to clapping with a \"Ratsche\" (a traditional-classic wooden \"sound-producing\" toy). Gengenbach also boasts a picturesque, traditional, medieval town centre (\"Altstadt\"). The traditional town Gengenbach is the proud owner of the world's biggest advent calendar. The 24 windows of the 18th century town hall represent the 24 \"windows\" of an Advent calendar. The town also hosts a department of The Graduate School of Offenburg University of Applied Sciences, part of the University of Applied Sciences Offenburg.\nThe nearest cities in the region are Offenburg, Freiburg, Karlsruhe, Baden-Baden and Strasbourg/France.\nGengenbach is twinned with the town of Obernai, Alsace, France.\n",
  "url": "https://en.wikipedia.org/wiki/Gengenbach"
}, {
  "label": "Zell am Harmersbach",
  "name": "zell-am-harmersbach",
  "text": "Zell am Harmersbach is a small town and a historic “Reichsstadt” in Baden-Württemberg, Germany. It lies in the Ortenaukreis, between the Black Forest and the Rhine.\nZell monastery was founded by the Counts von und zu Hohengeroldseck, to whose sovereign lands, most of the modern Ortenaukreis district of Baden-Württemberg belonged. The monastery was consecrated within the Zähringen order, with records dating back to 1139.\nIn 1289 Rudolph I, invested the monastery as an Imperial abbey and was placed within the Gengenbach order under the Diocese of Strasbourg, however ownership and the vogt remained with the Baron of Hohengeroldseck until 1636, with the death of Baron Jacob and the extinction of his line.\n",
  "url": "https://en.wikipedia.org/wiki/Zell_am_Harmersbach"
}, {
  "label": "Friedrichshafen",
  "name": "friedrichshafen",
  "text": "Friedrichshafen (German pronunciation: [fʁiːdʁiksˈhafn̩]) is an industrial city on the northern shoreline of Lake Constance (the Bodensee) in Southern Germany, near the borders of both Switzerland and Austria. It is the district capital (Kreisstadt) of the Bodensee district in the federal state of Baden-Württemberg. Friedrichshafen has a population of about 58,000.\n",
  "url": "https://en.wikipedia.org/wiki/Friedrichshafen"
}, {
  "label": "Friedrichshafen",
  "name": "friedrichshafen",
  "text": "Friedrichshafen (German pronunciation: [fʁiːdʁiksˈhafn̩]) is an industrial city on the northern shoreline of Lake Constance (the Bodensee) in Southern Germany, near the borders of both Switzerland and Austria. It is the district capital (Kreisstadt) of the Bodensee district in the federal state of Baden-Württemberg. Friedrichshafen has a population of about 58,000.\n",
  "url": "https://en.wikipedia.org/wiki/Friedrichshafen"
}, {
  "label": "Aalen",
  "name": "aalen",
  "text": "Aalen (German pronunciation: [ˈaːlən] (listen)) is a former Free Imperial City located in the eastern part of the German state of Baden-Württemberg, about 70 kilometres (43 mi) east of Stuttgart and  48 kilometres (30 mi) north of Ulm. It is the seat of the Ostalbkreis district and is its largest town. It is also the largest town in the Ostwürttemberg region. Since 1956, Aalen has had the status of Große Kreisstadt (major district town). It is noted for its many half-timbered houses constructed from the 16th century through the 18th century.[3]\nDesignation as Imperial City[edit]",
  "url": "https://en.wikipedia.org/wiki/Aalen"
}, {
  "label": "Bopfingen",
  "name": "bopfingen",
  "text": "Bopfingen is a small city in Baden-Württemberg, Germany. It is situated in the Ostalbkreis, between Aalen and Nördlingen. It consists of the city Bopfingen itself and its suburbs Aufhausen, Baldern, Flochberg, Kerkingen, Oberdorf, Schloßberg, Trochtelfingen, and Unterriffingen.\nBopfingen is famous for its landmark Ipf, a table mountain which is part of the neighboring Schwäbische Alb to the east. To the west it borders to Bavaria and the meteor crater Nördlinger Ries.\n",
  "url": "https://en.wikipedia.org/wiki/Bopfingen"
}]);

/***/ }),

/***/ "./components/list-item.js":
/*!*********************************!*\
  !*** ./components/list-item.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/zachary/Projects/dnm/nextjs/components/list-item.js";



function randomNumber(end, start) {
  return Math.floor(Math.random() * end) + (start || 0);
}

var ListItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ListItem, _Component);

  function ListItem() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(ListItem).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      color: [randomNumber(255), randomNumber(255), randomNumber(255)]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: _this.props.onClick,
        style: {
          width: '200px',
          height: '200px',
          backgroundImage: "url(/static/images/".concat(_this.props.item.name, ".jpg)"),
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          margin: '1em',
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          background: "rgba(".concat(_this.state.color.join(','), ",0.5)"),
          height: '100%',
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          textAlign: 'center',
          lineHeight: '200px',
          color: 'white',
          height: '100%',
          fontSize: '1em',
          width: '100%',
          textShadow: '0px 0px 5px rgba(0,0,0,0.75)',
          verticalAlign: 'middle'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, _this.props.item.label)));
    });

    return _this;
  }

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item */ "./components/list-item.js");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items */ "./components/items.js");
var _jsxFileName = "/Users/zachary/Projects/dnm/nextjs/components/list.js";



function List(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      flexDirection: 'row',
      display: 'flex',
      listStyleType: 'none',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, _items__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (item) {
    var updateDisplay = function updateDisplay() {
      return props.updateInfo(item);
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: updateDisplay,
      key: item.name,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var _components_display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/display */ "./components/display.js");






var _jsxFileName = "/Users/zachary/Projects/dnm/nextjs/pages/index.js";





var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Home).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      item: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateInfo", function (item) {
      _this.setState({
        item: item
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          fontFamily: 'helvetica'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Free Imperial Cities of the Holy Roman Empire"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginRight: _this.state.item ? '400px' : '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updateInfo: _this.updateInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_display__WEBPACK_IMPORTED_MODULE_8__["default"], {
        item: _this.state.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    });

    return _this;
  }

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zachary/Projects/dnm/nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map