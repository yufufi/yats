# yats

Yats is yet another task service that provides a **RESTful API** for accessing your tasks, a task watcher that provides **event** based on your tasks. All your task files are stored in your favorite **storage** of choice. You can access your task either through our web site or with your favorite editor that supports **taskpaper** files.

Your task assistant

## Platform Components

### parser
Responsible from parsing taskpaper files and creating the yats object model.

### model
Yats object model that represetns **projects**, **tasks**, **tags**, **comments** in memory.

### watcher
Scans .taskpaper files and creates events. Only a subset of these events are support when files are manually altered.

- A project/task/tag has been added/removed to a file/project/task 
- A project/task 
- A tag detail matches a criteria
- A tag matches a criteria

### scheduler
Send me list of tasks due today
Send me a list of tasks that match this
Read me later
Every week send me all the tasks that has this etc

### api
- Add a default task
/projects/default/addTask

- Add a new project
- Add a tag to a task/project
- Remove a tag from a task/project

### website

# Features

## Events

### Event Platforms
- IFTTT
- Flow
- SMS
- Email
- iOS (How?)

## API
REST API

- Get projects
- Get tasks [internal/costly] 
- Get tasks in a project
- Get tasks with tag/s
- New project
- New task
 
# Syntax

# Premium vs Free
refresh every 1 hour vs 1min
- Max x files scan folder for all files
- Get your own task service running (how do I licencse)


Platform agnostic
Text format

## Storage:
- Dropbox @p0  @iftt @flow
- Onedrive @p0 @flow
- Google Drive
- iCloud
- Azure
- HTTP
- Local

## Service:
Azure
Google
Amazon for service
Microsoft 

## Syntax
Can I support .net types
	
