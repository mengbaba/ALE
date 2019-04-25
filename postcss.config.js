//autoprefixer 自动添加游览器前缀
module.exports = {
  plugins: {
    "autoprefixer": {
      browsers: ["> 1%",
        "last 7 versions",
        "not ie <= 8",
        "ios >= 8",
        "android >= 4.0"
      ]
    }
  }
}
