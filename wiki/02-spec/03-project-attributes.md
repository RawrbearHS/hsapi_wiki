# Project Attributes

## `uuid`

Type: `string`

Project UUIDs are short strings which uniquely identify a project. They are assigned to a project whenever it is uploaded to Hopscotch’s servers, placed at the end of links to projects.

By default, project UUIDs are a unix timestamp in milliseconds of the UUID's creation, multiplied by `65536` (2^16), and converted to base 36.
