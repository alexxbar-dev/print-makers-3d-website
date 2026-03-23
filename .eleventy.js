module.exports = function(eleventyConfig) {

  // Defines las carpetas que se copian tal cual al sitio de salida, esto no lo hace eleventy por defecto
  eleventyConfig.addPassthroughCopy({"src/styles" : "styles"});     // Copia estilos
  eleventyConfig.addPassthroughCopy({"src/assets" : "assets"});  // Copia imágenes
  eleventyConfig.addPassthroughCopy({"src/js" : "js"});   // Copia scripts

  // Detecta el entorno de desarrollo o producción
  const isProduction = process.env.NODE_ENV === "production";

  return {
    // En base a la variable de entorno ELEVENTY_ENV se define el pathPrefix para que el filtro url aplique la ruta raíz correcta, dependiendo de si estamos en producción o en desarrollo
    pathPrefix: isProduction ? "/print-makers-3d-website/" : "/",
    dir: {
      input: "src/pages",  // Carpeta raíz del proyecto fuente, apunta a las paginas del proyecto
      includes: "../_includes", // Aqui indicas donde estan los includes y este es relativo al input
      layouts: "../_includes/layouts", // Aqui indicas donde estan los layouts y este es relativo a input
      data: "../_data",  // Aqui indicas donde estan los datos y este es relativo a input
      output: "_site"    // Carpeta de salida (en la raíz del proyecto)
    }
  };
};