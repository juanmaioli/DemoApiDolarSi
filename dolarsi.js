obtenerDolar()
async function obtenerDolar(){
  const $ = selector => document.querySelector(selector)
  const valorCompraOficial = $('#valorCompraOficial')
  const valorVentaOficial = $('#valorVentaOficial')
  const valorCompraBlue = $('#valorCompraBlue')
  const valorVentaBlue = $('#valorVentaBlue ')
  const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
  const response = await fetch(url)
  const dolar = await response.json()
  const variacionOficial = parseFloat(dolar[0].casa.variacion.replace(',','.')).toFixed(2)
  const variacionBlue = parseFloat(dolar[1].casa.variacion.replace(',','.')).toFixed(2)

  valorCompraOficial.innerHTML = 'Dolar Oficial Compra $' + dolar[0].casa.compra
  valorVentaOficial.innerHTML = '<br>Dolar Oficial Venta $' + dolar[0].casa.venta + '<br>Variacion: '  + variacionOficial
  valorCompraBlue.innerHTML = 'Dolar Blue Compra $' + dolar[1].casa.compra
  valorVentaBlue.innerHTML = '<br>Dolar Blue Venta$' + dolar[1].casa.venta + '<br>Variacion: '  + variacionBlue
}