from glob import glob
import pandas as pd
import numpy as np
import math
import sys

fout = "js/num.js"
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

""" write("mumbai/num_connectivity.csv", "Mumbai", 20)
write("mumbai/num_education.csv", "Mumbai", 150)
write("mumbai/num_govt_fac.csv", "Mumbai", 150)
write("mumbai/num_health.csv", "Mumbai", 200)
write("mumbai/num_utility.csv", "Mumbai", 50) """

for file in sorted(glob('cities/ban/num/*.csv')): write(file, "Ban", 20)
for file in sorted(glob('cities/che/num/*.csv')): write(file, "Che", 20)
for file in sorted(glob('cities/del/num/*.csv')): write(file, "Del", 20)
for file in sorted(glob('cities/gur/num/*.csv')): write(file, "Gur", 20)
for file in sorted(glob('cities/hyd/num/*.csv')): write(file, "Hyd", 20)
for file in sorted(glob('cities/kol/num/*.csv')): write(file, "Kol", 20)
for file in sorted(glob('cities/mum/num/*.csv')): write(file, "Mum", 20)

f.close()
