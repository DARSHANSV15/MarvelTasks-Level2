Vi is a powerful and ubiquitous text editor that has been a staple in the UNIX and Linux environments. Known for its efficiency and versatility, Vi provides users with a minimalist yet highly customizable interface for editing text files directly within the terminal. 

Key features of Vi include its modal editing system, which allows users to switch between different modes for tasks such as inserting text, navigating, and making edits. This modal approach contributes to Vi's efficiency once users become accustomed to its unique commands and shortcuts.

Vi also offers extensive customization options through its configuration files, allowing users to tailor the editor to their specific needs and preferences. Additionally, Vi's integration with the command-line interface makes it a favorite among programmers and system administrators for quickly editing configuration files, scripts, and other text-based documents.

Despite its steep learning curve, mastering Vi can significantly boost productivity, especially for those who spend a lot of time working within terminal environments or on remote servers. Its lightweight design and widespread availability make Vi an essential tool for anyone working with text files in a command-line environment.
___

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
