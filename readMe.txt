Ofcoure I don't have to tell you that, you have to have "nodeJs" installed on your windows machine.....Otherwise the following instructions won't work....!!!...

1. create a project folder
2. inside that folder, open cmd
3. run, <npm init>
4. run, <npm install --save-dev browser-sync gulp gulp-autoprefixer gulp-sass>
5. include the "gulpfile.js" on your present project folder
6. create folders and name them as "css", "scss" on your present project folder
7. create "index.html" and include the following line on your "index.html" file:
    <link rel="stylesheet" href="./css/main.css">
8. create "main.scss" file on the "scss" folder
9. create other "partial files" if needed and import them on "main.scss" file (also, create other necessary files and folders as needed for you)
10. don't create "main.css" file manually (because, you don't need to) on "css" folder.....it will be created automatically after running and writing "scss" code on "scss" files
11. close previously opened "cmd" prompts and open it again on the present project folder
12. run <gulp>
13. write scss code and html code on your own and enjoy "scss auto compilation" + "autoprefixer inclusion" + "browser live reload".....
