
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      base:'/',
      dll: false,
      pwa: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
        ],
      },

      hardSource: false,

    }],

  ],
  // theme: {
  //   "primary-color": "#1DA57A",
  // }
}
