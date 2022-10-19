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
 > A CSS class with code below is need to assign to an container
 
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

 > And a vertical two-part section is used for positioning elements in a note itself by code below
 
 ```
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
```
## 💡 Number 5: Positioning an element relative to its parent
 > Suppose the parent element has class "**settings**" and its child has class "**menu**" as below
 ```
  <div class="settings">
    <i class="uil uil-ellipsis-h"></i>
    <ul class="menu">
      <li><i class="uil uil-pen"></i>Edit</li>
      <li><i class="uil uil-trash"></i>Delete</li>
    </ul>
  </div>
 ```
 
 > To do this, "**position: relative;**" should be set for the parent and "**position: absolute;**" should be adjusted for the child. To place the child relative to its parents, top and right or top and left must be set depending on the desired position like below.
 
 ```
 .settings {
    position: relative;
    
    cursor: pointer; //for being clickable
}

.settings .menu {
    position: absolute;
    
    bottom: 0;
    right: -5px;
}

 ```
 
 ## 💡 Number 6: Show and hide an element by hovering on it
 > Suppose that we want to toggle visibility of an an element with class **menu** that is inside an element with class **settings** like below:
  ```
 <div class="settings">
    <i class="uil uil-ellipsis-h"></i>
    <ul class="menu">
      <li><i class="uil uil-pen"></i>Edit</li>
      <li><i class="uil uil-trash"></i>Delete</li>
    </ul>
  </div>
  ```
 > To do this, "**transform: scale(0);** should be set for the container -here the element with class **settings**- and 3 item below for the desired element -here the element with class **menu**-

```
.settings .menu {
    transform: scale(0);
}

.settings:hover .menu {
    transform: scale(1);
    transform-origin: bottom right;
    transition: transform 0.2s ease;
}

```
