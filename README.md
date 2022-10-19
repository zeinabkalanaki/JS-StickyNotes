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
## 💡 Number 7: Creating a pop-up window
 > At least two containers are needed that are parent and child - one of them for creating a transparent div that spans the entire page as the parent (here the div with class **overlay**) and the other for the popup own content as the child (here the div with class **popup**) that are placed in the **body** tag  like below
 
```
 <div class="overlay">
   <div class="popup">
     <header>
       <p class="popup-title"> Add note</p>
       <i class="uil uil-times"></i>
     </header>
     <form action="#">
         <div class="row note-title">
             <label> Title</label>
             <input type="text">
         </div>
         <div class="row note-content">
             <label> Description</label>
             <textarea ></textarea>
         </div>
         <button>Add</button>
     </form>
   </div>
 </div>

```
> To occupy the entire page by an element and place it over all the other elements roles below should be applied:
```
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
```
> to make it transparent the role below should be used:.

  ```
    background-color: rgba(0, 0, 0, 0.4);
 ```

> Since the overlay div accupy the entire page , the other page elements under it is not clicable. So to fix it 'pointer-events: none;' should be appliy to it. In this situation the elements inside the popup as the overlay's child will not be clickable any more, so whener we want to show the popup, it should be changed to 'pointer-events: auto;' 

> For placing a container exactly at the center of the screen roles below should be used:

```
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    max-width: 400px;
    width: 100%;
```
