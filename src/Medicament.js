export class Medicament {
  constructor(id, qte, denomination, formepharmaceutique, photo = null) {
    this.id = id;
    this._qte = qte;
    this._denomination = denomination;
    this._formepharmaceutique = formepharmaceutique;
    this._photo = photo;
  }

  // ---- Getters
  get qte() {
    return this._qte;
  }
  get denomination() {
    return this._denomination;
  }
  get formepharmaceutique() {
    return this._formepharmaceutique;
  }
  get photo() {
    return this._photo;
  }

  // ---- Setters
  set qte(value) {
    this._qte = value;
  }
  set denomination(value) {
    this._denomination = value;
  }
  set formepharmaceutique(value) {
    this._formepharmaceutique = value;
  }
  set photo(value) {
    this._photo = value;
  }
}
