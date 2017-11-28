## ImageMagickインストール

```
ls /usr/lib64 | grep libpng
ls /usr/lib64 | grep libjpeg

それぞれ存在することを確認
```


```
# cd /usr/local/src
# wget http://www.imagemagick.org/download/ImageMagick.tar.gz
# mkdir -p ImageMagick
# tar xzvf ImageMagick.tar.gz -C ImageMagick --strip-components 1
# cd ImageMagick
# yum install gcc  ←Cコンパイラが入っていない場合
# ./configure --enable-shared=yes --x-libraries=/usr/lib64
# make
# make install
# sudo /sbin/ldconfig /usr/local/lib
# convert -version
```
