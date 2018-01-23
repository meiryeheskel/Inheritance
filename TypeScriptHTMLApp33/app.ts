

class Person {
    public firstname: string;
    public lastname: string;

    constructor(firstname:string,lastname:string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    print(): void {
        document.write(`First Name:  ${this.firstname} <br/> Last Name: ${this.lastname} <br/>`);
    }
}

class Pilot extends Person {
    public licenseNO: string;
    private _seniority: number;

    constructor(myfirstname:string, mylastname:string,licenseNo:string,seniority:number) {
        super(myfirstname, mylastname);
        this.licenseNO = licenseNo;
        this.seniority = seniority;
    }

    set seniority(sen) {
        this._seniority=sen>0?sen:0
    }
    get seniority() {
        return this._seniority;
    }

    print(): void {
        document.write("Pilot Details: <br/>");
        super.print();
        document.write(`License No. : ${this.licenseNO} <br/> Pilot Seniority: ${this.seniority} years <br/><br/>`);
    }
}

class AirSteward extends Person {
    private _seniority: number;
    public countryOfOrigin: string;
    public class: string;

    constructor(firstname: string, lastname: string, seniority: number, countryoforigin: string,myclass: string) {
        super(firstname, lastname);
        this.seniority = seniority;
        this.countryOfOrigin = countryoforigin;
        this.class = myclass;
    }
    set seniority(sen) {
        this._seniority = sen > 0 ? sen : 0;
    }

    get seniority() {
        return this._seniority;
    }

    print(): void {
        document.write("AirSteward Details: <br/>");
        super.print();
        document.write(`Seniority: ${this.seniority} <br/> Country Of Origin: ${this.countryOfOrigin} <br/> Class: ${this.class} <br/><br/>`);
    }
}

class GroundSteward extends Person {
    private _seniority: number;
    public countryOfOrigin: string;
    public groundJob: string;

    constructor(firstname: string, lastname: string, seniority: number, countryoforigin: string, groundjob: string) {
        super(firstname, lastname);
        this.seniority = seniority;
        this.countryOfOrigin = countryoforigin;
        this.groundJob = groundjob;

    }

    set seniority(sen) {
        this._seniority = sen > 0 ? sen : 0;
    }

    get seniority() {
        return this._seniority;
    }
    print(): void {
        document.write("GroundSteward Details: <br/>");
        super.print();
        document.write(`Seniority: ${this.seniority} <br/> Country Of Origin: ${this.countryOfOrigin} <br/> Ground Job: ${this.groundJob}<br/><br/>`);

    }
}

class Passenger extends Person {
    public passportNo: string;

    constructor(firstname: string, lastname: string, passportno: string) {
        super(firstname, lastname);
        this.passportNo = passportno;

    }
    print(): void {
        document.write("Passenger Details: <br/>");
        super.print();
        document.write(`Passport No. : ${this.passportNo} <br/>,<br/>`);

    }

}


let pilot1: Pilot = new Pilot("Jo","allen","518890775",3);
pilot1.print();

let airSteward1: AirSteward = new AirSteward("Bob", "Dillen", 5, "USA", "first class");
airSteward1.print();

let groundSteward1: GroundSteward = new GroundSteward("Sam", "Finegold", 7, "Russia", "Luggage transport");
groundSteward1.print();

let passenger1: Passenger = new Passenger("Alice", "Monroe", "759911209");
passenger1.print();



