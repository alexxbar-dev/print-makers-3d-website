const Image = require("@11ty/eleventy-img");
const path = require("path");
module.exports = function(eleventyConfig) {

  // Defines las carpetas que se copian tal cual al sitio de salida, esto no lo hace eleventy por defecto
  eleventyConfig.addPassthroughCopy({"src/styles" : "styles"});     // Copia estilos
  eleventyConfig.addPassthroughCopy({"src/assets" : "assets"});  // Copia imágenes
  eleventyConfig.addPassthroughCopy({"src/js" : "js"});   // Copia scripts

  // Detecta el entorno de desarrollo o producción
  const isProduction = process.env.NODE_ENV === "production";

  // SHORTCODE: {% image "ruta", "alt", "sizes", [anchos], prioridad(boolean) %}
  eleventyConfig.addShortcode("image", async function(src, alt, sizes, widths = [300, 600, 1200], priority = false) {
    
    // 1. Configuración del procesamiento de archivos
    let metadata = await Image(src, {
      widths: widths,
      formats: ["webp"], // AVIF primero por ser más ligero
      outputDir: "./_site/img/", 
      urlPath: isProduction ? "/print-makers-3d-website/img/" : "/img/",

      sharpWebpOptions: { quality: 80, effort: 4, smartSubsample: true },
      // sharpAvifOptions: { quality: 62, effort: 4 },
      // Genera nombres claros: nombre-ancho.formato
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      }
    });

    // 2. Configuración de atributos del HTML
    let imageAttributes = {
      alt,
      sizes,
      // Si priority es true (Hero), carga inmediatamente. Si no, espera al scroll.
      loading: priority ? "eager" : "lazy",
      // Indica al navegador que procese esta imagen antes que otros recursos si es prioridad
      fetchpriority: priority ? "high" : "auto",
      decoding: "async"
    };

    // 3. Devuelve el HTML
    return Image.generateHTML(metadata, imageAttributes);
  });

  return {
    // En base a la variable de entorno NODE_ENV se define el pathPrefix para que el filtro url aplique la ruta raíz correcta, dependiendo de si estamos en producción o en desarrollo
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