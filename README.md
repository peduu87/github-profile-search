# GitHub Profile Search  
**Access it on [GitHub Pages](https://peduu87.github.io/github-profile-search/).**

## About the project  
GitHub Profile Search is a simple HTML, CSS (stylized with Bootstrap), and JavaScript-based web client that allows the user to search for public GitHub profiles and display basic information about them.  

This tool uses GitHub's public API to retrieve data, such as the profile picture, name, username, number of followers, location, account creation date, and a link to the GitHub page of the user searched.  

The goal behind this project is purely educational, made for learning purposes only — it has no commercial intent. All development was carried out by a single developer as a way to experiment with API integration, client-side logic, and responsive layout practices.

## How to use  
The application interface is composed of three main areas: the search bar, the history of previous searches, and the profile display card.  

### Search bar  
At the top of the screen, there is a centered input field where the user can type a GitHub username and click the **Search** button. Once the query is sent, the application will attempt to retrieve the profile data linked to that username.  

If the username is valid and exists on GitHub, their information will be displayed on the card below. Otherwise, the system will either display a blank card with default values or remain unchanged.

### History  
Below the search bar, there's a **History** section, which stores and displays the avatars and usernames of previously searched profiles during that session.  

This makes it easy for the user to revisit profiles already searched by just clicking them instead of retyping their usernames.

### Profile  
This is the area where the fetched data is displayed. It contains the following fields:
- **Profile picture** (avatar);
- **Full name**, if available;
- **GitHub username**;
- **Number of followers**;
- **Account creation date**;
- **Location** (if provided);
- **Link to the GitHub profile**.

If the searched profile doesn't provide some of this information (like location or name), those fields will appear empty or as default values.  

All content is neatly displayed in a stylized card for better readability and user experience.   

In the bottom of the profile card, the **profile link** can be clicked — opening the GitHub profile in a new browser tab. In the right-side of this, there is a **copy button**, copying the profile link to the clipboard, which can be used to share the profile and so on.

## Bug reports and other comments  
If you notice any issue, unexpected behavior, or just feel like sharing your thoughts, feel free to reach out at pedro.h.silva8787@gmail.com. Your feedback is more than welcome!

## Credits  
Made by **Pedro H. Silva**, inspired and supported by Professor [Glauco Todesco](https://github.com/glaucotodesco).  

2025  
