import pandas as pd
import numpy as np
import math
import sys

fout = "js/all.js"
f = open(fout, "w")

def write(fin, distt):
    df = pd.read_csv(fin)

    arr = df.T.to_numpy()
    f.write("\nvar " + distt + "_Grid_Coordinates = " + str(arr[1][0])) #Grid Coordinates
    compress(arr, df, distt, 7, 8, 0) #Grid Type

    del df ['Grid_number']
    del df ['Grid_coordinates']
    del df ['Grid_type']
    del df ['District_name']

    arr = df.T.to_numpy()
    compress(arr, df, distt, 0, np.size(arr, 0), 1)

def compress(arr, df, distt, ri, rf, flag):
    prev = ""
    for r in range (ri, rf):
        count = 1
        if (r == 0): #3ways
            fac = 50
        elif (r == 1): #4ways
            fac = 10
        elif (r == 2): #Road Length
            fac = 10000
        elif (r == 3): #Walkability
            fac = 0.3
        elif (r == 4): #Urban%
            fac = 0.1
        elif (r == 5): #Periurban%
            fac = 0.1
        elif (r == 6): #Rural%
            fac = 0.1
        elif (r == 7): #Class Label
            fac = 1

        for c in range (0, np.size(arr, 1)):
            if (flag):
                x = math.floor(arr[r][c]/fac)
            else:
                x = arr[r][c]
            if c == 0:
                f.write("\nvar " + distt + "_" + str(df.columns[r]) + " = [")
                t = 1
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

write("cities/ban/all.csv", "Ban")
write("cities/che/all.csv", "Che")
write("cities/del/all.csv", "Del")
write("cities/gur/all.csv", "Gur")
write("cities/hyd/all.csv", "Hyd")
write("cities/kol/all.csv", "Kol")
write("cities/mum/all.csv", "Mum")

f.close()
