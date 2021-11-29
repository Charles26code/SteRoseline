#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd
import numpy as np
import subprocess
from functools import reduce
import re
re.compile('<title>(.*)</title>')
subprocess.call(['sh', './luckylukeUser.sh']) # Thanks @Jim Dennis for suggesting
print("End script exec")
with open('output.txt','r') as f:
	l_descriptionUtilisateur=[]
	for line in f:
		strip_lines=line.strip()
		l_descriptionUtilisateur=strip_lines.split()
print(l_descriptionUtilisateur)


# creation of tables that we plan to obtain 
# description of the wines in input are simulated
descriptionVin1 = 'complexe pistache bio bio bio bio'
descriptionVin2 = 'savoureux sombre miel bio bio bio'
descriptionVin3 = 'savoureux cher aromes rouge bio bio'
descriptionVin4 = 'bio bleu cher chocolat pistache cher'
descriptionVin5 = "test test test test test test"

# removal of the punctuation wine in case
l_descriptionVin1 = re.sub(r"[^a-zA-Z0-9]", " ", descriptionVin1.lower()).split()
l_descriptionVin2 = re.sub(r"[^a-zA-Z0-9]", " ", descriptionVin2.lower()).split()
l_descriptionVin3 = re.sub(r"[^a-zA-Z0-9]", " ", descriptionVin3.lower()).split()
l_descriptionVin4 = re.sub(r"[^a-zA-Z0-9]", " ", descriptionVin4.lower()).split()
l_descriptionVin5 = re.sub(r"[^a-zA-Z0-9]", " ", descriptionVin5.lower()).split()

wordsetWine = reduce(np.union1d, (l_descriptionVin1, l_descriptionVin2, l_descriptionVin3, l_descriptionVin4, l_descriptionVin5))

print(wordsetWine)
print("");print("")

# removal of user punctuation
userWordset = l_descriptionUtilisateur
print(userWordset)
print("");print("")

# Extraction function of the characteristics of each wine
# Specified key dictionary, which corresponds to the words of the Vocabulary
# Iterations words contained attribution frequency of each word
def calculateBOW(wordset,l_wine):
  tf_diz = dict.fromkeys(wordset,0)
  for word in l_wine:
	  tf_diz[word]=l_wine.count(word)
  return tf_diz

def calculateBOWUser(user,l_user):
  tf_diz = dict.fromkeys(user,0)
  for word in l_user:
	  tf_diz[word]=l_user.count(word)
  return tf_diz

# Wine Part number depends 
wineBow1 = calculateBOW(wordsetWine,l_descriptionVin1)
wineBow2 = calculateBOW(wordsetWine,l_descriptionVin2)
wineBow3 = calculateBOW(wordsetWine,l_descriptionVin3)
wineBow4 = calculateBOW(wordsetWine,l_descriptionVin4)
wineBow5 = calculateBOW(wordsetWine,l_descriptionVin5)

# Wine dataframe assembly
df_wineBow = pd.DataFrame([wineBow1,wineBow2,wineBow3,wineBow4,wineBow5])

# User Part - same phylosophy as wine but matrix will be defined by 1 x N rows (features)
# matrix adaptable according to the data of the DB regarding wines


usrBow = calculateBOWUser(userWordset,l_descriptionUtilisateur)
df_usrBow = pd.DataFrame([usrBow], index=['userFeatures'])
print(df_wineBow)
print("");print("")
print(df_usrBow)
print("");print("")
# displays only the top of the dataframe (useful if a lot of refs are described)
#df_wineBow.head() 

print("DataFrame Vins")
display(df_wineBow)
print("");print("")
print("DataFrame Utilisateur")
display(df_usrBow)
print("");print("")

# Word order and meaning are lost with this method.
# Use TF-IDF to fix this problem (not necessary in the context of this PoC)
# To compare dataFrames

mergedResult = df_wineBow.append(df_usrBow, ignore_index=False)

display(mergedResult)
filteredResult = mergedResult.dropna(axis='columns')
display(filteredResult)

# Count raws for each lines
# Deleting userLines to fetch wine features for loop will be implemented soon...
countedResult=(filteredResult != 0).sum(axis = 1)
dfResult=pd.DataFrame(data=countedResult)
display(dfResult)  # Ideal wine
finalResult = countedResult.drop(index='userFeatures')
dfFinalResult=pd.DataFrame(data=finalResult)
display(dfFinalResult) # Other wines


# Delete the userFeature line to determine the relevant wines
coherent_wine = np.argmax(dfFinalResult)
print("Most coherent wine is : ", coherent_wine, "\n")
deletedFResult = dfFinalResult.drop(index=coherent_wine)
a = np.argmax(deletedFResult)
deletedFResultA = deletedFResult.drop(index=a)
b = np.argmax(deletedFResultA)

print("Other wines similar to your taste, sorted by relevance are : ", a,"and", b, "\n")
print("You must understand that the above mentioned numbers are wine references in relation to the input data base. This algorithm will be implemented later during the evolution of the project when testing in a sandboxed environment ")


# In[ ]:





# In[ ]:




