// var less = require('gulp-less');
// var path = require('path');

// gulp.task('less', function () {
//   return gulp.src('./less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes' )]
//     }))
//     .pipe(gulp.dest('./css'));
// });

// ------------------------------------------------------------

// "use strict";

// var gulp = require("gulp");
// var less = require("gulp-less");
// var plumber = require("gulp-plumber");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var serverr = require("browser-sync").create();

// gulp.task("style", async function() {
//     gulp.src("./less/style.less")
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(postcss([
//         autoprefixer()
//     ]))
//     .pipe(gulp.dest("css"))
//     .pipe(server.stream())
// });

// gulp.task("serve", gulp.parallel("style"), function() {
//     serverr.init({
//         // server: "./",
//         // notify: false,
//         // open: true,
//         // cors: true,
//         // ui: false

//         server: {
//             baseDir: "../BarbershopAll/"
//         }
//     });

    

//     gulp.watch("./less/**/*.less", "style")
//     gulp.watch("./*.html").on("change", serverr.reload)
// });

// ----------------------------------------------------------



const gulp = require('gulp');
const less = require('gulp-less'); // Преобразует less в css
const del = require('del'); // Удаляет файлы
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css'); // Минифицирует CSS

// Используется для преодбразования js 
// в универсальный js для старых версий браузеров
const babel = require('gulp-babel');

const uglify = require('gulp-uglify'); // Минифицирует JS
const concat = require('gulp-concat'); // Для объединения нескольких файлов в один


// Пути к файлам откуда и куда
const paths = {
    styles: {
        src: './less/**/*.less',
        dest: './css'
    },

    scripts: {
        src: './js/**/*.js',
        dest: './js-min'
    }
}

function clean() {
    return del(['./css/style.min.css']) // Не работает :(
}

// Функция для преобразования less в css
function styles() {
    return gulp.src(paths.styles.src)
     .pipe(less())
     .pipe(cleanCSS()) // Оптимизирует и минифицирует код
     .pipe(rename({     // переименовывает файл и добавляет ему суффикс
        basename: 'style',
        suffix: '.min'
     }))

     .pipe(gulp.dest(paths.styles.dest))
}

// Функция для преобразования js
function scripts() {
    return gulp.src(paths.scripts.src, {
        sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.min.js')) // Объединяем все файлы в один с указанным названием

    .pipe(gulp.dest(paths.scripts.dest))
}


// Функция отслеживания действий
function watch() {
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
}

const build = gulp.series(gulp.parallel(styles, scripts), watch);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build; // Вызыввет build по одной команде gulp
