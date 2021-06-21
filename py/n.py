from glob import glob
import pandas as pd
import numpy as np
import math
import sys

fout = "js/n.js"
f = open(fout, "w")

def write(fin, distt, fac):
    df = pd.read_csv(fin)
    arr = df.T.to_numpy()
    prev = ""
    t = 1
    count = 1

    for r in range (1, np.size(arr, 0)):
        for c in range (0, np.size(arr, 1)):
            x = math.floor(arr[r][c]/fac)
            if c == 0:
                f.write("\nvar " + distt + "_" + str(df.columns[r]) + " = [")
                t = 0
            elif c == 1:
                f.write("\"" + str(x) + "\"")
                count += 1
                prev = str(x)
                t += 1
            else:
                if str(x) == prev:
                    t += 1
                else:
                    f.write(", " + str(t) + ", " + "\"" + str(x) + "\"")
                    count += 2
                    prev = str(x)
                    t = 1
        f.write(", " + str(t) + "]")
    #f.write("\n")
    #f.write(str(count) + "\n")


for file in sorted(glob('cities/ban/n/*.csv')): write(file, "Ban", 1)
for file in sorted(glob('cities/che/n/*.csv')): write(file, "Che", 0.5)
for file in sorted(glob('cities/del/n/*.csv')): write(file, "Del", 1)
for file in sorted(glob('cities/gur/n/*.csv')): write(file, "Gur", 1.75)
for file in sorted(glob('cities/hyd/n/*.csv')): write(file, "Hyd", 0.5)
for file in sorted(glob('cities/kol/n/*.csv')): write(file, "Kol", 0.5)
for file in sorted(glob('cities/mum/n/*.csv')): write(file, "Mum", 1)

f.close()
