G-P-F
Used for searching profiles on Github.

A GitHub Profile Finder application using Githubs Api and the React App Framework.
What this application does is it allows users to search for Github users, when they've found the user they want, they can click on view profile link and itll taken them to another page that has a small summary of what repositories they have available to the public as well as their following and followers. A user can then click on a repository of their choice and be taken to that reporistory in Github.

At the moment the fethc requests cannot be used in quixk succetion, the API has a rate limit that stops multiple searches within a certain time frame so if you search a user and then immedialty search for anothger user, an erorr message will pop up in the devtools informing you that the rate limit has been reached. Overtime and with research I will hopefully find an alternative search method so the rate limit isnt a massive hindrence.