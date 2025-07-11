## ImageMagickインストール

必要なライブラリをインストールする
```
# yum install gcc
# yum install libjpeg-devel
# yum install libpng-devel
# yum install libtool-ltdl-devel
```


```
# cd /usr/local/src
# wget http://www.imagemagick.org/download/ImageMagick.tar.gz
# mkdir -p ImageMagick
# tar xzvf ImageMagick.tar.gz -C ImageMagick --strip-components 1
# cd ImageMagick
# ./configure --with-png=yes --with-jpeg=yes --with-modules

--with-png=yes    yes
--with-jpeg=yes   yes
となっていることを確認。

# make
# make install
# sudo /sbin/ldconfig /usr/local/lib
# convert -version
```
