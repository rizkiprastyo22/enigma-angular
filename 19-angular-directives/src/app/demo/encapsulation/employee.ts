export class Employee{
    private _fullName!: string; // ! dipakai sebagai inisializer agar data tidak null
    private _address!: string; // ! dipakai sebagai inisializer agar data tidak null

    get fullName(): string { return this._fullName; }
    set fullName(fullName: string) { this._fullName = fullName; }

    get address(): string { return this._address; }
    set address(address: string) { this._address = address; }

    toString(): string {
        return 'nama saya ' + this._fullName + ' tinggal di ' + this._address;
    }
}