# biano
```
键盘按键钢琴，监听按键发出声音，可以后台运行
keyboard piano, listen key press to play sound, can run background

1, 运行按键模式:
运行简单按键模式:
python -m biano.keys
运行复杂按键模式：（建议先看下hard.js配置，在biano模块文件夹/res目录下）:
python -m biano.keys hard.js
运行自定义按键:
python -m biano.keys 按键配置文件.js
程序运行结束自动记录弹奏到当前文件夹下，可以进行重放(如果不打算记录和保存，在biano模块文件夹/res/conf.js里把save_records改成false)

2, 运行演奏乐谱：
演奏默认乐谱:
python -m biano.play
演奏配置乐谱
python -m biano.play 乐谱配置文件.js

3, 重放记录:
python -m biano.replay 记录文件路径

4，主体:
默认(按键模式，默认hard.js)
python -m biano
自定义运行模式(参考biano模块文件夹/res/default_env.js编写)：
python -m biano 配置文件.js

程序可以多开，可以开一个play当背景音，再开一个keyboard

PS: 一些配置一直用的固定值，没用试过其他值，修改后可能有问题

按键对应音符:
keys to musical note:

左手(left hand):
 q  w  e  r  t 
 1 #1  2 #2  3
 a  s  d  f
 4 #4  5 #5
 z  x  c
 6 #6  7

右手(right hand):
 y  u  i  o  p
 1 #1  2 #2  3
 h  j  k  l
 4 #4  5 #5
 n  m  ,
 6 #6  7

数字键1,2,3,4,5修改左手基准音调
数字键6,7,8,9,0修改右手基准音调

number keys 1,2,3,4,5 modify base tone of left hand
number keys 6,7,8,9,0 modify base tone of right hand

按键-和=修改数字键音调偏移
keys - and = modify number key tone offset

v0.2.2:
加缓存，原本创建多个声音对象改成使用一个声音对象，用缓存方式进行读写，减少杂音，但会增加延迟
音色有待调整

v0.2.3:
加配置，按键和音调可配置，运行
python -m biano 配置文件.js
配置文件会先从当前目录找（或者输入的是绝对路径，找的就是绝对路径下的文件），找不到会从biano模块文件夹/res目录下找
配置见: biano模块文件夹/res/conf.js(默认配置文件)
程序会先读取默认配置文件，再读取命令行指令配置文件进行更新
噪声有待处理

v0.2.4:
加乐谱演奏模式
python -m biano.play 配置文件.js
噪音有待处理

v0.2.41:
用buildz进行ioc和配置（好处是配置文件用起来方便了，代价是启动变慢）
声波做smooth来去噪，此外加了泛音，感觉噪声少了
音色可配置

v0.3.1:
修改一些配置
提高声音源衰减幅度
```
