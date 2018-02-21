# Consideraciones
  Solamente hice uso de boostrap para poder darle un diseño mas refinado y que al mismo tiempo sea responsive para mobile.
  El cacheo de las imagenes ya lo hace el browser internamente al pasarle en el src la url de la imagen como viene del json de respuesta el browser tiene un sistema de cacheo interno.
  La logica del servicio esta hecha para que se pueda acceder directamente a la url /search sin necesidad de ir al home y que este la data disponible, es por eso que estan hechas las funciones de esa forma y admiten tanto para el search como para obtener la data de un personaje un callback para poder hacer el ErrorHandling y manejar la data en el componente ya que el subscribe es asyncrono y no puede retornar luego de hacer un fetch de la data si es que no se tiene.
