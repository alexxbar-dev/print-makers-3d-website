module.exports = function(eleventyConfig) {

  // Defines las carpetas que se copian tal cual al sitio de salida, esto no lo hace eleventy por defecto
  eleventyConfig.addPassthroughCopy({"src/styles" : "styles"});     // Copia estilos
  eleventyConfig.addPassthroughCopy({"src/assets" : "assets"});  // Copia imágenes
  eleventyConfig.addPassthroughCopy({"src/js" : "js"});   // copia scripts

  return {
    dir: {
      input: "src/pages",               // Carpeta raíz del proyecto fuente, apunta a las paginas del proyecto
      includes: "../_includes",      // Auqui indicas donde estan los includes y este es relativo a input
      layouts: "../_includes/layouts", // Aqui indicas donde estan los layouts y este es relativo a input
      data: "../_data",           // Aqui indicas donde estan los datos y este es relativo a input
      output: "_site"             // Carpeta de salida (en la raíz del proyecto)
    }
  };
};