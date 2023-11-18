import pandas as pd
import numpy as np
from sklearn.metrics import confusion_matrix,precision_score,recall_score,accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
import matplotlib.pyplot as plt
dataset=pd.read_csv(r'E:\diabetes.csv')
x=dataset.iloc[:,[2,8]].values
y=dataset.iloc[:,8].values
xtrain,xtest,ytrain,ytest=train_test_split(x,y,test_size=0.25,random_state=0)
sc_x=StandardScaler()
xtrain=sc_x.fit_transform(xtrain)
xtest=sc_x.transform(xtest)
classifier=LogisticRegression(random_state=0)
classifier.fit(xtrain,ytrain)
y_pred=classifier.predict(xtest)
cm=confusion_matrix(ytest,y_pred)
print('Confusion matrix :',cm)
print('\n Accuracy of the classifier:',accuracy_score(ytest,y_pred))
print('\n the value of p:',precision_score(ytest,y_pred))
print('\n the value of r:',recall_score(ytest,y_pred))
plt.violinplot(y)
plt.show()
