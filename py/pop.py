import pandas as pd
import numpy as np
import math
import sys

fout = "js/pop.js"
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
            if x > 9:
                x = 10
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

write("cities/ban/pop.csv", "Ban", 9000)
write("cities/che/pop.csv", "Che", 7000)
write("cities/del/pop.csv", "Del", 7000)
write("cities/gur/pop.csv", "Gur", 6000)
write("cities/hyd/pop.csv", "Hyd", 5000)
write("cities/kol/pop.csv", "Kol", 5000)
write("cities/mum/pop.csv", "Mum", 10000)

f.close()
