# MarvelTasks-Level2

# Task 1 - JavaScript

![JS-img](https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png)

The objective of this task is to learn the basics of the programming language **JavaScript**.

JavaScript is a versatile programming language primarily used for web development. Its specialty lies in its ability to interact with HTML and CSS to create dynamic and interactive web pages. Here are some of its key features and uniqueness:

1. *Client-Side Scripting*

2. *Event-Driven*

3. *Asynchronous Programming*

4. *Dynamic Typing* 

5. *Prototype-based Inheritance* 

Important topics in JavaScript include:

1. *Basic Syntax and Data Types:* Understanding variables, operators, data types like strings, numbers, arrays, objects, and basic control flow structures like if statements and loops.

2. *Functions:* Learning about function declarations, expressions, anonymous functions, arrow functions, and function scope.

3. *DOM Manipulation:* Interacting with the Document Object Model (DOM) to dynamically change HTML and CSS, handling events, and updating page content.

4. *ES6+ Features:* Exploring new features introduced in (ES6) and later versions, such as let and const, arrow functions, classes, destructuring, spread/rest operators, and modules.

5. *Error Handling:* Handling errors gracefully using try-catch blocks and understanding common JavaScript errors.

#### My hands-on experience >>>>

I have created this wonderfull static webpage, **Student Performances Calculator** using JavaScript. It take name, marks of students through a **html** form and calculate the following results:

* Percentage of each student.
* Class average.
* Rankings of the students.

![Task1-img1](https://img.playbook.com/fYKBWGTmPHI_UK8tueDTfW8c1BK9IFjIFQ3ML85o27k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzAzZWQ3ZWZj/LTJlMjMtNDY5Zi05/MjZkLWE3YzA3OTky/MTQxOQ)

![Task2-img2](https://img.playbook.com/bruZqjlcu__1DUwo8o0cC7YhEDUrE3uxpPuej7JQiGg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY0N2NkMGEx/LTMxNmEtNGE1Zi04/NjY2LTc0YTM3NDAy/MTY2Nw)

[Check the full code here (Github repo).](https://github.com/DARSHANSV15/MarvelTasks-Level2/tree/main/Task1_JavaScript)

[Link to the live webpage](https://student-performance-calculator.netlify.app/)
________________________________________
# Task 4: Get familiar with the command line on ubuntu:

* Create a folder named test.
* cd into that folder.
* Create a blank file without using any text editor.
* List the files in that folder.
* Create 2600 folders in this folder where each folder is named M90.
```shell
for i in {1..2600}; do
    mkdir "M$i"
done
```
* Concatenate two text files containing any random text and display them on the terminal.
```shell
echo "Random Text File 1" > file1.txt
echo "Random Text File 2" > file2.txt
cat file1.txt file2.txt
```
![](https://img.playbook.com/WRowWO_KNQkxpIRH3UckRfbZ0cRodQDZHid0eur5XAU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzVlMTM2YTcx/LWY3N2ItNGEyMS05/Yjc5LTJhYmY3ZGY4/NGUwYQ)

![](https://img.playbook.com/Mc1LEdbvOjzHSmuGyO_bGaJ6OXaNXUGm64hjQuoMbkg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA4NTU4Mjk2/LTFkMTktNDRhZi1i/YmM0LTlkMmUwMWY0/YjIzOQ)
<br>
[Check the full code here (Github repo).](https://github.com/DARSHANSV15/MarvelTasks-Level2/tree/main/Task4_UbuntuCLI)
<br>
_____

# Task 5 - VI

Vi is a powerful and ubiquitous text editor that has been a staple in the UNIX and Linux environments. Known for its efficiency and versatility, Vi provides users with a minimalist yet highly customizable interface for editing text files directly within the terminal.  
<br>
Key features of Vi include its modal editing system, which allows users to switch between different modes for tasks such as inserting text, navigating, and making edits. This modal approach contributes to Vi's efficiency once users become accustomed to its unique commands and shortcuts.

Vi also offers extensive customization options through its configuration files, allowing users to tailor the editor to their specific needs and preferences. Additionally, Vi's integration with the command-line interface makes it a favorite among programmers and system administrators for quickly editing configuration files, scripts, and other text-based documents.  
<br>
Despite its steep learning curve, mastering Vi can significantly boost productivity, especially for those who spend a lot of time working within terminal environments or on remote servers. Its lightweight design and widespread availability make Vi an essential tool for anyone working with text files in a command-line environment.
<br><br>
To open an existing file with Vi text-editor, use the following command
```shell
vi/path/to/file
```
This command works even if the file doesn't exist yet, Vi will create a new file and write it to specified location when you save the file.  

<br>

To edit a system file, use the keyword **sudo**
```shell
sudo vi/path/to/file
```
If you are using a non-ubuntu version of linux use **su** instead of sudo.  

## Command Mode
Vi is a modal text editor, it opens in command mode. Trying to type at this screen will result in unexpected behavior.  

What can be done in command mode?
1. Move the cursor with arrow keys.
2. Press **x** to delete the character under the cursor.
3. Press **dd** to delete the entire line of text.
4. To copy text in command mode ,position your cursor at the left or right of the text that you want to copy and press the **v**  key. Move the cursor to select text and the press **y** to copy the selected text.
5. To cut, use **x** instead of y.
6. To paste the copied/ cut text, place the cursor at the desired location and press **p** key in command mode.  
7. To undo changes, press **u**.  
8. To forward search some text in the file, type **/some-text** in the command mode.  
9. To backward search some text in the file, type **?some-other-text** in the command mode.  

## Insert Mode
* Allows to insert text in Vi.  
* Press **i** key once to enter the insert mode after you are positioned the cursor in command mode.  
* Start typing any text, now it is interpreted as simple text rather than commands.  
* The i key will enter the insert mode in the last line of the file.  
* The **o** key will enter the insert mode from the next new line.  
* The **a** key will enter the insert mode with a space.  
* To return back to command mode press the **esc** key.  

## Save and Quit
* To save the file, type **:w + Enter** in command mode.  
* To save the file and quit the Vi text editor, type **:wq + Enter** in command mode.  
* To quit Vi, type **:q + Enter**.  
* Vi wont let you quit if you've modified the file since you last saved.  
To discard changes and quit Vi forcefully, type **:q! + Enter**.  

### Hands on experience >>>>>
I learnt to edited text files in VI text-editor in Linux systems. I have edited a complete text file in VI, the imges and link to the repo is given below.  

![](https://img.playbook.com/Al1rMhZmvL7-be13uPz-mqO9djXBnXZ99Z44dlN7BNA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc3MDM3MGI3/LTQ0MDMtNGE4OC1i/YmU0LWVlM2Y4Zjky/OGY0NA)

![](https://img.playbook.com/grcS7bRhXgDNSG9mMlZ4gPEVMyt54bb1sN7GIuhqvtk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FlOGVlZjY2/LWIzNzEtNGZkYi05/NGYyLTMxOTMwMjEw/MTkyYQ)

[Check the full code here (Github repo).](https://github.com/DARSHANSV15/MarvelTasks-Level2/tree/main/Task5_VI)
_____

# Task 6 - Linux Continued

Objectives of this task:
* Basics of regex and piping.
* Learn how grep works.
* Use grep to extract login times within a date/time range from the login logs using the 'last' command.
* Pipe this information into a text file and put it into a folder named logs. Zip this folder using gzip and tar.  

### Hands on experience >>>>>

To create an empty folder named logs and an empty file.  
```shell
mkdir logs
cd logs/
touch task6.txt
```  
![](https://img.playbook.com/v6stDpEFvEv85cEl8SJov0gz-3NlwLm80vkIvb5vyeY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MwY2FjZTQ4/LWMzNjAtNGJhMS04/NDgwLWY4YjliMWM0/MDliYw)
To fetch login times using **last** command, to extract login times within a date/time range from the login logs and  pipe this information into a text file. 
```shell
last | grep '.2[0-9] 1[3-9]:.' > task6.txt
```  
![](https://img.playbook.com/Rh-gYLlHjlarNUgXpUDLSIXgkjvre9Juf9Yn1xTXINQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RiNDRkZjMx/LTBiN2ItNGJhMS1i/ZTBjLWE5YmNjOTFj/NTFmNw)
And finally, zip this folder using gzip and tar.  
```shell
tar -cvf logs.tar logs
gzip logs.tar
```  
![](https://img.playbook.com/xAgLCJjB2SDgO5Z8PQHLMpOwM3Yt2scWiHC0ZeTPjmg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJmMmY3NGRi/LWFiYTEtNDIwNy1h/ZWU3LTQzZThmMzU1/Y2ExMw)
_____