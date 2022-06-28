module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/privacy-policy',
        '/links',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
