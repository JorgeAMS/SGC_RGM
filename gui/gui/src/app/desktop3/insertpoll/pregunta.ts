export class Pregunta {
  public tpregunta: string;
  public pregunta: string;
  public r1: string;
  public r2: string;
  public r3: string;
  public r4: string;
  public r5: string;
  public nrespuesta: string;
  constructor() {
  }

  setTPregunta(data) {
    this.tpregunta = data;
  }
  setPregunta(data) {
    this.pregunta = data;
  }
  setR1(data) {
    this.r1 = data;
  }
  setR2(data) {
    this.r2 = data;
  }
  setR3(data) {
    this.r3 = data;
  }
  setR4(data) {
    this.r4 = data;
  }
  setR5(data) {
    this.r5 = data;
  }
  setnrespuesta(data) {
    this.nrespuesta = data;
  }
}
