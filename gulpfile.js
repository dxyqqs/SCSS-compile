var gulp = require('gulp');
//获取scss配置
var scss_conf = require('./package.json').scss; 
//处理SCSS
var SCSS = {
    compile:require('gulp-sass'),
    prefixer:require("gulp-autoprefixer"),
    //需要编译的文件夹
    path:scss_conf.path,
    //sass编译选项
    //"outputStyle":nested 原始嵌套结构 | expanded 标准结构 | compact 横向结构 | compressed 压缩
    option:scss_conf.option,
    exec:()=>gulp.src(["./src/scss/"+SCSS.path+"/src/**/*.scss"])
                 .pipe(SCSS.compile(SCSS.option).on('error',SCSS.compile.logError))
                 .pipe(SCSS.prefixer({browsers: ['> 5%', 'IE 9'],cascade: true}))
                 .pipe(gulp.dest("./src/scss/"+SCSS.path+"/dist"))
};
gulp.task('scss',function(){
    SCSS.exec();
});
gulp.task("default",function(){
    console.log(arguments);
    console.log('   npm run gulp [task name]');
    console.log('   scss:编译scss文件');
})