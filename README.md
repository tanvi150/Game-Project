# Game-Project
Under the Introduction to Programming 1 module, we were tasked with creating a game project using JavaScript. I used the p5.js library to develop this game.

**Disclaimer:** This coursework is an individual project and is not a group assignment. The code provided here is copyrighted and is the original work of the author. Replicating or distributing the code without proper authorization is strictly prohibited. This project is for **educational and academic purposes** only. The development was carried out using Visual Studio Code on the Windows operating system.

## Overview:
My game project, Treasure Trail, is a simple 2D game coded using the p5.js library. The development of this game is divided into six parts, with the midterm submission 
focusing primarily on the game setting and character interaction.

## Instructions:
**1. Coin Collection:** There are 25 coins scattered across the game, all of which must be collected to proceed to Level 2. If any coins remain uncollected, the message "Game Incomplete" will appear. To restart, simply refresh the page.

**2. Obstacles in Level 1:** In this level, the primary obstacles are enemies and canyons. Avoid falling into the canyons or coming into contact with enemies.

**3. Lives and Respawning:** If you fall into a canyon or touch an enemy, you will lose a life and respawn at the starting position of the current level, where you will continue with one less life.

**4. Game Over:** If all lives are lost, the "Game Over" message will appear. Press 'Enter' to restart the game and try again.

**5. Level 2 Coin Collection:** In Level 2, you must collect a total of 50 coins, which includes the 25 coins from Level 1. Once all coins are collected, the message "Game Finished" will be displayed, accompanied by fireworks for a celebratory finish.

**6. New Challenges in Level 2:** Platforms are introduced in Level 2, and additional coins are placed on these platforms, increasing the difficulty and adding an extra challenge for players.

**[Final Game Screenshots]**

-- Level 1 of the Game --

![Screenshot 2025-02-04 212347](https://github.com/user-attachments/assets/16584c44-676a-4343-a6de-39bb8efe04d4)

-- Completion of Level 1 & Progression to Level 2 --

![Screenshot 2025-02-04 212550](https://github.com/user-attachments/assets/13decc4b-6169-4070-b956-01671781e233)

-- Incomplete Level 1: Did not collect ALL 25 coins --

![Screenshot 2025-02-04 212959](https://github.com/user-attachments/assets/9ac9409d-8e68-4acd-a861-5d8d4e567267)

-- Lost ALL the lives --

![Screenshot 2025-02-04 212804](https://github.com/user-attachments/assets/f1e4a453-8ada-4069-95bd-85fc4bc98e15)

-- Completion of Level 2 --

![Screenshot 2025-02-04 213610](https://github.com/user-attachments/assets/609eaaaa-a029-41b8-9947-13382cdd58dd)


Below is an overview of the game's development and progression.


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

**Challenges:** One of the major challenges in this part of the project was implementing gravity and ensuring the character interacted correctly with various objects, especially when falling into the canyon. It was a frustrating process, as fixing one issue often caused another. Coordinating the gravity mechanism with the character’s fall required significant trial and error. After troubleshooting and testing multiple approaches over a couple of weeks, I was able to identify the root cause and resolve the issue.

[Demonstration when gravity was not working]

![Untitled design (3)](https://github.com/user-attachments/assets/6fa9c80d-63ad-49fd-8d81-648228a39b00)

[Demonstration when character interaction with canyon was not working]

![Screenshot 2024-12-22 104645](https://github.com/user-attachments/assets/6799c393-4a5b-4a83-b03f-8ccfd5a736bb)

![image](https://github.com/user-attachments/assets/2d7159df-ec35-4c8a-8ac6-d9b6ba95d89f)

![image](https://github.com/user-attachments/assets/3f1b41a9-329b-4f66-9e4f-d49bfb3fc206)

For debugging, I used console.log to track down the issue, which helped me pinpoint the error. As shown in the first image, the loop was working, but the character’s interaction with the canyon was not functioning correctly. After extensive troubleshooting, I finally resolved the issue.

**-- Game Project: Part 4 & Part 5--**

In Part 4 of the project, I focussed on the interaction between the character and objects in arrays. In this part, I introduced multiple canyons and applied character
interaction. That is, it falls when it comes across any canyon. This is very similar to the previous part and does not require much elaboration. However, the most difficult
section of this project was again the interaction between the character and the canyon. The major problem was that the character could detect the canyon yet did not fall into it.

[Demonstration of Code Detection]

![Untitled design (1)](https://github.com/user-attachments/assets/8d5435ab-c8fd-45a9-838e-76fcccaacb71)

Later on, I figured out that I had to differentiate the isFalling (when character is pulled to the ground due to gravity), isPlummeting (when the character violently falls into the canyon) and isJumping (when the character jumps) commands clearly. Moreover, I realised that I had to also write a code where the character is able to identify all the canyons to fall into. Lastly, I also added in a conditional statement which prevents the character from double-jumping.

[Final Code Snippet for Canyon Interaction]

![image](https://github.com/user-attachments/assets/40058179-5dfe-4a1b-9687-2eecdf8f7a73)

[Code Snippet for Preventing Double-Jumps]

![image](https://github.com/user-attachments/assets/41adef33-d1d3-4e36-a3ef-d8902df9fe9e)

Part 5 is more about code enhancement such as refactoring it. So, everything is pretty much the same in terms of execution.

[Final Execution]

![Untitled design (2)](https://github.com/user-attachments/assets/715b31a7-ef53-42a9-9e0b-64b90a1228b5)

This ends the game project for midterm submission. Below are the rest of the parts related to the finals coursework and towards the end of the game level.

**-- Game Project: Part 6 --**

In this section, I focused on integrating fundamental game mechanics into the project. I successfully implemented components such as a game score, a lives system, and a checkpoint, which serves as the level's endpoint, represented by a flagpole. While these features were not strictly required for this phase, I opted to enhance the gameplay experience by adding another level. This additional feature was straightforward to implement and allowed for a more engaging and dynamic progression through the game. At the conclusion of Level 2, the game transitions to a "Game Finished" state, accompanied by celebratory fireworks created using particle and emitter functions, providing a satisfying conclusion to the level progression.

Challenges: In Part 6, one of the primary challenges I encountered was the implementation of fireworks. The difficulty stemmed from the fact that the constructor functions for fireworks were slightly different from standard functions, making it initially tricky to understand how to integrate them correctly. However, once I familiarized myself with the structure, I was able to quickly grasp the logic and successfully implement the fireworks effect. Another significant challenge was generating the 25 coins for each level, ensuring that the total score would correctly sum to 50 in Level 2. The challenge arose from maintaining a balanced distribution of coins across both levels while keeping the gameplay smooth. After careful debugging and decoding the logic, I was able to resolve the issue and ensure the coin collection mechanic functioned as intended.

**--Game Project: Part 7 --**

Part 7 was relatively straightforward, as it involved adding sound effects to the game to enhance the overall player experience. I sourced and integrated various audio elements, referencing sounds from Mixkit and other platforms. This addition significantly contributed to the atmosphere and interactivity of the game, making the gameplay more engaging and immersive.

**--Game Project: Part 8 --**

Part 8 presented a more complex challenge, as it involved adding enemies using Factory Functions and platforms using Constructor Functions. These concepts were quite different from the regular functions I had been using throughout Parts 1 to 5, which made the implementation process slightly difficult to grasp at first. Despite the initial learning curve, I was able to understand the distinctions and successfully apply both Factory and Constructor Functions. With persistence, I was able to effectively integrate these new elements into the game, enhancing both the gameplay mechanics and overall experience.


To conclude, this game project is the result of 5-6 months of hard work. As a beginner, I know there's still plenty of room to improve, but I'm very proud of the progress I've made along the way. Thanks for checking this out!

















