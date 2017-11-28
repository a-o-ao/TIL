## ImageMagickインストール

```
# cd /usr/local/src
# wget http://www.imagemagick.org/download/ImageMagick.tar.gz
# mkdir -p ImageMagick && tar xzvf ImageMagick.tar.gz -C ImageMagick --strip-components 1
# cd ImageMagick
# yum install gcc  ←Cコンパイラが入っていない場合
# ./configure
# make
# make install
# sudo /sbin/ldconfig /usr/local/lib
# convert -version
```
