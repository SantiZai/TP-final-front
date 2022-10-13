const categorias = document.querySelector('.categoria');
const opcion1 = document.querySelector('.opcion1').value;
const opcion2 = document.querySelector('.opcion2').value;
const opcion3 = document.querySelector('.opcion3').value;
const btnResumen = document.querySelector('.resumen');
const inputEntradas = document.querySelector('.cantidad');
const totalCompra = document.querySelector('.total-compra');
const btnBorrar = document.getElementById('borrar');

btnResumen.addEventListener('click', (e) => {
  e.preventDefault();
  const cantidad = parseInt(inputEntradas.value);
  let precioFinal;
  if (!cantidad == '') {
    switch (categorias.value) {
      case opcion1:
        precioFinal = (cantidad * 200 * 20) / 100;
        break;
      case opcion2:
        precioFinal = (cantidad * 200 * 50) / 100;
        break;
      case opcion3:
        precioFinal = (cantidad * 200 * 85) / 100;
        break;
    }
    totalCompra.placeholder = 'Total a Pagar: $';
    totalCompra.placeholder += precioFinal;
  }
});

btnBorrar.addEventListener('click', () => {
  totalCompra.placeholder = 'Total a Pagar: $';
});
