<h2>Urbanization India</h2>

<h4>Reading Data</h4>
The data for each city is read into a DataFrame from a csv file using the Python libraries pandas and numpy. Data from this dataframe is classified into ranges and then written into a java array. Data stored in arrays is compressed, i.e. data is followed by the number of time it occurs consecutively to reduce the size of the arrays. 

<h4>Rendering Data to Google Maps</h4>
Google Maps are imported to the website using an API key. Grids are rendered to the maps using PolyLines. The compressed data arrays are now decompressed and colors are assigned to grids based on the data ranges using the getColorArrays function. Finally, the legends are added to the maps using the makeLegend functions. 

<h4>Research Paper</h4>
<a target="_blank" style="text-decoration: underline" href="https://www.cse.iitd.ac.in/~aseth/urbanization.pdf"> 
Characterizing The Evolution Of Indian Cities Using Satellite Imagery And Open Street Maps</a> <br />
<i> C. Bansal, A. Singla, A. K. Singh, H. O. Ahlawat, M. Jain, P. Singh, P. Kumar, R. Saha, S. Taparia, S. Yadav, A. Seth </i>
<br /> ACM COMPASS 2020 



