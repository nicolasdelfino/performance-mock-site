const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cleanCSS = require("gulp-clean-css");
const del = require("del");

gulp.task("slow", () => {
  return gulp
    .src("styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css/all"));
});

gulp.task("medium", () => {
  return gulp
    .src("styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss())
    .pipe(gulp.dest("./public/css/optimized"));
});

gulp.task("fast", () => {
  return gulp
    .src("styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(postcss())
    .pipe(gulp.dest("./public/css/optimized"));
});

gulp.task("clean", () => {
  return del(["public/css/all"], ["public/css/optimized"]);
});

gulp.task("clean", gulp.series(["clean"]));
gulp.task("slow", gulp.series(["slow"]));
gulp.task("medium", gulp.series(["medium"]));
gulp.task("fast", gulp.series(["fast"]));

