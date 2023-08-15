export default defineNuxtConfig({
  css: ["/assets/styles/main.scss"], // add
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: { 
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },       
      ],
    },
  },
  render: {
    bundleRenderer: {
      directives: {
        cww: function (vnode, dir) {
          const style = vnode.data.style || (vnode.data.style = {})
          style.backgroundColor = '#ff0016'
        }
      }
    }
  }
});