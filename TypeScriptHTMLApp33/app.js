var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.print = function () {
        document.write("First Name:  " + this.firstname + " <br/> Last Name: " + this.lastname + " <br/>");
    };
    return Person;
}());
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(myfirstname, mylastname, licenseNo, seniority) {
        var _this = _super.call(this, myfirstname, mylastname) || this;
        _this.licenseNO = licenseNo;
        _this.seniority = seniority;
        return _this;
    }
    Object.defineProperty(Pilot.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (sen) {
            this._seniority = sen > 0 ? sen : 0;
        },
        enumerable: true,
        configurable: true
    });
    Pilot.prototype.print = function () {
        document.write("Pilot Details: <br/>");
        _super.prototype.print.call(this);
        document.write("License No. : " + this.licenseNO + " <br/> Pilot Seniority: " + this.seniority + " years <br/><br/>");
    };
    return Pilot;
}(Person));
var AirSteward = /** @class */ (function (_super) {
    __extends(AirSteward, _super);
    function AirSteward(firstname, lastname, seniority, countryoforigin, myclass) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.seniority = seniority;
        _this.countryOfOrigin = countryoforigin;
        _this.class = myclass;
        return _this;
    }
    Object.defineProperty(AirSteward.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (sen) {
            this._seniority = sen > 0 ? sen : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirSteward.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (myclass) {
            if (myclass != "first class" && myclass != "business class" && myclass != "economy class")
                this._class = "economy class";
            else
                this._class = myclass;
        },
        enumerable: true,
        configurable: true
    });
    AirSteward.prototype.print = function () {
        document.write("AirSteward Details: <br/>");
        _super.prototype.print.call(this);
        document.write("Seniority: " + this.seniority + " <br/> Country Of Origin: " + this.countryOfOrigin + " <br/> Class: " + this.class + " <br/><br/>");
    };
    return AirSteward;
}(Person));
var GroundSteward = /** @class */ (function (_super) {
    __extends(GroundSteward, _super);
    function GroundSteward(firstname, lastname, seniority, countryoforigin, groundjob) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.seniority = seniority;
        _this.countryOfOrigin = countryoforigin;
        _this.groundJob = groundjob;
        return _this;
    }
    Object.defineProperty(GroundSteward.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (sen) {
            this._seniority = sen > 0 ? sen : 0;
        },
        enumerable: true,
        configurable: true
    });
    GroundSteward.prototype.print = function () {
        document.write("GroundSteward Details: <br/>");
        _super.prototype.print.call(this);
        document.write("Seniority: " + this.seniority + " <br/> Country Of Origin: " + this.countryOfOrigin + " <br/> Ground Job: " + this.groundJob + "<br/><br/>");
    };
    return GroundSteward;
}(Person));
var Passenger = /** @class */ (function (_super) {
    __extends(Passenger, _super);
    function Passenger(firstname, lastname, passportno) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.passportNo = passportno;
        return _this;
    }
    Passenger.prototype.print = function () {
        document.write("Passenger Details: <br/>");
        _super.prototype.print.call(this);
        document.write("Passport No. : " + this.passportNo + " <br/>,<br/>");
    };
    return Passenger;
}(Person));
var pilot1 = new Pilot("Jo", "allen", "518890775", 3);
pilot1.print();
var airSteward1 = new AirSteward("Bob", "Dillen", 5, "USA", "first class");
airSteward1.print();
var groundSteward1 = new GroundSteward("Sam", "Finegold", 7, "Russia", "Luggage transport");
groundSteward1.print();
var passenger1 = new Passenger("Alice", "Monroe", "759911209");
passenger1.print();
//# sourceMappingURL=app.js.map