clay-schemas
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-schemas
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-schemas
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-schemas.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-schemas
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-schemas.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-schemas/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-schemas
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-schemas.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-schemas.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-schemas
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-schemas.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-schemas
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-schemas.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Schemas for ClayDB

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-schemas --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Schemas.md.hbs" Start -->

<a name="section-doc-guides-02-schemas-md"></a>

Schemas
---------

+ [entity_schema.json](lib/entity_schema.json) - Schema for entity object
+ [policy_schema.json](lib/policy_schema.json) - Schema for policy object
+ [resource_schema.json](lib/resource_schema.json) - Schema for resource object


<!-- Section from "doc/guides/02.Schemas.md.hbs" End -->

<!-- Section from "doc/guides/03.Examples.md.hbs" Start -->

<a name="section-doc-guides-03-examples-md"></a>

Examples
---------

##### Example Entity

```json
{
  "id": "9a9cfbd9e15447239c1b5434c7b9ab27",
  "$$at": "2017-03-03T02:35:04.349Z"
}
```
##### Example Policy

```json
{
  "username": {
    "type": "STRING",
    "minLength": 2,
    "required": true,
    "unique": true
  },
  "birthday": {
    "type": "DATE"
  },
  "createdAt": {
    "type": "DATE",
    "default": "2012/12/12"
  },
  "orgId": {
    "type": "STRING"
  },
  "memberIndex": {
    "type": "NUMBER",
    "uniqueFor": [
      "orgId"
    ]
  },
  "pointer01": {
    "type": [
      "REF",
      "ENTITY"
    ]
  }
}
```
##### Example Resource

```json
{
  "name": "example-users",
  "domain": "example.com",
  "description": "Example resource of users"
}
```


<!-- Section from "doc/guides/03.Examples.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-schemas/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
