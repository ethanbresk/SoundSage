# SoundSage &copy; 2023
MERN Stack music-inspired blogsite.

**Frontend Developers:** James Feeney, Kirt Grewal, Erik Maung

**Backend Developers:** Ethan Bresk, Aaron Kwan

## How to Run Project Locally:

### I. Connecting to the Database:

This project involves connecting your Spotify account to our website for login and obtaining whitelist access to our database. To get full access of SoundSage's functionality, please **whitelist your Spotify Account in SoundSage:**

Please contact the SoundSage database manager, Ethan Bresk (ebresk@g.ucla.edu), and provide him the email associated with your Spotify account.

### II. Local Installation and Server Setup:

1. Install **Node.js** and **node package manager (npm)** onto the device from which you would like to run SoundSage.

2. Run `git clone https://github.com/ethanbresk/SoundSage.git` in your terminal while in the directory where you would like to store a copy of SoundSage.

3. Enter the `SoundSage/Frontend/` project subdirectory.

4. Run `npm install` to acquire all of the node module dependencies that were not copied over due to its listing in our `.gitignore` document.

5. Run `npm start`. The port number should be **3000** by default. If otherwise, then ensure that port 3000 on your device is available and run `npm start -- --port 3000`.

6. Open another terminal window.

7. In the second terminal window, enter the `SoundSage/Backend/` subdirectory.

8. In this subdirectory, add the file `.env` to establish the environment. Direct connection to our MongoDB URI is needed for SoundSage functionality. Please contact our database manager, Ethan Bresk (ebresk@g.ucla.edu), to obtain the account information.

9. Run `npm install`.

10. Run `npm start`. The port number should be **8080** by script design.

## How to Navigate and Use the SoundSage website:

1. Enter `http://localhost:3000/` on your device's browser.

2. Log into your Spotify account by clicking the `Login` button in the navigation bar on the top right of the SoundSage website.

3. Click `Agree` upon entering the Spotify authentication prompt. You should return to the SoundSage website.

4. While on the landing page of the form `/`, you may:
	* Scroll through and click on a blog post preview
	* Search by blog title in the search bar at the top of the page.

5. While anywhere on SoundSage, you may do the following using the navigation bar at the top:
	* Check your notifications from the drop down menu.
	* Access the profile tab and access the settings tab.
	* Return to the home page by clicking the "**SOUNDSAGE**" logo at the top left.
	* Log out and log in.

6. After clicking on a blog post and being redirected to a post site of the form `/blogs/{id}`, you may:
	* Click on the author prepended with "*Written by:*" to enter the author's profile page.
	* Click on the album cover to be redirected to the Spotify page containing the respective album.
	* Like the post by clicking the "*Likes: {likes}*" button at the bottom of the blog post.
	* Comment on the post using the comment input section at the bottom of the blog post.

7. While on your profile page of the form `/profile`, you may:
	* Visit your Spotify page.
	* View your blogs in a scrollable collection.

8. While on another user's profile page of the form `/profile/{id}`, you may:
	* Visit their Spotify page.
	* View their blogs in a scrollable collection.

9. While on the create page of the form `/create`, you may:
	* Fill out the blog post form and search through the Spotify API song database by entering an Artist's name.
	* Link an album of the specified artist to your blog and post it directly to our Database.

10. While on the settings page of the form `/settings`, you may:
	* Click "**CHANGE THEME**" to alternate between light and dark color themes.
	* Click "**ALBUMS**" to enter into a test component feature of the Spotify API song database search.

11. To view notifications, click on the bell icon on the top right of the navigation bar. To log out of SoundSage, simply press the adjacent "**LOGOUT**" button.

12. Enjoy!

&copy; SoundSage 2023.
