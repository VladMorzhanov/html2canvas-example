function printElement (div) {
  html2canvas(div).then(function (canvas) {
    const img = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.download = 'generated.png'
    a.href = 'data:' + img
    a.click()
    clearDynamicLink(a)
  })
}

window.onload = function () {
  const root = document.getElementById('root')
  const btnGenerate = document.getElementById('btn-generate')
  btnGenerate.onclick = function () {
    printElement(root)
  }
}
