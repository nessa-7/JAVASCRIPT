export default class Alcancia {
  constructor() {
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
  }

  agregarMoneda(denominacion) {
    switch (denominacion) {
      case 200:
        this.monedas200++;
        break;
      case 500:
        this.monedas500++;
        break;
      case 1000:
        this.monedas1000++;
        break;
      default:
        console.log('Denominación inválida, solo se aceptan 200, 500 y 1000');
    }
  }


  contarMonedas() {
    return {
      monedas200: this.monedas200,
      monedas500: this.monedas500,
      monedas1000: this.monedas1000
    };
  }

  calcularTotal() {
    return (this.monedas200 * 200) + (this.monedas500 * 500) + (this.monedas1000 * 1000);
  }

  romper() {
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
  }

  nueva() {
    this.romper();
  }
}
