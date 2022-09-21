# **StickyNotes**

This stickynotes is developed by pure javascript and css and stores notes by using localstorage.

The final result is 👇




|![Final result](https://github.com/zeinabkalanaki/JS-StickyNotes/raw/main/images/0.png?raw=true)| ![Addinge new note by a popup](https://github.com/zeinabkalanaki/JS-StickyNotes/raw/main/images/1.png?raw=true)|![Editing and deleting a note](https://github.com/zeinabkalanaki/JS-StickyNotes/raw/main/images/2.png?raw=true)
|--|--|--|




## 💡 Number 1: Stacking containers side by side horizontally
 > CSS Grid is used for placing notes side by side as below
 
 ```
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 15px;
    
```
## 💡 Number 2: Creating a circular container
 > Like the add buttom in this stickynote, a circular container can be created by assigning a css class containing code below to a container
 
 ```
    width: 80px;
    height: 80px;
    border-radius: 50%;
    
```
## 💡 Number 3: Centering an element inside a container both horizontally and vertically
 > sdvsdv
 
 ```
    display: flex;
    align-items: center;
    justify-content: center;
    
```
## 💡 Number 4: Creating two-part sections
 > In this sample, a horizontal two-part section is used for footers' notes by code below
 
 ```
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
```

 > And a vertical two-part section is used for positioning element in note itself by code below
 
 ```
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
```
