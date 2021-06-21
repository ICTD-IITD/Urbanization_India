from glob import glob
import pandas as pd
import numpy as np
import math
import sys

fout = "js/n2.js"
f = open(fout, "w")

def write(fin, fac):
    df = pd.read_csv(fin)
    arr = df.T.to_numpy()
    prev = ""
    t = 1
    count = 1

    for r in range (1, np.size(arr, 0)):
        for c in range (0, np.size(arr, 1)):
            x = math.floor(arr[r][c]/fac)
            if x > 9:
                x = 10
            if c == 0:
                f.write("\nvar "  + str(df.columns[r]) + " = [")
                t = 0
            elif c == 1:
                f.write("\"" + str(10-x) + "\"")
                count += 1
                prev = str(x)
                t += 1
            else:
                if str(x) == prev:
                    t += 1
                else:
                    f.write(", " + str(t) + ", " + "\"" + str(10-x) + "\"")
                    count += 2
                    prev = str(x)
                    t = 1
        f.write(", " + str(t) + "]")
    f.write("\n" + str(count))


for file in sorted(glob('data/conn/n/*.csv')): write(file, 20)
for file in sorted(glob('data/edu/n/*.csv')): write(file, 150)
for file in sorted(glob('data/govt/n/*.csv')): write(file, 150)
for file in sorted(glob('data/health/n/*.csv')): write(file, 200)
for file in sorted(glob('data/utility/n/*.csv')): write(file, 50)


f.close()
