# hexfurryfest.github.io
The motivation for this repo is to provide an easy-to-update serving location for the Dynamic World© system for HFF worlds.

The Dynamic World© system allows worlds to dynamically update certain parts to allow for changes without needing to make changes to the Unity project and reupload the world with the changes. For example, in a party world with a video player and a poster, you can have it set to lock the video player to the official party stream and show the DJ lineup as the poster, but once the event is over then you can push a config change to unlock the video player and put a generic organization image on the poster.

## File Structure
Each world that uses this system has a folder made with its name, and within that is contained a `config.json` and `latest.txt` file as the bare minimum. Any additional resource files (e.g. poster images) can be included in that directory or a subdirectory (specific to that world's needs).

More information about the `config.json` file can be found in the [Config Structure](#config-structure) section.

The `latest.txt` should contain the timestamp of when the resources for a world have been updated. The exact format doesn't matter as long as it's unique on each update since the world will periodically check this file to see if the contents changed in order to trigger a refresh of its resources.

The `staff.json` at the root should be updated in order to inform the staff list in the event configs. Refer to the staff example of the Config Structure documentation. (The `pull_staff_from_vrchat_group.js` file is included in the root to assist in doing that)

### Example
```
/
    HFF6/
        config.json
        current_lineup.jpg
        latest.txt
    HFF_Hub/
        config.json
        latest.txt
    HFF8/
        config.json
        latest.txt
        <resources>
    staff.json
```

### Legacy
For legacy reasons, the following structure is left as a vestigial part of the early versions of the system. It can be cleaned up once those worlds are updated to no longer use these resources.
```
/
    images/
        HFF6/
            current_lineup.jpg
    staff/
        Hub.json
```

## Config Structure

### WARNING
Always use a JSON validator to make sure the changes are actually valid, otherwise you may end up breaking things in the world.
The [JSON Lint](https://jsonlint.com/) site has one available.

### Staff
it is recommended to keep the staff list in alphabetical order to make it easy to find someone if necessary
uses the result of [VRCPlayerApi.displayName](https://udonsharp.docs.vrchat.com/vrchat-api/#vrcplayerapi) to do the matching
use display names to make it easier to set up custom events for non-staff people (this way we don't have to look up their player IDs)
empty staff list means there are no staff restrictions (i.e. everyone gets treated as staff, like when a world is opened up for public use)

### Video
main stream
    regular mode
    event mode
panel stream

### Example
The following represents an example of the contents of a `config.json` file:
```
{
    "videos": [
        {
            "desc": "",
            "url": "",
            "locked": true
        }
    ],
    "objects": [
        {
            "desc": "",
            "enabled": false
        }
    ],
    "staff": [
        {
            "name": "FexDaFox"
        },
        {
            "name": "Aves Protocol"
        }
    ]
}
```
