# Getting assignments

## To download all user favorites
```sh
scoreboad assigments favorites
```

This will print the following to the console:
```
tasker_id: 19 | tm_id: 17895 | author: null | hashtag: maproulette-challenge-17895 | user_id: 4012
tasker_id: 19 | tm_id: 17894 | author: null | hashtag: maproulette-challenge-17894 | user_id: 4012
```

You can filter which tasking manager the assignments are from using the `--tasker_id` flag, e.g: `scoreboard assignments favorites --tasker_id 19`

You can also pass the `--csv` flag to format the assignments as comma delimited rows.

```sh
scoreboard assignments favorites --csv
```

Will print:

```
tasker_id, tm_id, author, hashtag, user_id
19, 17895, null, maproulette-challenge-17895, 4012
19, 17894, null, maproulette-challenge-17894, 4012
```

## To download all team assignments
```
scoreboard assignments team-assignments
```

Similarly, you can use `---tasker_id` to filter which tasking manager you want the assignments from, and `--csv` to format the data in comma delimited rows.

## To insert a favorite
```
scoreboard assignments insert-favorite --tasker_id 19 --tm_id 17893 --user_id 4012  
```

Will add the campaign to a user's favorites

Running `scoreboard assignments favorites` will now print

```
tasker_id: 19 | tm_id: 17895 | author: null | hashtag: maproulette-challenge-17895 | user_id: 4012
tasker_id: 19 | tm_id: 17894 | author: null | hashtag: maproulette-challenge-17894 | user_id: 4012
tasker_id: 19 | tm_id: 17893 | author: null | hashtag: maproulette-challenge-17893 | user_id: 4012
```

## To insert a team assignment
Similarly, to add an assignment to `team_assignments` we use:

```
scoreboard assignments insert-to-team --tasker_id 19 --tm_id 17895 --team_id 1 --team_priority 1   
```

Running `scoreboard assignments team-assignments` will now print:

```
tasker_id: 19 | tm_id: 17895 | author: null | hashtag: maproulette-challenge-17895 | team_id: 1 | team_priority: 1
```