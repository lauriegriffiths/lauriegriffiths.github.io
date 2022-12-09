---
published: false
layout: splash
title: Charts with Japanese Labels
tags: python, data science, pandas, Japanese
---

#　PandasとMatplotlibを用いた日本語ラベル付きの図の作り方

[ジュピターノートブック（英語）](/notebooks/JapaneseFontsMatplotlib.ipynb)

pandasとpythonを使って図を出すのは簡単です。でもラベルが日本語の場合、文字化けする可能性があります。

```python
planetsJapanese = pd.DataFrame({'mass': [0.330, 4.87 , 5.97],
                   'radius': [2439.7, 6051.8, 6378.1]},
                    index=['水星', '金星', '地球'])
plot = planetsJapanese.plot.pie(y='radius', figsize=(5, 5))
```

![ラベルが文字化けしてる円グラフ](/images/PlanetsPieGarbled.png)

常に日本語を使うなら日本語フォントはシステムにインストールしてある可能性が高いです。それで正しく表示することができます。下のコードがフォントをリストアップして日本語文字を表示してくれます。文字化けしていないフォントを確認してください。

```python
import matplotlib
import matplotlib.pyplot as plt

fonts = set([f.name for f in matplotlib.font_manager.fontManager.ttflist])
 
plt.figure(figsize=(10,len(fonts)/4))
 
for i, font in enumerate(fonts):
    try:
        plt.text(0, i, f"漢字　ひらがな　カタカナ：{font}", fontname=font)
    except:
        print(font)
    
plt.ylim(0, len(fonts))
plt.axis("off")
    
plt.show()
```

![フォントリスト](/images/FontListMojibake.png)

フォントを選択して`fontfamily`として渡すと、文字化けしていない図を作ることができます。

```python
import matplotlib.pyplot as plt

plt.figure(facecolor='white',figsize=(6,6))
plt.pie(planetsJapanese['radius'],
        labels=planetsJapanese.index,

        textprops={'fontfamily':'Noto Sans JP','fontsize': 12})
```

![文字化けしていない円グラフ](/images/PlanetsPieCorrect.png)