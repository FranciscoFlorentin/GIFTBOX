const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('GiftboxTesting', function() {
  this.timeout(300000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Chequeo de campos vacios', async function() {

     // Logeo de usuario. Con nombre de cuenta y contraseña.
    
     await driver.get("http://localhost:3000")
     await driver.findElement(By.css("#headerContainer > div.headerUser.centerVerticalColumn > div.headerUserBottom.spaceBetween > a > div > p")).click()
     await driver.findElement(By.css("#root > div > div.editUsuario > div.modificarEmailUsuario > input[type=text]:nth-child(2)")).sendKeys("lucio_benedettelli@gmail.com")
     await driver.sleep(15000)
     await driver.findElement(By.css("#root > div > div.editUsuario > div.modificarEmailUsuario > input[type=texto]:nth-child(3)")).sendKeys("sw2032")
     await driver.sleep(15000)
     await driver.findElement(By.css("#root > div > div.editUsuario > div.guardaCambioContraseña")).click()
     await driver.sleep(15000)
     await driver.findElement(By.css("#headerContainer > div.headerUser.centerVerticalColumn > div.headerUserBottom.spaceBetween > a > div > div > div > div > div > p")).click()
     await driver.sleep(15000)
     //Primer prueba: Chequear si se puede llenar el formulario con campos vacios
     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > div > p")).click()
     await driver.sleep(15000)
     assert(await driver.findElement(By.css(".errores > h2")).getText() == "¡Todos los campos son requeridos!")
     
    })


    it('Testeo si las passwords coinciden', async function() {
      await driver.get("http://localhost:3000")
      await driver.findElement(By.css("#headerContainer > div.headerUser.centerVerticalColumn > div.headerUserBottom.spaceBetween > a > div > p")).click()
      await driver.findElement(By.css("#root > div > div.editUsuario > div.modificarEmailUsuario > input[type=text]:nth-child(2)")).sendKeys("lucio_benedettelli@gmail.com")
      await driver.sleep(15000)
      await driver.findElement(By.css("#root > div > div.editUsuario > div.modificarEmailUsuario > input[type=texto]:nth-child(3)")).sendKeys("sw2032")
      await driver.sleep(15000)
      await driver.findElement(By.css("#root > div > div.editUsuario > div.guardaCambioContraseña")).click()
      await driver.sleep(15000)
      await driver.findElement(By.css("#headerContainer > div.headerUser.centerVerticalColumn > div.headerUserBottom.spaceBetween > a > div > div > div > div > div > p")).click()
      await driver.sleep(15000) 

     // Segunda prueba: Chequear si la contraseña actual con la verificadora coinciden o no.
 
     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > form > input[type=texto]:nth-child(1)")).sendKeys("sw2032")
     await driver.sleep(15000)
     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > form > input[type=texto]:nth-child(2)")).sendKeys("bootcamp")
     await driver.sleep(15000)
     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > form > div > input[type=texto]")).sendKeys("star")
     await driver.sleep(15000)
     assert(await driver.findElement(By.css(".errores > h2")).getText() == "¡Las contraseñas no coinciden!")
     
    })

    

    it('Testeo si todo esta OK', async function() {
      await driver.get("http://localhost:3000")
      await driver.findElement(By.css("#headerContainer > div.headerUser.centerVerticalColumn > div.headerUserBottom.spaceBetween > a > div > p")).click()
      await driver.findElement(By.css("#root > div > div.editUsuario > div.modificarEmailUsuario > input[type=text]:nth-child(2)")).sendKeys("lucio_benedettelli@gmail.com")
      await driver.sleep(15000)
      await driver.findElement(By.css("#root > div > div.editUsuario > div.modificarEmailUsuario > input[type=texto]:nth-child(3)")).sendKeys("sw2032")
      await driver.sleep(15000)
      await driver.findElement(By.css("#root > div > div.editUsuario > div.guardaCambioContraseña")).click()
      await driver.sleep(15000)
      await driver.findElement(By.css("#headerContainer > div.headerUser.centerVerticalColumn > div.headerUserBottom.spaceBetween > a > div > div > div > div > div > p")).click()
      await driver.sleep(15000) 
  
     // Tercera prueba: Si se completan todos los campos. Y la contraseña actual con la verificadora coincide, 
     //se puede cambiar la contraseña..

    
 
     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > form > input[type=texto]:nth-child(1)")).sendKeys("sw2032")
     await driver.sleep(15000)
 
     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > form > input[type=texto]:nth-child(2)")).sendKeys("sw2032")
     await driver.sleep(15000)

     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > form > div > input[type=texto]")).sendKeys("sw2033")
     await driver.sleep(15000)
 
     await driver.findElement(By.css("#root > div > div:nth-child(2) > div:nth-child(2) > div > p")).click()
     await driver.sleep(15000)
    
     assert(await driver.findElement(By.css(".errores > h2")).getText() == "¡Se han guardado los cambios de manera exitosa!")

    })
    
   

  
})