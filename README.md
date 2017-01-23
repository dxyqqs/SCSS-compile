# gulp-tool
### gulp前端工具

1. scss-compile
    - 编译scss代码
    - 依赖 gulp gulp-sass gulp-autoprefixer
    - 在package.json中配置scss选项，path 指出需要编译的项目名称，option 指出scss编译选项,autofixer指定css适配浏览器
    - 文件结构目录约定，在src/scss文件夹中创建自定义项目文件夹，并在项目文件夹中创建src文件夹，原则上需要编译生成的scss文件都将放置在创建的src下
    - 执行 npm run gulp scss 会编译scss文件，在项目目录中生成dist文件夹，用于保存编译后文件



