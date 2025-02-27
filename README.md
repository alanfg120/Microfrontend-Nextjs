# Ejecutar el Microfrontend

Para ejecutar el microfrontend, sigue estos pasos:

1. Navega al directorio del microfrontend:
    ```bash
    cd mf1
    ```
2. Instala las dependencias:
     ```bash
     npm install
     ```

3. Inicia la aplicación:
    ```bash
    npm run dev
    ```

# Ejecutar el Host

Para ejecutar el host, sigue estos pasos:

1. Navega al directorio del host:
    ```bash
    cd host
    ```

2. Instala las dependencias:
     ```bash
     npm install
     ```

3. Inicia la aplicación:
    ```bash
    npm run dev
    ```

# Consideraciones 

- Asegúrate de tener Node.js instalado en tu máquina.
- Verifica que las dependencias estén correctamente instaladas ejecutando `npm install`.
- Si encuentras algún problema, revisa los logs de la consola para obtener más información.
- Consulta la documentación oficial para más detalles sobre la configuración y uso.


# Manejo de microfrontend en Next Js

los microfronted en Next js se realiza mediante el plugin oficial de Module Federation para Next js,este modulo permite aislar paginas,o componentes de otra Proyecto, pero un Host debe cargar esos modulos remotos, la compatiblidad es unica entre proyectos de Next js ya que ellos exponen componentes de React y pues solo Un proyecto de React los puede compilar (a menos que los componentes de React se convierta en Web Component)

# Observaciones 

- Solo se puede implementar el plugin en js no es compatible Typescript
- solo para renderizado de paginas con "pages" no soporta app routing (Server Components)
- el HotReload en ocaciones falla al actualizar el Microfrontend no se visualiza el cambio inmediato en el host

si el enfoque es SSR y SSG con Seo dependencia esta opcion de manejo de microfronted pero limita al solo el uso de React y Nextjs

# Documentación

[Documentación oficial de Module Federation para Next.js](https://module-federation.io/practice/frameworks/next/index.html)
