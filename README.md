# Game-Project
Under the Introduction to Programming 1 module, we were tasked with creating a game project using JavaScript. I used the p5.js library to develop this game.

**Disclaimer:** This coursework is an individual project and is not a group assignment. The code provided here is copyrighted and is the original work of the author. 
Replicating or distributing the code without proper authorization is strictly prohibited. This project is for **educational and academic purposes** only.

## Overview:
My game project, Treasure Trail, is a simple 2D game coded using the p5.js library. The development of this game is divided into four parts, with the midterm submission 
focusing primarily on the game setting and character interaction.

**-- Game Project: Part 1 --**

In Part 1, I was tasked with coding the basic drawing functions to set the game scenery, including clouds, mountains, trees, canyons, and collectibles. At this stage, 
we had not yet learned about loops or arrays, so all the objects were manually instantiated.

To build the game’s basic structure, we were taught the following techniques:

Shapes: Drawing ellipses, rectangles, triangles, lines, dots, etc.

Coloring: Using RGB values to fill shapes with color or to outline them.

Built-in Variables: Tracking the mouse's horizontal and vertical positions with mouseX and mouseY respectively, and utilizing functions like mousePressed() and keyPressed().

Using this foundational knowledge, I created my first background, which was further developed later on.

![Screenshot 2024-10-29 205147](https://github.com/user-attachments/assets/bfe51cc1-e23c-4cc4-a08b-2e89a726ae0c)

**Challenges:** I did not face significant challenges at this stage, as the tasks were relatively straightforward. However, I did encounter a minor issue related to a syntax
error caused by incorrect use of spaces within a string concatenation. Specifically, I had trouble displaying coordinates on the canvas as the mouse moved across the
screen. After some trial and error, I was able to resolve this issue.

**-- Game Project: Part 2 --**

In Part 2 of the project, I was tasked with creating a game character and integrating the background established in Part 1. Rather than manually instantiating components, we were introduced to the concept of variables. Initially, I found the process of declaring, initializing, and utilizing variables a bit overwhelming, as it was a new approach for me. However, as I progressed, I quickly realized how much more efficient and manageable this method made the development process.

The first draft of my character, which I created for testing purposes, served to validate the integration between components before moving on to more complex implementations.

[First draft of the character + code snippets of integration]

![Screenshot 2024-11-19 085628](https://github.com/user-attachments/assets/50e90744-7883-434d-880c-78c739ba4b99)

![Screenshot 2024-11-19 093937](https://github.com/user-attachments/assets/a71363ff-cf08-4b4a-9fb7-cbd8c34e5fd6)

![Screenshot 2024-11-19 093950](https://github.com/user-attachments/assets/a885d780-dbf4-44e2-804e-d9fd3e86b02d)

![Untitled design (1)](https://github.com/user-attachments/assets/3be3becc-5abf-4230-8800-5a3614dbb7d2)

**Challenges:** As this was a basic component, I did not particularly face any significant challenges!

**-- Game Project: Part 3 --**

In Part 3 of the project, I focused on coding the game character's interactions, which included moving left, right, jumping, collecting items, and falling into the canyon. At this stage, I learned about arrays and loops, which allowed me to significantly streamline my code. I also implemented randomization in the environment—objects like the moving clouds now vary in height each time the page is refreshed, and the peaks of the mountains and the collectables also use the random() function to add variety to the scene.

To manage these interactions effectively, I applied key programming concepts, including:

Conditional Logic
Conditionals with Types—Strings, Numbers, and Booleans

As a result, I made significant progress in both character development and environmental design, enhancing the overall gameplay experience.

![image](https://github.com/user-attachments/assets/5c8c1409-80c4-4c88-887a-e33c5a2c5c83)

For the collectables, I learned how to attach images dynamically (with references in the code) and animated the clouds to create a more immersive effect. Additionally, I refined the sky’s gradient color palette to give the scene an evening vibe, further enhancing the visual atmosphere.

[Code Demonstration]

![Untitled design (1)](https://github.com/user-attachments/assets/71c7e01b-d1be-4f5c-b045-4c160dcf9e68)

**Challenges:** One of the major challenges in this part of the project was implementing gravity and ensuring the character interacted correctly with various objects, especially when falling into the canyon. It was a frustrating process, as fixing one issue often caused another. Coordinating the gravity mechanism with the character's fall down the canyon took considerable effort and time. In fact, it took me about two weeks to identify the root cause and resolve the issue!

[Demonstration when gravity was not working]

![Untitled design (2)](https://github.com/user-attachments/assets/c8aba168-e710-4d44-af2f-9c8b1a804825)

[Demonstration when character interaction with canyon was not working]

![Screenshot 2024-12-22 104645](https://github.com/user-attachments/assets/6799c393-4a5b-4a83-b03f-8ccfd5a736bb)

![image](https://github.com/user-attachments/assets/2d7159df-ec35-4c8a-8ac6-d9b6ba95d89f)

![image](https://github.com/user-attachments/assets/3f1b41a9-329b-4f66-9e4f-d49bfb3fc206)

For the canyon interaction, I took extra care by adding console logs to track down the issue and make sure I didn’t overlook any details. As seen in the first image, the loop worked fine, but the character's interaction with the canyon was not functioning correctly. After persistent troubleshooting, I was finally able to pinpoint the error and resolve the problem.
















