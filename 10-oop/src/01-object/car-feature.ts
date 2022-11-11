// interface untuk inisialisasi method apa saja yang diperlukan
// interface bisa diibaratkan kontrak kayak apa saja method yang dibutuhkan pada object

export interface CarFeature{
    safety(feature: string[]): void;
    speed(km: number): void;
}

export interface CarSpec{
    engineType(): string;
    engineSpec(): string;
    fuelType(): string;
}