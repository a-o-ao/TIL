## ImageMagickインストール

libjpeg-devlel, libpng-devlelをインストールする
```
yum install libjpeg-devlel
yum install libpng-devlel
```


```
# cd /usr/local/src
# wget http://www.imagemagick.org/download/ImageMagick.tar.gz
# mkdir -p ImageMagick
# tar xzvf ImageMagick.tar.gz -C ImageMagick --strip-components 1
# cd ImageMagick
# yum install gcc  ←Cコンパイラが入っていない場合
# ./configure --with-png=yes --with-jpeg=yes

--with-png=yes    yes
--with-jpeg=yes   yes
となっていることを確認。

# make
# make install
# sudo /sbin/ldconfig /usr/local/lib
# convert -version
```
