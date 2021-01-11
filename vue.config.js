module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/privacy-policy'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
