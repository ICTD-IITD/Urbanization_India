from glob import glob
import pandas as pd
import numpy as np
import math
import sys

fout = "js/popuload.js"
f = open(fout, "w")

def write(fin, fac):
    df = pd.read_csv(fin)
    arr = df.T.to_numpy()
    prev = ""
    t = 1
    count = 1

    for r in range (1, np.size(arr, 0)):
        for c in range (0, np.size(arr, 1)):
            if arr[r][c] >= 0:
                x = math.floor(arr[r][c]/fac)
            else:
                x = arr[r][c]
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


for file in sorted(glob('data/conn/pload/*.csv')): write(file, 2000)
for file in sorted(glob('data/edu/pload/*.csv')): write(file, 2000)
for file in sorted(glob('data/govt/pload/*.csv')): write(file, 2500)
for file in sorted(glob('data/health/pload/*.csv')): write(file, 2000)
for file in sorted(glob('data/utility/pload/*.csv')): write(file, 2000)


f.close()
